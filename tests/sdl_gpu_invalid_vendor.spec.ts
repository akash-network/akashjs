import fs from "fs";

import { SDL } from "../src/sdl";

describe("test sdl gpu invalid vendor", () => {
  it("SDL: GPU must throw if the vendor is invalid", () => {
    const invalidSDL = fs.readFileSync("./tests/fixtures/gpu_invalid_vendor.sdl.yml", "utf8");

    const t = () => {
      SDL.fromString(invalidSDL, "beta3");
    };

    expect(t).toThrow(`GPU must be one of the supported vendors (nvidia,amd).`);
  });

  it("SDL: GPU without vendor name should throw", () => {
    const invalidSDL = fs.readFileSync("./tests/fixtures/gpu_invalid_no_vendor_name.sdl.yml", "utf8");

    const t = () => {
      SDL.fromString(invalidSDL, "beta3");
    };

    expect(t).toThrow(`GPU must be one of the supported vendors (nvidia,amd).`);
  });
});
