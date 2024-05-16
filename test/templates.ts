import { dump } from "js-yaml";
import update, { CustomCommands, Spec } from "immutability-helper";
import dot from "dot-object";

import groupsBasic from "./fixtures/groups-basic-snapshot.json";
import manifestBasic from "./fixtures/manifest-basic-snapshot.json";
import sdlBasic from "./fixtures/sdl-basic.json";
import { v2Sdl } from "../src/sdl/types";

type AnySpec = Spec<object, CustomCommands<object>>;

export const createSdlJson = ($spec: AnySpec = {}): v2Sdl => {
  return update(sdlBasic, dot.object($spec)) as unknown as v2Sdl;
};

export const createSdlYml = ($spec: AnySpec = {}): string => {
  return dump(createSdlJson($spec), { forceQuotes: true, quotingType: '"' });
};

export const createManifest = ($spec: AnySpec = {}) => {
  return update(manifestBasic, dot.object($spec) as AnySpec);
};

export const createGroups = ($spec: AnySpec = {}) => {
  return update(groupsBasic, dot.object($spec) as AnySpec);
};
