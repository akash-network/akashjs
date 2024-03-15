import tap from "tap";
import fs from "fs";

import { SDL } from "../src/sdl";

tap.test("SDL: Create v3 Resource Groups", async t => {
  t.plan(1);

  const testSDL = fs.readFileSync("./tests/fixtures/gpu_basic.sdl.yml", "utf8");
  const sdl = SDL.fromString(testSDL, "beta3");

  t.matchSnapshot(sdl.groups(), "Groups matches expected result");
});
