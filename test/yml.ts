import fs from "fs";
import path from "path";
import { dump } from "js-yaml";

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
