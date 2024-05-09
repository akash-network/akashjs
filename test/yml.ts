import fs from "fs";
import path from "path";
import { dump } from "js-yaml";
import { faker } from "@faker-js/faker";
import template from "lodash/template";
import memoize from "lodash/memoize";
import { AKT_DENOM } from "../src/config/network";
import { SANDBOX_ID, USDC_IBC_DENOMS } from "../src/config/network";
import { pick } from "lodash";

export const readYml = (name: string): string => {
  return fs.readFileSync(path.resolve(__dirname, `./fixtures/${name}.yml`), "utf-8");
};

type YmlInputObject = {
  [key: string]: string | number | boolean | null | YmlInputObject;
};

export const toYmlFragment = (object: YmlInputObject, options?: { nestingLevel: number }): string => {
  const yamlString = dump(object);

  if (!options) {
    return yamlString;
  }

  const indentation = "  ".repeat(options.nestingLevel);
  return yamlString
    .split("\n")
    .map(line => indentation + line)
    .join("\n");
};

interface BasicSdlTemplateVariables {
  denom?: string;
  credentials?: {
    host?: string;
    username?: string;
    password?: string;
  };
}

const readBasicSdlTemplate = memoize(() => template(readYml("sdl-basic")));

export const readBasicSdl = (variables: BasicSdlTemplateVariables = {}): string => {
  const createYML = readBasicSdlTemplate();
  const ymlVars: Record<keyof BasicSdlTemplateVariables, string> = {
    denom: variables.denom || faker.helpers.arrayElement([AKT_DENOM, USDC_IBC_DENOMS[SANDBOX_ID]]),
    credentials: variables.credentials ? toYmlFragment(pick(variables, "credentials"), { nestingLevel: 2 }) : ""
  };

  return createYML(ymlVars);
};
