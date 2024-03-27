import fs from "fs";

import { SDL } from "../src/sdl";

const testSDL = fs.readFileSync("./tests/fixtures/gpu_basic_ram_interface.sdl.yml", "utf8");

const expectedManifest = JSON.parse(fs.readFileSync("./tests/fixtures/gpu_basic_ram_interface.manifest.json", "utf8"));

describe("test GPU with interface", () => {
  it("SDL: GPU Manifest with ram & interface", () => {
    const sdl = SDL.fromString(testSDL, "beta3");
    const result = sdl.manifest();

    expect(result).toStrictEqual(expectedManifest);
  });

  it("SDL: GPU Version with ram & interface (snapshot)", async () => {
    const sdl = SDL.fromString(testSDL, "beta3");

    await expect(sdl.manifestVersion()).resolves.toMatchSnapshot("Manifest version matches expected result");
  });
});
