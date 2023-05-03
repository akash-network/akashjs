/* eslint-disable */
import { messageTypeRegistry } from "../../../typeRegistry";
import Long from "long";
import { Attribute } from "../../base/v1beta3/attribute";
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "akash.provider.v1beta3";

/** ProviderInfo */
export interface ProviderInfo {
  $type: "akash.provider.v1beta3.ProviderInfo";
  email: string;
  website: string;
}

/** MsgCreateProvider defines an SDK message for creating a provider */
export interface MsgCreateProvider {
  $type: "akash.provider.v1beta3.MsgCreateProvider";
  owner: string;
  hostUri: string;
  attributes: Attribute[];
  info: ProviderInfo | undefined;
}

/** MsgCreateProviderResponse defines the Msg/CreateProvider response type. */
export interface MsgCreateProviderResponse {
  $type: "akash.provider.v1beta3.MsgCreateProviderResponse";
}

/** MsgUpdateProvider defines an SDK message for updating a provider */
export interface MsgUpdateProvider {
  $type: "akash.provider.v1beta3.MsgUpdateProvider";
  owner: string;
  hostUri: string;
  attributes: Attribute[];
  info: ProviderInfo | undefined;
}

/** MsgUpdateProviderResponse defines the Msg/UpdateProvider response type. */
export interface MsgUpdateProviderResponse {
  $type: "akash.provider.v1beta3.MsgUpdateProviderResponse";
}

/** MsgDeleteProvider defines an SDK message for deleting a provider */
export interface MsgDeleteProvider {
  $type: "akash.provider.v1beta3.MsgDeleteProvider";
  owner: string;
}

/** MsgDeleteProviderResponse defines the Msg/DeleteProvider response type. */
export interface MsgDeleteProviderResponse {
  $type: "akash.provider.v1beta3.MsgDeleteProviderResponse";
}

/** Provider stores owner and host details */
export interface Provider {
  $type: "akash.provider.v1beta3.Provider";
  owner: string;
  hostUri: string;
  attributes: Attribute[];
  info: ProviderInfo | undefined;
}

function createBaseProviderInfo(): ProviderInfo {
  return {
    $type: "akash.provider.v1beta3.ProviderInfo",
    email: "",
    website: "",
  };
}

