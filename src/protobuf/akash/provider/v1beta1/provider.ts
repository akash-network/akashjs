/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Attribute } from "../../../akash/base/v1beta1/attribute";

export const protobufPackage = "akash.provider.v1beta1";

/** ProviderInfo */
export interface ProviderInfo {
  email: string;
  website: string;
}

/** MsgCreateProvider defines an SDK message for creating a provider */
export interface MsgCreateProvider {
  owner: string;
  hostUri: string;
  attributes: Attribute[];
  info?: ProviderInfo;
}

/** MsgCreateProviderResponse defines the Msg/CreateProvider response type. */
export interface MsgCreateProviderResponse {}

/** MsgUpdateProvider defines an SDK message for updating a provider */
export interface MsgUpdateProvider {
  owner: string;
  hostUri: string;
  attributes: Attribute[];
  info?: ProviderInfo;
}

/** MsgUpdateProviderResponse defines the Msg/UpdateProvider response type. */
export interface MsgUpdateProviderResponse {}

/** MsgDeleteProvider defines an SDK message for deleting a provider */
export interface MsgDeleteProvider {
  owner: string;
}

/** MsgDeleteProviderResponse defines the Msg/DeleteProvider response type. */
export interface MsgDeleteProviderResponse {}

/** Provider stores owner and host details */
export interface Provider {
  owner: string;
  hostUri: string;
  attributes: Attribute[];
  info?: ProviderInfo;
}

const baseProviderInfo: object = { email: "", website: "" };

export const ProviderInfo = {
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
    const message = { ...baseProviderInfo } as ProviderInfo;
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
    const message = { ...baseProviderInfo } as ProviderInfo;
    if (object.email !== undefined && object.email !== null) {
      message.email = String(object.email);
    } else {
      message.email = "";
    }
    if (object.website !== undefined && object.website !== null) {
      message.website = String(object.website);
    } else {
      message.website = "";
    }
    return message;
  },

  toJSON(message: ProviderInfo): unknown {
    const obj: any = {};
    message.email !== undefined && (obj.email = message.email);
    message.website !== undefined && (obj.website = message.website);
    return obj;
  },

  fromPartial(object: DeepPartial<ProviderInfo>): ProviderInfo {
    const message = { ...baseProviderInfo } as ProviderInfo;
    if (object.email !== undefined && object.email !== null) {
      message.email = object.email;
    } else {
      message.email = "";
    }
    if (object.website !== undefined && object.website !== null) {
      message.website = object.website;
    } else {
      message.website = "";
    }
    return message;
  },
};

const baseMsgCreateProvider: object = { owner: "", hostUri: "" };

export const MsgCreateProvider = {
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
    const message = { ...baseMsgCreateProvider } as MsgCreateProvider;
    message.attributes = [];
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
    const message = { ...baseMsgCreateProvider } as MsgCreateProvider;
    message.attributes = [];
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = String(object.owner);
    } else {
      message.owner = "";
    }
    if (object.hostUri !== undefined && object.hostUri !== null) {
      message.hostUri = String(object.hostUri);
    } else {
      message.hostUri = "";
    }
    if (object.attributes !== undefined && object.attributes !== null) {
      for (const e of object.attributes) {
        message.attributes.push(Attribute.fromJSON(e));
      }
    }
    if (object.info !== undefined && object.info !== null) {
      message.info = ProviderInfo.fromJSON(object.info);
    } else {
      message.info = undefined;
    }
    return message;
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

  fromPartial(object: DeepPartial<MsgCreateProvider>): MsgCreateProvider {
    const message = { ...baseMsgCreateProvider } as MsgCreateProvider;
    message.attributes = [];
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    } else {
      message.owner = "";
    }
    if (object.hostUri !== undefined && object.hostUri !== null) {
      message.hostUri = object.hostUri;
    } else {
      message.hostUri = "";
    }
    if (object.attributes !== undefined && object.attributes !== null) {
      for (const e of object.attributes) {
        message.attributes.push(Attribute.fromPartial(e));
      }
    }
    if (object.info !== undefined && object.info !== null) {
      message.info = ProviderInfo.fromPartial(object.info);
    } else {
      message.info = undefined;
    }
    return message;
  },
};

const baseMsgCreateProviderResponse: object = {};

export const MsgCreateProviderResponse = {
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
    const message = {
      ...baseMsgCreateProviderResponse,
    } as MsgCreateProviderResponse;
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
    const message = {
      ...baseMsgCreateProviderResponse,
    } as MsgCreateProviderResponse;
    return message;
  },

  toJSON(_: MsgCreateProviderResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgCreateProviderResponse>
  ): MsgCreateProviderResponse {
    const message = {
      ...baseMsgCreateProviderResponse,
    } as MsgCreateProviderResponse;
    return message;
  },
};

const baseMsgUpdateProvider: object = { owner: "", hostUri: "" };

