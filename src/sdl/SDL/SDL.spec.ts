import { faker } from "@faker-js/faker";
import omit from "lodash/omit";

import { createGroups, createManifest, createSdlYml } from "../../../test/templates";
import { AKT_DENOM, SANDBOX_ID, USDC_IBC_DENOMS } from "../../config/network";
import { SdlValidationError } from "../../error";
import { v2ServiceImageCredentials } from "../types";
import { SDL } from "./SDL";

describe("SDL", () => {
  describe("profiles placement pricing denomination", () => {
    it.each([AKT_DENOM, USDC_IBC_DENOMS[SANDBOX_ID]])('should resolve a group with a valid "%s" denomination', denom => {
      const sdl = SDL.fromString(
        createSdlYml({
          "profiles.placement.dcloud.pricing.web.denom": { $set: denom }
        }),
        "beta3",
        "sandbox"
      );

      expect(sdl.manifest()).toMatchObject(createManifest());
      expect(sdl.groups()).toMatchObject(
        createGroups({
          "0.resources.0.price.denom": { $set: denom }
        })
      );
    });

    it("should throw an error when denomination is invalid", () => {
      const denom = "usdt";
      const yml = createSdlYml({
        "profiles.placement.dcloud.pricing.web.denom": { $set: denom }
      });

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
      const yml = createSdlYml({
        endpoints: { $set: endpoint },
        "services.web.expose.0.to.0.ip": { $set: endpointName }
      });
      const sdl = SDL.fromString(yml, "beta3", "sandbox");

      expect(sdl.manifest()).toMatchObject(
        createManifest({
          "0.services.0.resources.endpoints.1": {
            $set: {
              kind: 2,
              sequence_number: 1
            }
          },
          "0.services.0.expose": {
            $set: [
              {
                ip: endpointName,
                endpointSequenceNumber: 1
              }
            ]
          }
        })
      );
      expect(sdl.groups()).toMatchObject(
        createGroups({
          "0.resources.0.resource.endpoints": {
            $push: [
              {
                kind: 2,
                sequence_number: 1
              }
            ]
          }
        })
      );
    });

    it("should throw provided an invalid endpoint name", () => {
      const endpointName = faker.number.int().toString();
      const endpoint = {
        [endpointName]: {
          kind: "ip"
        }
      };
      const yml = createSdlYml({
        endpoints: { $set: endpoint }
      });

      expect(() => SDL.fromString(yml, "beta3", "sandbox")).toThrowError(new SdlValidationError(`Endpoint named "${endpointName}" is not a valid name.`));
    });

    it("should throw provided no endpoint kind", () => {
      const endpointName = faker.lorem.word({ length: { min: 3, max: 10 } });
      const endpoint = {
        [endpointName]: {}
      };
      const yml = createSdlYml({
        endpoints: { $set: endpoint }
      });

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
      const yml = createSdlYml({
        endpoints: { $set: endpoint }
      });

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
      const yml = createSdlYml({
        endpoints: { $set: endpoint }
      });

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
      const yml = createSdlYml({
        "services.web.credentials": { $set: credentials }
      });
      const sdl = SDL.fromString(yml, "beta3", "sandbox");

      expect(sdl.manifest()).toMatchObject(
        createManifest({
          "0.services.0.credentials": {
            $set: {
              ...credentials,
              email: ""
            }
          }
        })
      );
      expect(sdl.groups()).toMatchObject(createGroups());
    });

    it("should resolve a service without credentials", () => {
      const sdl = SDL.fromString(createSdlYml({}), "beta3", "sandbox");

      expect(sdl.manifest()).toMatchObject(
        createManifest({
          "0.services.0.credentials": {
            $set: null
          }
        })
      );
      expect(sdl.groups()).toMatchObject(createGroups());
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
        const yml = createSdlYml({
          "services.web.credentials": { $set: omit(credentials, field) }
        });

        expect(() => {
          SDL.fromString(yml, "beta3", "sandbox");
        }).toThrowError(new SdlValidationError(`service "web" credentials missing "${field}"`));
      });

      it.each(fields)('should throw an error when credentials "%s" is empty', field => {
        credentials[field] = "";
        const yml = createSdlYml({
          "services.web.credentials": { $set: credentials }
        });

        expect(() => {
          SDL.fromString(yml, "beta3", "sandbox");
        }).toThrowError(new SdlValidationError(`service "web" credentials missing "${field}"`));
      });

      it.each(fields)('should throw an error when credentials "%s" contains spaces only', field => {
        credentials[field] = "   ";
        const yml = createSdlYml({
          "services.web.credentials": { $set: credentials }
        });

        expect(() => {
          SDL.fromString(yml, "beta3", "sandbox");
        }).toThrowError(new SdlValidationError(`service "web" credentials missing "${field}"`));
      });
    });
  });
});