export const ProviderInfo = {
  $type: "akash.provider.v1beta3.ProviderInfo" as const,

  encode(
    message: ProviderInfo,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.email !== "") {
      writer.uint32(10).string(message.email);
    }
    if (message.website !== "") {
      writer.uint32(18).string(message.website);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ProviderInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProviderInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.email = reader.string();
          break;
        case 2:
          message.website = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ProviderInfo {
    return {
      $type: ProviderInfo.$type,
      email: isSet(object.email) ? String(object.email) : "",
      website: isSet(object.website) ? String(object.website) : "",
    };
  },

  toJSON(message: ProviderInfo): unknown {
    const obj: any = {};
    message.email !== undefined && (obj.email = message.email);
    message.website !== undefined && (obj.website = message.website);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ProviderInfo>, I>>(
    object: I
  ): ProviderInfo {
    const message = createBaseProviderInfo();
    message.email = object.email ?? "";
    message.website = object.website ?? "";
    return message;
  },
};

messageTypeRegistry.set(ProviderInfo.$type, ProviderInfo);

function createBaseMsgCreateProvider(): MsgCreateProvider {
  return {
    $type: "akash.provider.v1beta3.MsgCreateProvider",
    owner: "",
    hostUri: "",
    attributes: [],
    info: undefined,
  };
}

export const MsgCreateProvider = {
  $type: "akash.provider.v1beta3.MsgCreateProvider" as const,

  encode(
    message: MsgCreateProvider,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (message.hostUri !== "") {
      writer.uint32(18).string(message.hostUri);
    }
    for (const v of message.attributes) {
      Attribute.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.info !== undefined) {
      ProviderInfo.encode(message.info, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateProvider {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateProvider();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;
        case 2:
          message.hostUri = reader.string();
          break;
        case 3:
          message.attributes.push(Attribute.decode(reader, reader.uint32()));
          break;
        case 4:
          message.info = ProviderInfo.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateProvider {
    return {
      $type: MsgCreateProvider.$type,
      owner: isSet(object.owner) ? String(object.owner) : "",
      hostUri: isSet(object.hostUri) ? String(object.hostUri) : "",
      attributes: Array.isArray(object?.attributes)
        ? object.attributes.map((e: any) => Attribute.fromJSON(e))
        : [],
      info: isSet(object.info) ? ProviderInfo.fromJSON(object.info) : undefined,
    };
  },

  toJSON(message: MsgCreateProvider): unknown {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner);
    message.hostUri !== undefined && (obj.hostUri = message.hostUri);
    if (message.attributes) {
      obj.attributes = message.attributes.map((e) =>
        e ? Attribute.toJSON(e) : undefined
      );
    } else {
      obj.attributes = [];
    }
    message.info !== undefined &&
      (obj.info = message.info ? ProviderInfo.toJSON(message.info) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCreateProvider>, I>>(
    object: I
  ): MsgCreateProvider {
    const message = createBaseMsgCreateProvider();
    message.owner = object.owner ?? "";
    message.hostUri = object.hostUri ?? "";
    message.attributes =
      object.attributes?.map((e) => Attribute.fromPartial(e)) || [];
    message.info =
      object.info !== undefined && object.info !== null
        ? ProviderInfo.fromPartial(object.info)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(MsgCreateProvider.$type, MsgCreateProvider);

function createBaseMsgCreateProviderResponse(): MsgCreateProviderResponse {
  return { $type: "akash.provider.v1beta3.MsgCreateProviderResponse" };
}

export const MsgCreateProviderResponse = {
  $type: "akash.provider.v1beta3.MsgCreateProviderResponse" as const,

  encode(
    _: MsgCreateProviderResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgCreateProviderResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateProviderResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgCreateProviderResponse {
    return {
      $type: MsgCreateProviderResponse.$type,
    };
  },

  toJSON(_: MsgCreateProviderResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCreateProviderResponse>, I>>(
    _: I
  ): MsgCreateProviderResponse {
    const message = createBaseMsgCreateProviderResponse();
    return message;
  },
};

messageTypeRegistry.set(
  MsgCreateProviderResponse.$type,
  MsgCreateProviderResponse
);

function createBaseMsgUpdateProvider(): MsgUpdateProvider {
  return {
    $type: "akash.provider.v1beta3.MsgUpdateProvider",
    owner: "",
    hostUri: "",
    attributes: [],
    info: undefined,
  };
}

export const MsgUpdateProvider = {
  $type: "akash.provider.v1beta3.MsgUpdateProvider" as const,

  encode(
    message: MsgUpdateProvider,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (message.hostUri !== "") {
      writer.uint32(18).string(message.hostUri);
    }
    for (const v of message.attributes) {
      Attribute.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.info !== undefined) {
      ProviderInfo.encode(message.info, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateProvider {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateProvider();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;
        case 2:
          message.hostUri = reader.string();
          break;
        case 3:
          message.attributes.push(Attribute.decode(reader, reader.uint32()));
          break;
        case 4:
          message.info = ProviderInfo.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateProvider {
    return {
      $type: MsgUpdateProvider.$type,
      owner: isSet(object.owner) ? String(object.owner) : "",
      hostUri: isSet(object.hostUri) ? String(object.hostUri) : "",
      attributes: Array.isArray(object?.attributes)
        ? object.attributes.map((e: any) => Attribute.fromJSON(e))
        : [],
      info: isSet(object.info) ? ProviderInfo.fromJSON(object.info) : undefined,
    };
  },

  toJSON(message: MsgUpdateProvider): unknown {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner);
    message.hostUri !== undefined && (obj.hostUri = message.hostUri);
    if (message.attributes) {
      obj.attributes = message.attributes.map((e) =>
        e ? Attribute.toJSON(e) : undefined
      );
    } else {
      obj.attributes = [];
    }
    message.info !== undefined &&
      (obj.info = message.info ? ProviderInfo.toJSON(message.info) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgUpdateProvider>, I>>(
    object: I
  ): MsgUpdateProvider {
    const message = createBaseMsgUpdateProvider();
    message.owner = object.owner ?? "";
    message.hostUri = object.hostUri ?? "";
    message.attributes =
      object.attributes?.map((e) => Attribute.fromPartial(e)) || [];
    message.info =
      object.info !== undefined && object.info !== null
        ? ProviderInfo.fromPartial(object.info)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(MsgUpdateProvider.$type, MsgUpdateProvider);

function createBaseMsgUpdateProviderResponse(): MsgUpdateProviderResponse {
  return { $type: "akash.provider.v1beta3.MsgUpdateProviderResponse" };
}

export const MsgUpdateProviderResponse = {
  $type: "akash.provider.v1beta3.MsgUpdateProviderResponse" as const,

  encode(
    _: MsgUpdateProviderResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgUpdateProviderResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateProviderResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgUpdateProviderResponse {
    return {
      $type: MsgUpdateProviderResponse.$type,
    };
  },

  toJSON(_: MsgUpdateProviderResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgUpdateProviderResponse>, I>>(
    _: I
  ): MsgUpdateProviderResponse {
    const message = createBaseMsgUpdateProviderResponse();
    return message;
  },
};

messageTypeRegistry.set(
  MsgUpdateProviderResponse.$type,
  MsgUpdateProviderResponse
);

function createBaseMsgDeleteProvider(): MsgDeleteProvider {
  return { $type: "akash.provider.v1beta3.MsgDeleteProvider", owner: "" };
}

export const MsgDeleteProvider = {
  $type: "akash.provider.v1beta3.MsgDeleteProvider" as const,

  encode(
    message: MsgDeleteProvider,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeleteProvider {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeleteProvider();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgDeleteProvider {
    return {
      $type: MsgDeleteProvider.$type,
      owner: isSet(object.owner) ? String(object.owner) : "",
    };
  },

  toJSON(message: MsgDeleteProvider): unknown {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgDeleteProvider>, I>>(
    object: I
  ): MsgDeleteProvider {
    const message = createBaseMsgDeleteProvider();
    message.owner = object.owner ?? "";
    return message;
  },
};

messageTypeRegistry.set(MsgDeleteProvider.$type, MsgDeleteProvider);

function createBaseMsgDeleteProviderResponse(): MsgDeleteProviderResponse {
  return { $type: "akash.provider.v1beta3.MsgDeleteProviderResponse" };
}

export const MsgDeleteProviderResponse = {
  $type: "akash.provider.v1beta3.MsgDeleteProviderResponse" as const,

  encode(
    _: MsgDeleteProviderResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgDeleteProviderResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeleteProviderResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgDeleteProviderResponse {
    return {
      $type: MsgDeleteProviderResponse.$type,
    };
  },

  toJSON(_: MsgDeleteProviderResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgDeleteProviderResponse>, I>>(
    _: I
  ): MsgDeleteProviderResponse {
    const message = createBaseMsgDeleteProviderResponse();
    return message;
  },
};

messageTypeRegistry.set(
  MsgDeleteProviderResponse.$type,
  MsgDeleteProviderResponse
);

function createBaseProvider(): Provider {
  return {
    $type: "akash.provider.v1beta3.Provider",
    owner: "",
    hostUri: "",
    attributes: [],
    info: undefined,
  };
}

export const Provider = {
  $type: "akash.provider.v1beta3.Provider" as const,

  encode(
    message: Provider,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (message.hostUri !== "") {
      writer.uint32(18).string(message.hostUri);
    }
    for (const v of message.attributes) {
      Attribute.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.info !== undefined) {
      ProviderInfo.encode(message.info, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Provider {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProvider();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;
        case 2:
          message.hostUri = reader.string();
          break;
        case 3:
          message.attributes.push(Attribute.decode(reader, reader.uint32()));
          break;
        case 4:
          message.info = ProviderInfo.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Provider {
    return {
      $type: Provider.$type,
      owner: isSet(object.owner) ? String(object.owner) : "",
      hostUri: isSet(object.hostUri) ? String(object.hostUri) : "",
      attributes: Array.isArray(object?.attributes)
        ? object.attributes.map((e: any) => Attribute.fromJSON(e))
        : [],
      info: isSet(object.info) ? ProviderInfo.fromJSON(object.info) : undefined,
    };
  },

  toJSON(message: Provider): unknown {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner);
    message.hostUri !== undefined && (obj.hostUri = message.hostUri);
    if (message.attributes) {
      obj.attributes = message.attributes.map((e) =>
        e ? Attribute.toJSON(e) : undefined
      );
    } else {
      obj.attributes = [];
    }
    message.info !== undefined &&
      (obj.info = message.info ? ProviderInfo.toJSON(message.info) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Provider>, I>>(object: I): Provider {
    const message = createBaseProvider();
    message.owner = object.owner ?? "";
    message.hostUri = object.hostUri ?? "";
    message.attributes =
      object.attributes?.map((e) => Attribute.fromPartial(e)) || [];
    message.info =
      object.info !== undefined && object.info !== null
        ? ProviderInfo.fromPartial(object.info)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(Provider.$type, Provider);

/** Msg defines the provider Msg service */
export interface Msg {
  /** CreateProvider defines a method that creates a provider given the proper inputs */
  CreateProvider(
    request: MsgCreateProvider
  ): Promise<MsgCreateProviderResponse>;
  /** UpdateProvider defines a method that updates a provider given the proper inputs */
  UpdateProvider(
    request: MsgUpdateProvider
  ): Promise<MsgUpdateProviderResponse>;
  /** DeleteProvider defines a method that deletes a provider given the proper inputs */
  DeleteProvider(
    request: MsgDeleteProvider
  ): Promise<MsgDeleteProviderResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.CreateProvider = this.CreateProvider.bind(this);
    this.UpdateProvider = this.UpdateProvider.bind(this);
    this.DeleteProvider = this.DeleteProvider.bind(this);
  }
  CreateProvider(
    request: MsgCreateProvider
  ): Promise<MsgCreateProviderResponse> {
    const data = MsgCreateProvider.encode(request).finish();
    const promise = this.rpc.request(
      "akash.provider.v1beta3.Msg",
      "CreateProvider",
      data
    );
    return promise.then((data) =>
      MsgCreateProviderResponse.decode(new _m0.Reader(data))
    );
  }

  UpdateProvider(
    request: MsgUpdateProvider
  ): Promise<MsgUpdateProviderResponse> {
    const data = MsgUpdateProvider.encode(request).finish();
    const promise = this.rpc.request(
      "akash.provider.v1beta3.Msg",
      "UpdateProvider",
      data
    );
    return promise.then((data) =>
      MsgUpdateProviderResponse.decode(new _m0.Reader(data))
    );
  }

  DeleteProvider(
    request: MsgDeleteProvider
  ): Promise<MsgDeleteProviderResponse> {
    const data = MsgDeleteProvider.encode(request).finish();
    const promise = this.rpc.request(
      "akash.provider.v1beta3.Msg",
      "DeleteProvider",
      data
    );
    return promise.then((data) =>
      MsgDeleteProviderResponse.decode(new _m0.Reader(data))
    );
  }
}

interface Rpc {
  request(
    service: string,
    method: string,
    data: Uint8Array
  ): Promise<Uint8Array>;
}

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
