import tap from "tap";
import fs from "fs";

import { SDL } from "../src/sdl";

tap.test("SDL: Persistent Storage Manifest", async t => {
  t.plan(1);

  const validSDL = fs.readFileSync("./tests/fixtures/persistent_storage_valid.sdl.yml", "utf8");

  const sdl = SDL.fromString(validSDL, "beta2");
  const result = sdl.manifest();

  t.matchSnapshot(result, "Manifest matches expected result");
});

tap.test("SDL: Persistent Storage with class 'ram' must have 'persistent' set to false", async t => {
  t.plan(1);

  const invalidSDL = fs.readFileSync("./tests/fixtures/persistent_storage_invalid.sdl.yml", "utf8");

  t.throws(() => {
    const sdl = SDL.fromString(invalidSDL, "beta2");
    sdl.manifest();
  }, "Storage attribute 'ram' must have 'persistent' set to 'false' or not defined for service grafana");
});
