/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { messageTypeRegistry } from "../../../typeRegistry";
import { DeploymentID } from "./deployment";
import { GroupSpec } from "./groupspec";

export const protobufPackage = "akash.deployment.v1beta2";

/** MsgCreateDeployment defines an SDK message for creating deployment */
export interface MsgCreateDeployment {
  $type: "akash.deployment.v1beta2.MsgCreateDeployment";
  id: DeploymentID | undefined;
  groups: GroupSpec[];
  version: Uint8Array;
  deposit:
    | Coin
    | undefined;
  /** Depositor pays for the deposit */
  depositor: string;
}

/** MsgCreateDeploymentResponse defines the Msg/CreateDeployment response type. */
export interface MsgCreateDeploymentResponse {
  $type: "akash.deployment.v1beta2.MsgCreateDeploymentResponse";
}

/** MsgDepositDeployment deposits more funds into the deposit account */
export interface MsgDepositDeployment {
  $type: "akash.deployment.v1beta2.MsgDepositDeployment";
  id: DeploymentID | undefined;
  amount:
    | Coin
    | undefined;
  /** Depositor pays for the deposit */
  depositor: string;
}

/** MsgCreateDeploymentResponse defines the Msg/CreateDeployment response type. */
export interface MsgDepositDeploymentResponse {
  $type: "akash.deployment.v1beta2.MsgDepositDeploymentResponse";
}

/** MsgUpdateDeployment defines an SDK message for updating deployment */
export interface MsgUpdateDeployment {
  $type: "akash.deployment.v1beta2.MsgUpdateDeployment";
  id: DeploymentID | undefined;
  version: Uint8Array;
}

/** MsgUpdateDeploymentResponse defines the Msg/UpdateDeployment response type. */
export interface MsgUpdateDeploymentResponse {
  $type: "akash.deployment.v1beta2.MsgUpdateDeploymentResponse";
}

/** MsgCloseDeployment defines an SDK message for closing deployment */
export interface MsgCloseDeployment {
  $type: "akash.deployment.v1beta2.MsgCloseDeployment";
  id: DeploymentID | undefined;
}

/** MsgCloseDeploymentResponse defines the Msg/CloseDeployment response type. */
export interface MsgCloseDeploymentResponse {
  $type: "akash.deployment.v1beta2.MsgCloseDeploymentResponse";
}

function createBaseMsgCreateDeployment(): MsgCreateDeployment {
  return {
    $type: "akash.deployment.v1beta2.MsgCreateDeployment",
    id: undefined,
    groups: [],
    version: new Uint8Array(),
    deposit: undefined,
    depositor: "",
  };
}

