import { faker } from "@faker-js/faker";
import omit from "lodash/omit";

import { createGroups, createManifest, createSdlJson, createSdlYml } from "../../../test/templates";
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

  describe("deployment validation", () => {
    it("should throw an error when a service is not defined in deployment", () => {
      const yml = createSdlYml({
        deployment: { $unset: ["web"] }
      });

      expect(() => SDL.fromString(yml, "beta3", "sandbox")).toThrowError(new SdlValidationError('Service "web" is not defined in the "deployment" section.'));
    });

    it("should throw an error when deployment is not defined in profile placement", () => {
      const yml = createSdlYml({
        "profiles.placement": { $unset: ["dcloud"] }
      });

      expect(() => SDL.fromString(yml, "beta3", "sandbox")).toThrowError(
        new SdlValidationError('The placement "dcloud" is not defined in the "placement" section.')
      );
    });

    it("should throw an error when service compute requirements are not defined", () => {
      const yml = createSdlYml({
        "profiles.compute": { $unset: ["web"] }
      });

      expect(() => SDL.fromString(yml, "beta3", "sandbox")).toThrowError(
        new SdlValidationError('The compute requirements for the "web" profile are not defined in the "compute" section.')
      );
    });
  });

  describe("storage validation", () => {
    it("should throw an error when a service references a non-existing volume", () => {
      const yml = createSdlYml({
        "services.web.params": { $set: { storage: { data: { mount: "/mnt/data", readOnly: false } } } }
      });

      expect(() => SDL.fromString(yml, "beta3", "sandbox")).toThrowError(
        new SdlValidationError('Service "web" references to non-existing compute volume names "data".')
      );
    });

    it("should throw an error when a service volume mount is a non-absolute path", () => {
      const yml = createSdlYml({
        "services.web.params": { $set: { storage: { data: { mount: "./mnt/data", readOnly: false } } } },
        "profiles.compute.web.resources.storage": { $set: { name: "data", size: "1Gi" } }
      });

      expect(() => SDL.fromString(yml, "beta3", "sandbox")).toThrowError(
        new SdlValidationError('Invalid value for "service.web.params.data.mount" parameter. expected absolute path.')
      );
    });

    it("should throw an error when multiple ephemeral storages are provided", () => {
      const yml = createSdlYml({
        "services.web.params": {
          $set: {
            storage: {
              data: {},
              db: {}
            }
          }
        },
        "profiles.compute.web.resources.storage": {
          $set: [
            { name: "data", size: "1Gi" },
            { name: "db", size: "1Gi" }
          ]
        }
      });

      expect(() => SDL.fromString(yml, "beta3", "sandbox")).toThrowError(new SdlValidationError("Multiple root ephemeral storages are not allowed"));
    });

    it("should throw an error when mount is used by multiple volumes", () => {
      const yml = createSdlYml({
        "services.web.params": { $set: { storage: { data: { mount: "/", readOnly: false }, db: { mount: "/", readOnly: false } } } },
        "profiles.compute.web.resources.storage": {
          $set: [
            { name: "data", size: "1Gi" },
            { name: "db", size: "1Gi" }
          ]
        }
      });

      expect(() => SDL.fromString(yml, "beta3", "sandbox")).toThrowError(new SdlValidationError('Mount / already in use by volume "data".'));
    });

    it("should require a service storage mount if volume is persistent", () => {
      const yml = createSdlYml({
        "services.web.params": {
          $set: { storage: { data: { readOnly: false } } }
        },
        "profiles.compute.web.resources.storage": { $set: { name: "data", size: "1Gi", attributes: { persistent: true } } }
      });

      expect(() => SDL.fromString(yml, "beta3", "sandbox")).toThrowError(
        new SdlValidationError("compute.storage.data has persistent=true which requires service.web.params.storage.data to have mount.")
      );
    });

    it("should throw an error when ram storage is defined as persistent", () => {
      const yml = createSdlJson({
        "profiles.compute.web.resources.storage": { $set: { name: "data", size: "1Gi", attributes: { class: "ram", persistent: true } } }
      });
      expect(() => new SDL(yml, "beta3", "sandbox")).toThrowError(
        new SdlValidationError(`Storage attribute "ram" must have "persistent" set to "false" or not defined for service "web".`)
      );
    });

    it("should throw an error if storage size in not defined", () => {
      const yml = createSdlJson({
        "profiles.compute.web.resources.storage": { $set: { name: "data" } }
      });
      expect(() => new SDL(yml, "beta3", "sandbox")).toThrowError(new SdlValidationError('Storage size is required for service "web".'));
    });
  });

  describe("gpu validation", () => {
    it("should throw an error when gpu units is not defined", () => {
      const sdlJson = createSdlJson({
        "profiles.compute.web.resources.gpu": { $set: {} }
      });

      expect(() => new SDL(sdlJson, "beta3", "sandbox")).toThrowError(new SdlValidationError('GPU units must be specified for profile "web".'));
    });

    it("should throw an error when gpu units > 0 and attributes is not defined", () => {
      const sdlJson = createSdlJson({
        "profiles.compute.web.resources.gpu": { $set: { units: 1 } }
      });

      expect(() => new SDL(sdlJson, "beta3", "sandbox")).toThrowError(new SdlValidationError("GPU must have attributes if units is not 0"));
    });

    it("should throw an error when gpu units is 0 and attributes is defined", () => {
      const sdlJson = createSdlJson({
        "profiles.compute.web.resources.gpu": { $set: { units: 0, attributes: {} } }
      });

      expect(() => new SDL(sdlJson, "beta3", "sandbox")).toThrowError(new SdlValidationError("GPU must not have attributes if units is 0"));
    });

    it("should throw an error when gpu units > 0 and attributes vendor is not supported", () => {
      const sdlJson = createSdlJson({
        "profiles.compute.web.resources.gpu": {
          $set: {
            units: 1,
            attributes: {
              vendor: {
                nvidia: { model: "rtxa6000" }
              }
            }
          }
        }
      });

      expect(() => new SDL(sdlJson, "beta3", "sandbox")).toThrowError(
        new SdlValidationError("GPU configuration must be an array of GPU models with optional ram.")
      );
    });

    it("should throw an error when gpu units > 0 and attributes vendor is not supported", () => {
      const sdlJson = createSdlJson({
        "profiles.compute.web.resources.gpu": {
          $set: {
            units: 1,
            attributes: {
              vendor: {
                nvidia: [{ model: "rtxa6000", interface: "foo" }]
              }
            }
          }
        }
      });

      expect(() => new SDL(sdlJson, "beta3", "sandbox")).toThrowError(
        new SdlValidationError("GPU interface must be one of the supported interfaces (pcie,sxm).")
      );
    });
  });
});
