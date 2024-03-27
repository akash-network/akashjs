import tap from "tap";
import fs from "fs";

import { SDL } from "../src/sdl";

tap.test("SDL: fromString", async t => {
  t.plan(4);

  const validSDL = fs.readFileSync("./tests/fixtures/gpu_no_gpu_valid.sdl.yml", "utf8");
  const hasAttrSDL = fs.readFileSync("./tests/fixtures/gpu_no_gpu_invalid_has_attributes.sdl.yml", "utf8");
  const noVendorSdl = fs.readFileSync("./tests/fixtures/gpu_invalid_no_vendor.sdl.yml", "utf8");
  const invalidIntefaceSdl = fs.readFileSync("./tests/fixtures/gpu_invalid_interface.sdl.yml", "utf8");

  t.doesNotThrow(() => SDL.fromString(validSDL, "beta3"), "accept if GPU units is 0, and no attributes are present");

  t.throws(
    () => SDL.fromString(hasAttrSDL, "beta3"),
    new Error("GPU must not have attributes if units is 0"),
    "throw an error if GPU units is not 0, and the are no attributes present"
  );

  t.throws(
    () => SDL.fromString(noVendorSdl, "beta3"),
    new Error("GPU must specify a vendor if units is not 0"),
    "throw an error if GPU units is not 0, and the vendor is not present"
  );

  t.throws(
    () => SDL.fromString(invalidIntefaceSdl, "beta3"),
    new Error("GPU interface must be one of the supported interfaces (pcie,sxm)"),
    "throw an error if GPU interface is not supported"
  );
});
