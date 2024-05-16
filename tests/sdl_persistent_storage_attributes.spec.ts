import fs from "fs";

import { SDL } from "../src/sdl";

describe("test sdl persistent storage", () => {
  it("SDL: Persistent Storage Manifest", () => {
    const validSDL = fs.readFileSync("./tests/fixtures/persistent_storage_valid.sdl.yml", "utf8");

    const sdl = SDL.fromString(validSDL, "beta2");
    const result = sdl.manifest();

    expect(result).toMatchSnapshot("SDL: Persistent Storage Manifest");
  });
});
