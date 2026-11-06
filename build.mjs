import { cp, mkdir, rm } from 'node:fs/promises';

const outputDirectory = new URL('./dist/', import.meta.url);
await rm(outputDirectory, { recursive: true, force: true });
await mkdir(outputDirectory);

for (const file of ['index.html', 'styles.css', 'script.js', '_headers']) {
  await cp(new URL(`./${file}`, import.meta.url), new URL(`./${file}`, outputDirectory));
}

await cp(new URL('./assets/', import.meta.url), new URL('./assets/', outputDirectory), {
  recursive: true,
});

console.log('Built static site to dist/.');
