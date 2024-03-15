import tap from "tap";
import fs from "fs";

import { SDL } from "../src/sdl";

const testSDL = fs.readFileSync("./tests/fixtures/gpu_basic.sdl.yml", "utf8");

const expectedManifest = JSON.parse(fs.readFileSync("./tests/fixtures/gpu_basic.manifest.json", "utf8"));

tap.test("SDL: GPU Manifest", async t => {
  t.plan(1);

  const sdl = SDL.fromString(testSDL, "beta3");
  const result = sdl.manifest();

  t.same(result, expectedManifest, "Manifest matches expected result");
});

tap.test("SDL: GPU Version", async t => {
  t.plan(1);

  const sdl = SDL.fromString(testSDL, "beta3");
  const result = await sdl.manifestVersion();

  t.matchSnapshot(result, "Manifest version matches expected result");
});
