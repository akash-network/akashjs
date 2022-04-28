/* eslint-disable */
import { messageTypeRegistry } from "../../../typeRegistry";
import Long from "long";
import _m0 from "protobufjs/minimal";
import { PlacementRequirements } from "../../../akash/base/v1beta2/attribute";
import { Resource } from "../../../akash/deployment/v1beta2/resource";

export const protobufPackage = "akash.deployment.v1beta2";

/** GroupSpec stores group specifications */
export interface GroupSpec {
  $type: "akash.deployment.v1beta2.GroupSpec";
  name: string;
  requirements?: PlacementRequirements;
  resources: Resource[];
}

function createBaseGroupSpec(): GroupSpec {
  return {
    $type: "akash.deployment.v1beta2.GroupSpec",
    name: "",
    requirements: undefined,
    resources: [],
  };
}

export const GroupSpec = {
  $type: "akash.deployment.v1beta2.GroupSpec" as const,

  encode(
    message: GroupSpec,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.requirements !== undefined) {
      PlacementRequirements.encode(
        message.requirements,
        writer.uint32(18).fork()
      ).ldelim();
    }
    for (const v of message.resources) {
      Resource.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GroupSpec {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGroupSpec();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.requirements = PlacementRequirements.decode(
            reader,
            reader.uint32()
          );
          break;
        case 3:
          message.resources.push(Resource.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GroupSpec {
    return {
      $type: GroupSpec.$type,
      name: isSet(object.name) ? String(object.name) : "",
      requirements: isSet(object.requirements)
        ? PlacementRequirements.fromJSON(object.requirements)
        : undefined,
      resources: Array.isArray(object?.resources)
        ? object.resources.map((e: any) => Resource.fromJSON(e))
        : [],
    };
  },

  toJSON(message: GroupSpec): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.requirements !== undefined &&
      (obj.requirements = message.requirements
        ? PlacementRequirements.toJSON(message.requirements)
        : undefined);
    if (message.resources) {
      obj.resources = message.resources.map((e) =>
        e ? Resource.toJSON(e) : undefined
      );
    } else {
      obj.resources = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GroupSpec>, I>>(
    object: I
  ): GroupSpec {
    const message = createBaseGroupSpec();
    message.name = object.name ?? "";
    message.requirements =
      object.requirements !== undefined && object.requirements !== null
        ? PlacementRequirements.fromPartial(object.requirements)
        : undefined;
    message.resources =
      object.resources?.map((e) => Resource.fromPartial(e)) || [];
    return message;
  },
};

messageTypeRegistry.set(GroupSpec.$type, GroupSpec);

type Builtin =
  | Date
  | Function
  | Uint8Array
  | string
  | number
  | boolean
  | undefined;

export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Long
  ? string | number | Long
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in Exclude<keyof T, "$type">]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin
  ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & Record<
        Exclude<keyof I, KeysOfUnion<P> | "$type">,
        never
      >;

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
