import { faker } from "@faker-js/faker";

import { createGroupsWith, createManifestWith, readBasicSdl } from "../../../test/templates";
import { SdlValidationError } from "../../error";
import { SDL } from "./SDL";
import { v2ServiceImageCredentials } from "../types";
import omit from "lodash/omit";
import { AKT_DENOM, SANDBOX_ID, USDC_IBC_DENOMS } from "../../config/network";

describe("SDL", () => {
  describe("profiles placement pricing denomination", () => {
    it.each([AKT_DENOM, USDC_IBC_DENOMS[SANDBOX_ID]])('should resolve a group with a valid "%s" denomination', denom => {
      const yml = readBasicSdl({ denom });
      const sdl = SDL.fromString(yml, "beta3", "sandbox");

      expect(sdl.manifest()).toMatchObject(createManifestWith());
      expect(sdl.groups()).toMatchObject(
        createGroupsWith([
          {
            resources: [
              {
                price: {
                  denom: denom,
                  amount: "1000"
                }
              }
            ]
          }
        ])
      );
    });

    it("should throw an error when denomination is invalid", () => {
      const denom = "usdt";
      const yml = readBasicSdl({ denom });

      expect(() => SDL.fromString(yml, "beta3", "sandbox")).toThrow(
        new SdlValidationError(`Invalid denom: "${denom}". Only uakt and ${USDC_IBC_DENOMS[SANDBOX_ID]} are supported.`)
      );
    });
  });

  describe("endpoints", () => {
    it("should resolve with valid endpoints", () => {
      const endpointName = faker.lorem.word({ length: { min: 3, max: 10 } });
      const endpoint = {
        [endpointName]: {
          kind: "ip"
        }
      };
      const yml = readBasicSdl({ endpoint, denom: "uakt" });
      const sdl = SDL.fromString(yml, "beta3", "sandbox");

      expect(sdl.manifest()).toMatchObject(
        createManifestWith([
          {
            services: [
              {
                resources: {
                  endpoints: {
                    1: {
                      kind: 2,
                      sequence_number: 1
                    }
                  }
                },
                expose: [
                  {
                    ip: endpointName,
                    endpointSequenceNumber: 1
                  }
                ]
              }
            ]
          }
        ])
      );
      expect(sdl.groups()).toMatchObject(
        createGroupsWith([
          {
            resources: [
              {
                resource: {
                  endpoints: {
                    1: {
                      kind: 2,
                      sequence_number: 1
                    }
                  }
                }
              }
            ]
          }
        ])
      );
    });

    it("should throw provided an invalid endpoint name", () => {
      const endpointName = faker.number.int().toString();
      const endpoint = {
        [endpointName]: {
          kind: "ip"
        }
      };
      const yml = readBasicSdl({ endpoint });

      expect(() => SDL.fromString(yml, "beta3", "sandbox")).toThrowError(new SdlValidationError(`Endpoint named "${endpointName}" is not a valid name.`));
    });

    it("should throw provided no endpoint kind", () => {
      const endpointName = faker.lorem.word({ length: { min: 3, max: 10 } });
      const endpoint = {
        [endpointName]: {}
      };
      const yml = readBasicSdl({ endpoint });

      expect(() => SDL.fromString(yml, "beta3", "sandbox")).toThrowError(new SdlValidationError(`Endpoint named "${endpointName}" has no kind.`));
    });

    it("should throw provided invalid endpoint kind", () => {
      const endpointName = faker.lorem.word({ length: { min: 3, max: 10 } });
      const endpointKind = faker.lorem.word();
      const endpoint = {
        [endpointName]: {
          kind: endpointKind
        }
      };
      const yml = readBasicSdl({ endpoint });

      expect(() => SDL.fromString(yml, "beta3", "sandbox")).toThrowError(
        new SdlValidationError(`Endpoint named "${endpointName}" has an unknown kind "${endpointKind}".`)
      );
    });

    it("should throw when endpoint is unused", () => {
      const endpointName = faker.lorem.word({ length: { min: 3, max: 10 } });
      const endpoint = {
        [endpointName]: {
          kind: "ip"
        }
      };
      const yml = readBasicSdl({ endpoint, endpointRef: undefined });

      expect(() => SDL.fromString(yml, "beta3", "sandbox")).toThrowError(new SdlValidationError(`Endpoint ${endpointName} declared but never used.`));
    });
  });

  describe("service image credentials", () => {
    it("should resolve a service with valid credentials", () => {
      const credentials = {
        host: faker.internet.url(),
        username: faker.internet.userName(),
        password: faker.internet.password()
      };
      const sdl = SDL.fromString(readBasicSdl({ credentials, denom: "uakt" }), "beta3", "sandbox");

      expect(sdl.manifest()).toMatchObject(
        createManifestWith([
          {
            services: [
              {
                credentials
              }
            ]
          }
        ])
      );
      expect(sdl.groups()).toMatchObject(createGroupsWith());
    });

    it("should resolve a service without credentials", () => {
      const sdl = SDL.fromString(readBasicSdl({ denom: "uakt" }), "beta3", "sandbox");

      expect(sdl.manifest()).toMatchObject(
        createManifestWith([
          {
            services: [
              {
                credentials: null
              }
            ]
          }
        ])
      );
      expect(sdl.groups()).toMatchObject(createGroupsWith());
    });

    describe("invalid credentials errors", () => {
      const fields: (keyof v2ServiceImageCredentials)[] = ["host", "username", "password"];
      let credentials: v2ServiceImageCredentials;

      beforeEach(() => {
        credentials = {
          host: faker.internet.url(),
          username: faker.internet.userName(),
          password: faker.internet.password()
        };
      });

      it.each(fields)('should throw an error when credentials are missing "%s"', field => {
        expect(() => {
          SDL.fromString(readBasicSdl({ credentials: omit(credentials, field) }), "beta3", "sandbox");
        }).toThrowError(new SdlValidationError(`service "web" credentials missing "${field}"`));
      });

      it.each(fields)('should throw an error when credentials "%s" is empty', field => {
        credentials[field] = "";

        expect(() => {
          SDL.fromString(readBasicSdl({ credentials }), "beta3", "sandbox");
        }).toThrowError(new SdlValidationError(`service "web" credentials missing "${field}"`));
      });

      it.each(fields)('should throw an error when credentials "%s" contains spaces only', field => {
        credentials[field] = "   ";

        expect(() => {
          SDL.fromString(readBasicSdl({ credentials }), "beta3", "sandbox");
        }).toThrowError(new SdlValidationError(`service "web" credentials missing "${field}"`));
      });
    });
  });
});
