import fs from "fs";
import path from "path";
import { dump } from "js-yaml";
import { faker } from "@faker-js/faker";
import template from "lodash/template";
import memoize from "lodash/memoize";
import pick from "lodash/pick";

import { AKT_DENOM } from "../src/config/network";
import { SANDBOX_ID, USDC_IBC_DENOMS } from "../src/config/network";
import groupsBasicSnapshot from "./fixtures/groups-basic-snapshot.json";
import manifestBasicSnapshot from "./fixtures/manifest-basic-snapshot.json";
import { merge } from "lodash";

export const readYml = (name: string): string => {
  return fs.readFileSync(path.resolve(__dirname, `./fixtures/${name}.yml`), "utf-8");
};

type YmlInputObject = {
  [key: string]: string | number | boolean | null | YmlInputObject | YmlInputObject[];
};

export const toYmlFragment = (object: YmlInputObject, options?: { nestingLevel: number }): string => {
  const yamlString = dump(object, { forceQuotes: true, quotingType: '"' });

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
  endpoint?: Record<string, { kind?: string | "ip" }>;
  endpointRef?: { ip: string };
}

const readBasicSdlTemplate = memoize(() => template(readYml("sdl-basic")));

export const readBasicSdl = (variables: BasicSdlTemplateVariables = {}): string => {
  const createYML = readBasicSdlTemplate();
  const endpointName = Object.keys(variables.endpoint || {})[0];
  const ymlVars: Record<keyof Omit<BasicSdlTemplateVariables, "endpoint"> | "endpoints" | "endpointRef", string> = {
    denom: variables.denom || faker.helpers.arrayElement([AKT_DENOM, USDC_IBC_DENOMS[SANDBOX_ID]]),
    credentials: variables.credentials ? toYmlFragment(pick(variables, "credentials"), { nestingLevel: 2 }) : "",
    endpoints: variables.endpoint ? toYmlFragment({ endpoints: variables.endpoint }) : "",
    endpointRef:
      ("endpointRef" in variables && toYmlFragment(pick(variables, "endpointRef"), { nestingLevel: 3 })) ||
      (endpointName && toYmlFragment({ ip: endpointName })) ||
      ""
  };

  return createYML(ymlVars);
};

const jsonTemplate =
  <T extends Record<string, any>>(template: T) =>
  (variables: Record<string, any> = {}) =>
    merge({}, template, variables);

export const createManifestWith = jsonTemplate(manifestBasicSnapshot);
export const createGroupsWith = jsonTemplate(groupsBasicSnapshot);
