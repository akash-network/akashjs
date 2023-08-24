import tap from "tap";
import fs from "fs";

import { SDL } from "../src/sdl";

tap.test("SDL: IP Lease Manifest", async (t) => {
  t.plan(1);

  const validSDL = fs.readFileSync(
    "./tests/fixtures/ip_lease_valid.sdl.yml",
    "utf8"
  );

  const sdl = SDL.fromString(validSDL, "beta2");
  const result = sdl.manifest();

  t.matchSnapshot(result, "Manifest matches expected result");
});
