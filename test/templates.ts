import { dump } from "js-yaml";
import update, { CustomCommands, Spec } from "immutability-helper";
import dot from "dot-object";

import groupsBasic from "./fixtures/groups-basic-snapshot.json";
import manifestBasic from "./fixtures/manifest-basic-snapshot.json";
import sdlBasic from "./fixtures/sdl-basic.json";

type AnySpec = Spec<object, CustomCommands<object>>;

export const createSdlYml = ($spec: AnySpec = {}): string => {
  return dump(update(sdlBasic, dot.object($spec)), { forceQuotes: true, quotingType: '"' });
};

export const createManifest = ($spec: AnySpec = {}) => {
  return update(manifestBasic, dot.object($spec) as AnySpec);
};

export const createGroups = ($spec: AnySpec = {}) => {
  return update(groupsBasic, dot.object($spec) as AnySpec);
};