export const MsgUpdateProvider = {
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
    const message = { ...baseMsgUpdateProvider } as MsgUpdateProvider;
    message.attributes = [];
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
    const message = { ...baseMsgUpdateProvider } as MsgUpdateProvider;
    message.attributes = [];
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = String(object.owner);
    } else {
      message.owner = "";
    }
    if (object.hostUri !== undefined && object.hostUri !== null) {
      message.hostUri = String(object.hostUri);
    } else {
      message.hostUri = "";
    }
    if (object.attributes !== undefined && object.attributes !== null) {
      for (const e of object.attributes) {
        message.attributes.push(Attribute.fromJSON(e));
      }
    }
    if (object.info !== undefined && object.info !== null) {
      message.info = ProviderInfo.fromJSON(object.info);
    } else {
      message.info = undefined;
    }
    return message;
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

  fromPartial(object: DeepPartial<MsgUpdateProvider>): MsgUpdateProvider {
    const message = { ...baseMsgUpdateProvider } as MsgUpdateProvider;
    message.attributes = [];
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    } else {
      message.owner = "";
    }
    if (object.hostUri !== undefined && object.hostUri !== null) {
      message.hostUri = object.hostUri;
    } else {
      message.hostUri = "";
    }
    if (object.attributes !== undefined && object.attributes !== null) {
      for (const e of object.attributes) {
        message.attributes.push(Attribute.fromPartial(e));
      }
    }
    if (object.info !== undefined && object.info !== null) {
      message.info = ProviderInfo.fromPartial(object.info);
    } else {
      message.info = undefined;
    }
    return message;
  },
};

const baseMsgUpdateProviderResponse: object = {};

export const MsgUpdateProviderResponse = {
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
    const message = {
      ...baseMsgUpdateProviderResponse,
    } as MsgUpdateProviderResponse;
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
    const message = {
      ...baseMsgUpdateProviderResponse,
    } as MsgUpdateProviderResponse;
    return message;
  },

  toJSON(_: MsgUpdateProviderResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgUpdateProviderResponse>
  ): MsgUpdateProviderResponse {
    const message = {
      ...baseMsgUpdateProviderResponse,
    } as MsgUpdateProviderResponse;
    return message;
  },
};

const baseMsgDeleteProvider: object = { owner: "" };

export const MsgDeleteProvider = {
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
    const message = { ...baseMsgDeleteProvider } as MsgDeleteProvider;
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
    const message = { ...baseMsgDeleteProvider } as MsgDeleteProvider;
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = String(object.owner);
    } else {
      message.owner = "";
    }
    return message;
  },

  toJSON(message: MsgDeleteProvider): unknown {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgDeleteProvider>): MsgDeleteProvider {
    const message = { ...baseMsgDeleteProvider } as MsgDeleteProvider;
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    } else {
      message.owner = "";
    }
    return message;
  },
};

const baseMsgDeleteProviderResponse: object = {};

export const MsgDeleteProviderResponse = {
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
    const message = {
      ...baseMsgDeleteProviderResponse,
    } as MsgDeleteProviderResponse;
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
    const message = {
      ...baseMsgDeleteProviderResponse,
    } as MsgDeleteProviderResponse;
    return message;
  },

  toJSON(_: MsgDeleteProviderResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgDeleteProviderResponse>
  ): MsgDeleteProviderResponse {
    const message = {
      ...baseMsgDeleteProviderResponse,
    } as MsgDeleteProviderResponse;
    return message;
  },
};

const baseProvider: object = { owner: "", hostUri: "" };

export const Provider = {
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
    const message = { ...baseProvider } as Provider;
    message.attributes = [];
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
    const message = { ...baseProvider } as Provider;
    message.attributes = [];
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = String(object.owner);
    } else {
      message.owner = "";
    }
    if (object.hostUri !== undefined && object.hostUri !== null) {
      message.hostUri = String(object.hostUri);
    } else {
      message.hostUri = "";
    }
    if (object.attributes !== undefined && object.attributes !== null) {
      for (const e of object.attributes) {
        message.attributes.push(Attribute.fromJSON(e));
      }
    }
    if (object.info !== undefined && object.info !== null) {
      message.info = ProviderInfo.fromJSON(object.info);
    } else {
      message.info = undefined;
    }
    return message;
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

  fromPartial(object: DeepPartial<Provider>): Provider {
    const message = { ...baseProvider } as Provider;
    message.attributes = [];
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    } else {
      message.owner = "";
    }
    if (object.hostUri !== undefined && object.hostUri !== null) {
      message.hostUri = object.hostUri;
    } else {
      message.hostUri = "";
    }
    if (object.attributes !== undefined && object.attributes !== null) {
      for (const e of object.attributes) {
        message.attributes.push(Attribute.fromPartial(e));
      }
    }
    if (object.info !== undefined && object.info !== null) {
      message.info = ProviderInfo.fromPartial(object.info);
    } else {
      message.info = undefined;
    }
    return message;
  },
};

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
      "akash.provider.v1beta1.Msg",
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
      "akash.provider.v1beta1.Msg",
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
      "akash.provider.v1beta1.Msg",
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
  | undefined
  | Long;
export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}
