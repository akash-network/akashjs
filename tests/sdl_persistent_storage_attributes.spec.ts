import fs from "fs";

import { SDL } from "../src/sdl";

describe("test sdl persistent storage", () => {
  it("SDL: Persistent Storage Manifest", () => {
    const validSDL = fs.readFileSync("./tests/fixtures/persistent_storage_valid.sdl.yml", "utf8");

    const sdl = SDL.fromString(validSDL, "beta2");
    const result = sdl.manifest();

    expect(result).toMatchSnapshot("SDL: Persistent Storage Manifest");
  });

  it("SDL: Persistent Storage with class 'ram' must have 'persistent' set to false", () => {
    const invalidSDL = fs.readFileSync("./tests/fixtures/persistent_storage_invalid.sdl.yml", "utf8");

    const t = () => {
      SDL.fromString(invalidSDL, "beta2");
    };

    expect(t).toThrow("Storage attribute 'ram' must have 'persistent' set to 'false' or not defined for service grafana");
  });
});
