import { faker } from "@faker-js/faker";
import template from "lodash/template";
import omit from "lodash/omit";

import { readYml } from "../../../test/read-yml";
import { SdlValidationError } from "../../error";
import { SDL } from "./SDL";
import { v2ServiceImageCredentials } from "../types";

const createYML = template(readYml("sdl-hello-world-basic-with-creds"));

describe("SDL", () => {
  describe("service image credentials", () => {
    it("should resolve a service with valid credentials", () => {
      const credentials = {
        host: faker.internet.url(),
        username: faker.internet.userName(),
        password: faker.internet.password()
      };
      const yml = createYML({
        credentials: createCreds(credentials)
      });
      const sdl = SDL.fromString(yml, "beta3", "sandbox");

      expect(sdl.manifest()).toMatchObject([{ services: [{ credentials }] }]);
    });

    it("should resolve a service without credentials", () => {
      const yml = createYML({
        credentials: ""
      });
      const sdl = SDL.fromString(yml, "beta3", "sandbox");
      const group = sdl.manifest()[0];

      if (!("services" in group)) {
        throw new Error("No services found in group");
      }

      expect(group.services[0].credentials).toBeNull();
    });

    describe("should throw an error when credentials are invalid", () => {
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
        const yml = createYML({
          credentials: createCreds(omit(credentials, field))
        });

        expect(() => {
          SDL.fromString(yml, "beta3", "sandbox");
        }).toThrowError(new SdlValidationError(`service "web" credentials missing "${field}"`));
      });

      it.each(fields)('should throw an error when credentials "%s" is empty', field => {
        credentials[field] = "";
        const yml = createYML({
          credentials: createCreds(omit(credentials, field))
        });

        expect(() => {
          SDL.fromString(yml, "beta3", "sandbox");
        }).toThrowError(new SdlValidationError(`service "web" credentials missing "${field}"`));
      });

      it.each(fields)('should throw an error when credentials "%s" contains spaces only', field => {
        credentials[field] = "   ";
        const yml = createYML({
          credentials: createCreds(omit(credentials, field))
        });

        expect(() => {
          SDL.fromString(yml, "beta3", "sandbox");
        }).toThrowError(new SdlValidationError(`service "web" credentials missing "${field}"`));
      });
    });
  });
});

function createCreds({ host, username, password }: { host?: string; username?: string; password?: string }) {
  let creds = "";

  if (host) {
    creds += `      host: "${host}"\n`;
  }

  if (username) {
    creds += `      username: "${username}"\n`;
  }

  if (password) {
    creds += `      password: "${password}"\n`;
  }

  if (creds) {
    creds = `    credentials:\n${creds}`;
  }

  return creds;
}
