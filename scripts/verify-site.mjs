import { access, readdir, readFile, stat } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const siteRoot = path.join(projectRoot, 'dist');
const htmlFiles = [];
const failures = [];

async function walk(directory) {
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const fullPath = path.join(directory, entry.name);

    if (entry.isDirectory()) {
      await walk(fullPath);
    } else if (entry.isFile() && entry.name.endsWith('.html')) {
      htmlFiles.push(fullPath);
    }
  }
}

async function isFile(filePath) {
  try {
    return (await stat(filePath)).isFile();
  } catch {
    return false;
  }
}

function candidatePaths(targetPath, rawPath) {
  if (rawPath.endsWith('/')) {
    return [path.join(targetPath, 'index.html')];
  }

  if (!path.extname(targetPath)) {
    return [targetPath, `${targetPath}.html`, path.join(targetPath, 'index.html')];
  }

  return [targetPath];
}

function isExternalReference(value) {
  return /^(?:#|https?:|mailto:|tel:|data:|javascript:)/i.test(value) || value.startsWith('//');
}

async function verifyLocalReference(pagePath, reference) {
  if (isExternalReference(reference)) {
    return;
  }

  const rawPath = reference.split('#')[0].split('?')[0];
  if (!rawPath) {
    return;
  }

  let decodedPath;
  try {
    decodedPath = decodeURIComponent(rawPath);
  } catch {
    decodedPath = rawPath;
  }

  const targetPath = decodedPath.startsWith('/')
    ? path.join(siteRoot, decodedPath.slice(1))
    : path.resolve(path.dirname(pagePath), decodedPath);

  if (!targetPath.startsWith(siteRoot)) {
    failures.push(`${displayPath(pagePath)} references a path outside dist/: ${reference}`);
    return;
  }

  for (const candidate of candidatePaths(targetPath, decodedPath)) {
    if (await isFile(candidate)) {
      return;
    }
  }

  failures.push(`${displayPath(pagePath)} references a missing local resource: ${reference}`);
}

function displayPath(filePath) {
  return path.relative(siteRoot, filePath).replaceAll(path.sep, '/');
}

async function verifyPage(pagePath) {
  const source = await readFile(pagePath, 'utf8');
  const ids = new Set();

  for (const match of source.matchAll(/\bid\s*=\s*(?:"([^"]+)"|'([^']+)')/gi)) {
    const id = match[1] ?? match[2];
    if (ids.has(id)) {
      failures.push(`${displayPath(pagePath)} contains a duplicate id: ${id}`);
    }
    ids.add(id);
  }

  if (source.includes('<html lang="C"')) {
    failures.push(`${displayPath(pagePath)} uses the invalid document language "C"`);
  }

  for (const tag of source.matchAll(/<(?:a|link|script|img|iframe|source|video|audio)\b[^>]*>/gi)) {
    const attribute = tag[0].match(/\b(?:href|src)\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s>]+))/i);
    const reference = attribute?.[1] ?? attribute?.[2] ?? attribute?.[3];
    if (reference) {
      await verifyLocalReference(pagePath, reference);
    }
  }
}

await access(path.join(siteRoot, 'favicon.ico'));
await walk(siteRoot);
await Promise.all(htmlFiles.map(verifyPage));

if (failures.length > 0) {
  console.error(failures.join('\n'));
  process.exitCode = 1;
} else {
  console.log(`Verified ${htmlFiles.length} HTML pages and their local resources.`);
}
