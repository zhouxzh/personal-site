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

await cp(
  new URL('./courses/index.html', import.meta.url),
  new URL('./courses/index.html', outputDirectory),
);

for (const course of [
  'python-basic',
  'python-data-analysis',
  'fpga-system-design',
  'embedded-system-design',
  'vlsi-testing-technology',
  'microelectronic-device-modeling',
  'reinforcement-learning',
  'python-scientific-computing',
]) {
  await cp(
    new URL(`./courses/${course}/`, import.meta.url),
    new URL(`./courses/${course}/`, outputDirectory),
    { recursive: true },
  );
}

console.log('Built static site and embedded courses to dist/.');
