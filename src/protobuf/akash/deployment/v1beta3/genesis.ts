/* eslint-disable */
import { messageTypeRegistry } from "../../../typeRegistry";
import Long from "long";
import { Deployment } from "./deployment";
import { Group } from "./group";
import { Params } from "./params";
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "akash.deployment.v1beta3";

/** GenesisDeployment defines the basic genesis state used by deployment module */
export interface GenesisDeployment {
  $type: "akash.deployment.v1beta3.GenesisDeployment";
  deployment: Deployment | undefined;
  groups: Group[];
}

/** GenesisState stores slice of genesis deployment instance */
export interface GenesisState {
  $type: "akash.deployment.v1beta3.GenesisState";
  deployments: GenesisDeployment[];
  params: Params | undefined;
}

function createBaseGenesisDeployment(): GenesisDeployment {
  return {
    $type: "akash.deployment.v1beta3.GenesisDeployment",
    deployment: undefined,
    groups: [],
  };
}

export const GenesisDeployment = {
  $type: "akash.deployment.v1beta3.GenesisDeployment" as const,

  encode(
    message: GenesisDeployment,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.deployment !== undefined) {
      Deployment.encode(message.deployment, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.groups) {
      Group.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GenesisDeployment {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisDeployment();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.deployment = Deployment.decode(reader, reader.uint32());
          break;
        case 2:
          message.groups.push(Group.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GenesisDeployment {
    return {
      $type: GenesisDeployment.$type,
      deployment: isSet(object.deployment)
        ? Deployment.fromJSON(object.deployment)
        : undefined,
      groups: Array.isArray(object?.groups)
        ? object.groups.map((e: any) => Group.fromJSON(e))
        : [],
    };
  },

  toJSON(message: GenesisDeployment): unknown {
    const obj: any = {};
    message.deployment !== undefined &&
      (obj.deployment = message.deployment
        ? Deployment.toJSON(message.deployment)
        : undefined);
    if (message.groups) {
      obj.groups = message.groups.map((e) => (e ? Group.toJSON(e) : undefined));
    } else {
      obj.groups = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GenesisDeployment>, I>>(
    object: I
  ): GenesisDeployment {
    const message = createBaseGenesisDeployment();
    message.deployment =
      object.deployment !== undefined && object.deployment !== null
        ? Deployment.fromPartial(object.deployment)
        : undefined;
    message.groups = object.groups?.map((e) => Group.fromPartial(e)) || [];
    return message;
  },
};

messageTypeRegistry.set(GenesisDeployment.$type, GenesisDeployment);

function createBaseGenesisState(): GenesisState {
  return {
    $type: "akash.deployment.v1beta3.GenesisState",
    deployments: [],
    params: undefined,
  };
}

export const GenesisState = {
  $type: "akash.deployment.v1beta3.GenesisState" as const,

  encode(
    message: GenesisState,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.deployments) {
      GenesisDeployment.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.deployments.push(
            GenesisDeployment.decode(reader, reader.uint32())
          );
          break;
        case 2:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GenesisState {
    return {
      $type: GenesisState.$type,
      deployments: Array.isArray(object?.deployments)
        ? object.deployments.map((e: any) => GenesisDeployment.fromJSON(e))
        : [],
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
    };
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    if (message.deployments) {
      obj.deployments = message.deployments.map((e) =>
        e ? GenesisDeployment.toJSON(e) : undefined
      );
    } else {
      obj.deployments = [];
    }
    message.params !== undefined &&
      (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GenesisState>, I>>(
    object: I
  ): GenesisState {
    const message = createBaseGenesisState();
    message.deployments =
      object.deployments?.map((e) => GenesisDeployment.fromPartial(e)) || [];
    message.params =
      object.params !== undefined && object.params !== null
        ? Params.fromPartial(object.params)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(GenesisState.$type, GenesisState);

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
