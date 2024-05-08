import fs from "fs";
import path from "path";

export const readYml = (name: string): string => {
  return fs.readFileSync(path.resolve(__dirname, `./fixtures/${name}.yml`), "utf-8");
};