export const MsgCreateDeployment = {
  $type: "akash.deployment.v1beta2.MsgCreateDeployment" as const,

  encode(message: MsgCreateDeployment, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== undefined) {
      DeploymentID.encode(message.id, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.groups) {
      GroupSpec.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.version.length !== 0) {
      writer.uint32(26).bytes(message.version);
    }
    if (message.deposit !== undefined) {
      Coin.encode(message.deposit, writer.uint32(34).fork()).ldelim();
    }
    if (message.depositor !== "") {
      writer.uint32(42).string(message.depositor);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateDeployment {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateDeployment();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.id = DeploymentID.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.groups.push(GroupSpec.decode(reader, reader.uint32()));
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.version = reader.bytes();
          continue;
        case 4:
          if (tag != 34) {
            break;
          }

          message.deposit = Coin.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag != 42) {
            break;
          }

          message.depositor = reader.string();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgCreateDeployment {
    return {
      $type: MsgCreateDeployment.$type,
      id: isSet(object.id) ? DeploymentID.fromJSON(object.id) : undefined,
      groups: Array.isArray(object?.groups) ? object.groups.map((e: any) => GroupSpec.fromJSON(e)) : [],
      version: isSet(object.version) ? bytesFromBase64(object.version) : new Uint8Array(),
      deposit: isSet(object.deposit) ? Coin.fromJSON(object.deposit) : undefined,
      depositor: isSet(object.depositor) ? String(object.depositor) : "",
    };
  },

  toJSON(message: MsgCreateDeployment): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id ? DeploymentID.toJSON(message.id) : undefined);
    if (message.groups) {
      obj.groups = message.groups.map((e) => e ? GroupSpec.toJSON(e) : undefined);
    } else {
      obj.groups = [];
    }
    message.version !== undefined &&
      (obj.version = base64FromBytes(message.version !== undefined ? message.version : new Uint8Array()));
    message.deposit !== undefined && (obj.deposit = message.deposit ? Coin.toJSON(message.deposit) : undefined);
    message.depositor !== undefined && (obj.depositor = message.depositor);
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgCreateDeployment>, I>>(base?: I): MsgCreateDeployment {
    return MsgCreateDeployment.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<MsgCreateDeployment>, I>>(object: I): MsgCreateDeployment {
    const message = createBaseMsgCreateDeployment();
    message.id = (object.id !== undefined && object.id !== null) ? DeploymentID.fromPartial(object.id) : undefined;
    message.groups = object.groups?.map((e) => GroupSpec.fromPartial(e)) || [];
    message.version = object.version ?? new Uint8Array();
    message.deposit = (object.deposit !== undefined && object.deposit !== null)
      ? Coin.fromPartial(object.deposit)
      : undefined;
    message.depositor = object.depositor ?? "";
    return message;
  },
};

messageTypeRegistry.set(MsgCreateDeployment.$type, MsgCreateDeployment);

function createBaseMsgCreateDeploymentResponse(): MsgCreateDeploymentResponse {
  return { $type: "akash.deployment.v1beta2.MsgCreateDeploymentResponse" };
}

export const MsgCreateDeploymentResponse = {
  $type: "akash.deployment.v1beta2.MsgCreateDeploymentResponse" as const,

  encode(_: MsgCreateDeploymentResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateDeploymentResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateDeploymentResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): MsgCreateDeploymentResponse {
    return { $type: MsgCreateDeploymentResponse.$type };
  },

  toJSON(_: MsgCreateDeploymentResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgCreateDeploymentResponse>, I>>(base?: I): MsgCreateDeploymentResponse {
    return MsgCreateDeploymentResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<MsgCreateDeploymentResponse>, I>>(_: I): MsgCreateDeploymentResponse {
    const message = createBaseMsgCreateDeploymentResponse();
    return message;
  },
};

messageTypeRegistry.set(MsgCreateDeploymentResponse.$type, MsgCreateDeploymentResponse);

function createBaseMsgDepositDeployment(): MsgDepositDeployment {
  return { $type: "akash.deployment.v1beta2.MsgDepositDeployment", id: undefined, amount: undefined, depositor: "" };
}

export const MsgDepositDeployment = {
  $type: "akash.deployment.v1beta2.MsgDepositDeployment" as const,

  encode(message: MsgDepositDeployment, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== undefined) {
      DeploymentID.encode(message.id, writer.uint32(10).fork()).ldelim();
    }
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(18).fork()).ldelim();
    }
    if (message.depositor !== "") {
      writer.uint32(26).string(message.depositor);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDepositDeployment {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDepositDeployment();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.id = DeploymentID.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.amount = Coin.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.depositor = reader.string();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgDepositDeployment {
    return {
      $type: MsgDepositDeployment.$type,
      id: isSet(object.id) ? DeploymentID.fromJSON(object.id) : undefined,
      amount: isSet(object.amount) ? Coin.fromJSON(object.amount) : undefined,
      depositor: isSet(object.depositor) ? String(object.depositor) : "",
    };
  },

  toJSON(message: MsgDepositDeployment): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id ? DeploymentID.toJSON(message.id) : undefined);
    message.amount !== undefined && (obj.amount = message.amount ? Coin.toJSON(message.amount) : undefined);
    message.depositor !== undefined && (obj.depositor = message.depositor);
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgDepositDeployment>, I>>(base?: I): MsgDepositDeployment {
    return MsgDepositDeployment.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<MsgDepositDeployment>, I>>(object: I): MsgDepositDeployment {
    const message = createBaseMsgDepositDeployment();
    message.id = (object.id !== undefined && object.id !== null) ? DeploymentID.fromPartial(object.id) : undefined;
    message.amount = (object.amount !== undefined && object.amount !== null)
      ? Coin.fromPartial(object.amount)
      : undefined;
    message.depositor = object.depositor ?? "";
    return message;
  },
};

messageTypeRegistry.set(MsgDepositDeployment.$type, MsgDepositDeployment);

function createBaseMsgDepositDeploymentResponse(): MsgDepositDeploymentResponse {
  return { $type: "akash.deployment.v1beta2.MsgDepositDeploymentResponse" };
}

export const MsgDepositDeploymentResponse = {
  $type: "akash.deployment.v1beta2.MsgDepositDeploymentResponse" as const,

  encode(_: MsgDepositDeploymentResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDepositDeploymentResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDepositDeploymentResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): MsgDepositDeploymentResponse {
    return { $type: MsgDepositDeploymentResponse.$type };
  },

  toJSON(_: MsgDepositDeploymentResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgDepositDeploymentResponse>, I>>(base?: I): MsgDepositDeploymentResponse {
    return MsgDepositDeploymentResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<MsgDepositDeploymentResponse>, I>>(_: I): MsgDepositDeploymentResponse {
    const message = createBaseMsgDepositDeploymentResponse();
    return message;
  },
};

messageTypeRegistry.set(MsgDepositDeploymentResponse.$type, MsgDepositDeploymentResponse);

function createBaseMsgUpdateDeployment(): MsgUpdateDeployment {
  return { $type: "akash.deployment.v1beta2.MsgUpdateDeployment", id: undefined, version: new Uint8Array() };
}

export const MsgUpdateDeployment = {
  $type: "akash.deployment.v1beta2.MsgUpdateDeployment" as const,

  encode(message: MsgUpdateDeployment, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== undefined) {
      DeploymentID.encode(message.id, writer.uint32(10).fork()).ldelim();
    }
    if (message.version.length !== 0) {
      writer.uint32(26).bytes(message.version);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateDeployment {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateDeployment();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.id = DeploymentID.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.version = reader.bytes();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateDeployment {
    return {
      $type: MsgUpdateDeployment.$type,
      id: isSet(object.id) ? DeploymentID.fromJSON(object.id) : undefined,
      version: isSet(object.version) ? bytesFromBase64(object.version) : new Uint8Array(),
    };
  },

  toJSON(message: MsgUpdateDeployment): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id ? DeploymentID.toJSON(message.id) : undefined);
    message.version !== undefined &&
      (obj.version = base64FromBytes(message.version !== undefined ? message.version : new Uint8Array()));
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgUpdateDeployment>, I>>(base?: I): MsgUpdateDeployment {
    return MsgUpdateDeployment.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<MsgUpdateDeployment>, I>>(object: I): MsgUpdateDeployment {
    const message = createBaseMsgUpdateDeployment();
    message.id = (object.id !== undefined && object.id !== null) ? DeploymentID.fromPartial(object.id) : undefined;
    message.version = object.version ?? new Uint8Array();
    return message;
  },
};

messageTypeRegistry.set(MsgUpdateDeployment.$type, MsgUpdateDeployment);

function createBaseMsgUpdateDeploymentResponse(): MsgUpdateDeploymentResponse {
  return { $type: "akash.deployment.v1beta2.MsgUpdateDeploymentResponse" };
}

export const MsgUpdateDeploymentResponse = {
  $type: "akash.deployment.v1beta2.MsgUpdateDeploymentResponse" as const,

  encode(_: MsgUpdateDeploymentResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateDeploymentResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateDeploymentResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): MsgUpdateDeploymentResponse {
    return { $type: MsgUpdateDeploymentResponse.$type };
  },

  toJSON(_: MsgUpdateDeploymentResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgUpdateDeploymentResponse>, I>>(base?: I): MsgUpdateDeploymentResponse {
    return MsgUpdateDeploymentResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<MsgUpdateDeploymentResponse>, I>>(_: I): MsgUpdateDeploymentResponse {
    const message = createBaseMsgUpdateDeploymentResponse();
    return message;
  },
};

messageTypeRegistry.set(MsgUpdateDeploymentResponse.$type, MsgUpdateDeploymentResponse);

function createBaseMsgCloseDeployment(): MsgCloseDeployment {
  return { $type: "akash.deployment.v1beta2.MsgCloseDeployment", id: undefined };
}

export const MsgCloseDeployment = {
  $type: "akash.deployment.v1beta2.MsgCloseDeployment" as const,

  encode(message: MsgCloseDeployment, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== undefined) {
      DeploymentID.encode(message.id, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCloseDeployment {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCloseDeployment();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.id = DeploymentID.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgCloseDeployment {
    return { $type: MsgCloseDeployment.$type, id: isSet(object.id) ? DeploymentID.fromJSON(object.id) : undefined };
  },

  toJSON(message: MsgCloseDeployment): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id ? DeploymentID.toJSON(message.id) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgCloseDeployment>, I>>(base?: I): MsgCloseDeployment {
    return MsgCloseDeployment.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<MsgCloseDeployment>, I>>(object: I): MsgCloseDeployment {
    const message = createBaseMsgCloseDeployment();
    message.id = (object.id !== undefined && object.id !== null) ? DeploymentID.fromPartial(object.id) : undefined;
    return message;
  },
};

messageTypeRegistry.set(MsgCloseDeployment.$type, MsgCloseDeployment);

function createBaseMsgCloseDeploymentResponse(): MsgCloseDeploymentResponse {
  return { $type: "akash.deployment.v1beta2.MsgCloseDeploymentResponse" };
}

export const MsgCloseDeploymentResponse = {
  $type: "akash.deployment.v1beta2.MsgCloseDeploymentResponse" as const,

  encode(_: MsgCloseDeploymentResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCloseDeploymentResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCloseDeploymentResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): MsgCloseDeploymentResponse {
    return { $type: MsgCloseDeploymentResponse.$type };
  },

  toJSON(_: MsgCloseDeploymentResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgCloseDeploymentResponse>, I>>(base?: I): MsgCloseDeploymentResponse {
    return MsgCloseDeploymentResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<MsgCloseDeploymentResponse>, I>>(_: I): MsgCloseDeploymentResponse {
    const message = createBaseMsgCloseDeploymentResponse();
    return message;
  },
};

messageTypeRegistry.set(MsgCloseDeploymentResponse.$type, MsgCloseDeploymentResponse);

declare var self: any | undefined;
declare var window: any | undefined;
declare var global: any | undefined;
var tsProtoGlobalThis: any = (() => {
  if (typeof globalThis !== "undefined") {
    return globalThis;
  }
  if (typeof self !== "undefined") {
    return self;
  }
  if (typeof window !== "undefined") {
    return window;
  }
  if (typeof global !== "undefined") {
    return global;
  }
  throw "Unable to locate global object";
})();

function bytesFromBase64(b64: string): Uint8Array {
  if (tsProtoGlobalThis.Buffer) {
    return Uint8Array.from(tsProtoGlobalThis.Buffer.from(b64, "base64"));
  } else {
    const bin = tsProtoGlobalThis.atob(b64);
    const arr = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; ++i) {
      arr[i] = bin.charCodeAt(i);
    }
    return arr;
  }
}

function base64FromBytes(arr: Uint8Array): string {
  if (tsProtoGlobalThis.Buffer) {
    return tsProtoGlobalThis.Buffer.from(arr).toString("base64");
  } else {
    const bin: string[] = [];
    arr.forEach((byte) => {
      bin.push(String.fromCharCode(byte));
    });
    return tsProtoGlobalThis.btoa(bin.join(""));
  }
}

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Long ? string | number | Long : T extends Array<infer U> ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in Exclude<keyof T, "$type">]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P> | "$type">]: never };

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
