import tap from "tap";
import fs from "fs";

import { SDL } from '../src/sdl';

const testSDL = fs.readFileSync('./tests/fixtures/gpu_basic.sdl.yml', 'utf8');

const expectedManifest = JSON.parse(
  fs.readFileSync('./tests/fixtures/gpu_basic.manifest.json', 'utf8')
);

const expectedVersion = new Uint8Array([
  209, 23, 37, 232, 15, 222, 208, 180,
  21, 218, 104, 115, 8, 164, 232, 103,
  220, 198, 139, 187, 10, 159, 246, 151,
  237, 27, 125, 216, 196, 5, 153, 62
]);

tap.test("SDL: GPU Manifest", async (t) => {
  t.plan(1);

  const sdl = SDL.fromString(testSDL, 'beta3');
  const result = sdl.manifest();

  t.same(result, expectedManifest, "Manifest matches expected result");
});

tap.test("SDL: GPU Version", async (t) => {
  t.plan(1);

  const sdl = SDL.fromString(testSDL, 'beta3');
  const result = await sdl.manifestVersion();

  t.same(result, expectedVersion, "Manifest version matches expected result");
});