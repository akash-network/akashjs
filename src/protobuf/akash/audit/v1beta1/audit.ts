/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Attribute } from "../../../akash/base/v1beta1/attribute";

export const protobufPackage = "akash.audit.v1beta1";

/** Provider stores owner auditor and attributes details */
export interface Provider {
  owner: string;
  auditor: string;
  attributes: Attribute[];
}

/** Attributes */
export interface AuditedAttributes {
  owner: string;
  auditor: string;
  attributes: Attribute[];
}

/** AttributesResponse represents details of deployment along with group details */
export interface AttributesResponse {
  attributes: AuditedAttributes[];
}

/** AttributesFilters defines filters used to filter deployments */
export interface AttributesFilters {
  auditors: string[];
  owners: string[];
}

/** MsgSignProviderAttributes defines an SDK message for signing a provider attributes */
export interface MsgSignProviderAttributes {
  owner: string;
  auditor: string;
  attributes: Attribute[];
}

/** MsgSignProviderAttributesResponse defines the Msg/CreateProvider response type. */
export interface MsgSignProviderAttributesResponse {}

/** MsgDeleteProviderAttributes defined the Msg/DeleteProviderAttributes */
export interface MsgDeleteProviderAttributes {
  owner: string;
  auditor: string;
  keys: string[];
}

/** MsgDeleteProviderAttributesResponse defines the Msg/ProviderAttributes response type. */
export interface MsgDeleteProviderAttributesResponse {}

const baseProvider: object = { owner: "", auditor: "" };

export const Provider = {
  encode(
    message: Provider,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (message.auditor !== "") {
      writer.uint32(18).string(message.auditor);
    }
    for (const v of message.attributes) {
      Attribute.encode(v!, writer.uint32(34).fork()).ldelim();
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
          message.auditor = reader.string();
          break;
        case 4:
          message.attributes.push(Attribute.decode(reader, reader.uint32()));
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
    if (object.auditor !== undefined && object.auditor !== null) {
      message.auditor = String(object.auditor);
    } else {
      message.auditor = "";
    }
    if (object.attributes !== undefined && object.attributes !== null) {
      for (const e of object.attributes) {
        message.attributes.push(Attribute.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: Provider): unknown {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner);
    message.auditor !== undefined && (obj.auditor = message.auditor);
    if (message.attributes) {
      obj.attributes = message.attributes.map((e) =>
        e ? Attribute.toJSON(e) : undefined
      );
    } else {
      obj.attributes = [];
    }
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
    if (object.auditor !== undefined && object.auditor !== null) {
      message.auditor = object.auditor;
    } else {
      message.auditor = "";
    }
    if (object.attributes !== undefined && object.attributes !== null) {
      for (const e of object.attributes) {
        message.attributes.push(Attribute.fromPartial(e));
      }
    }
    return message;
  },
};

const baseAuditedAttributes: object = { owner: "", auditor: "" };

export const AuditedAttributes = {
  encode(
    message: AuditedAttributes,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (message.auditor !== "") {
      writer.uint32(18).string(message.auditor);
    }
    for (const v of message.attributes) {
      Attribute.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AuditedAttributes {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseAuditedAttributes } as AuditedAttributes;
    message.attributes = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;
        case 2:
          message.auditor = reader.string();
          break;
        case 3:
          message.attributes.push(Attribute.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AuditedAttributes {
    const message = { ...baseAuditedAttributes } as AuditedAttributes;
    message.attributes = [];
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = String(object.owner);
    } else {
      message.owner = "";
    }
    if (object.auditor !== undefined && object.auditor !== null) {
      message.auditor = String(object.auditor);
    } else {
      message.auditor = "";
    }
    if (object.attributes !== undefined && object.attributes !== null) {
      for (const e of object.attributes) {
        message.attributes.push(Attribute.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: AuditedAttributes): unknown {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner);
    message.auditor !== undefined && (obj.auditor = message.auditor);
    if (message.attributes) {
      obj.attributes = message.attributes.map((e) =>
        e ? Attribute.toJSON(e) : undefined
      );
    } else {
      obj.attributes = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<AuditedAttributes>): AuditedAttributes {
    const message = { ...baseAuditedAttributes } as AuditedAttributes;
    message.attributes = [];
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    } else {
      message.owner = "";
    }
    if (object.auditor !== undefined && object.auditor !== null) {
      message.auditor = object.auditor;
    } else {
      message.auditor = "";
    }
    if (object.attributes !== undefined && object.attributes !== null) {
      for (const e of object.attributes) {
        message.attributes.push(Attribute.fromPartial(e));
      }
    }
    return message;
  },
};

const baseAttributesResponse: object = {};

export const AttributesResponse = {
  encode(
    message: AttributesResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.attributes) {
      AuditedAttributes.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AttributesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseAttributesResponse } as AttributesResponse;
    message.attributes = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.attributes.push(
            AuditedAttributes.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AttributesResponse {
    const message = { ...baseAttributesResponse } as AttributesResponse;
    message.attributes = [];
    if (object.attributes !== undefined && object.attributes !== null) {
      for (const e of object.attributes) {
        message.attributes.push(AuditedAttributes.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: AttributesResponse): unknown {
    const obj: any = {};
    if (message.attributes) {
      obj.attributes = message.attributes.map((e) =>
        e ? AuditedAttributes.toJSON(e) : undefined
      );
    } else {
      obj.attributes = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<AttributesResponse>): AttributesResponse {
    const message = { ...baseAttributesResponse } as AttributesResponse;
    message.attributes = [];
    if (object.attributes !== undefined && object.attributes !== null) {
      for (const e of object.attributes) {
        message.attributes.push(AuditedAttributes.fromPartial(e));
      }
    }
    return message;
  },
};

const baseAttributesFilters: object = { auditors: "", owners: "" };

export const AttributesFilters = {
  encode(
    message: AttributesFilters,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.auditors) {
      writer.uint32(10).string(v!);
    }
    for (const v of message.owners) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AttributesFilters {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseAttributesFilters } as AttributesFilters;
    message.auditors = [];
    message.owners = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.auditors.push(reader.string());
          break;
        case 2:
          message.owners.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AttributesFilters {
    const message = { ...baseAttributesFilters } as AttributesFilters;
    message.auditors = [];
    message.owners = [];
    if (object.auditors !== undefined && object.auditors !== null) {
      for (const e of object.auditors) {
        message.auditors.push(String(e));
      }
    }
    if (object.owners !== undefined && object.owners !== null) {
      for (const e of object.owners) {
        message.owners.push(String(e));
      }
    }
    return message;
  },

  toJSON(message: AttributesFilters): unknown {
    const obj: any = {};
    if (message.auditors) {
      obj.auditors = message.auditors.map((e) => e);
    } else {
      obj.auditors = [];
    }
    if (message.owners) {
      obj.owners = message.owners.map((e) => e);
    } else {
      obj.owners = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<AttributesFilters>): AttributesFilters {
    const message = { ...baseAttributesFilters } as AttributesFilters;
    message.auditors = [];
    message.owners = [];
    if (object.auditors !== undefined && object.auditors !== null) {
      for (const e of object.auditors) {
        message.auditors.push(e);
      }
    }
    if (object.owners !== undefined && object.owners !== null) {
      for (const e of object.owners) {
        message.owners.push(e);
      }
    }
    return message;
  },
};

const baseMsgSignProviderAttributes: object = { owner: "", auditor: "" };

export const MsgSignProviderAttributes = {
  encode(
    message: MsgSignProviderAttributes,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (message.auditor !== "") {
      writer.uint32(18).string(message.auditor);
    }
    for (const v of message.attributes) {
      Attribute.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgSignProviderAttributes {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgSignProviderAttributes,
    } as MsgSignProviderAttributes;
    message.attributes = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;
        case 2:
          message.auditor = reader.string();
          break;
        case 3:
          message.attributes.push(Attribute.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgSignProviderAttributes {
    const message = {
      ...baseMsgSignProviderAttributes,
    } as MsgSignProviderAttributes;
    message.attributes = [];
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = String(object.owner);
    } else {
      message.owner = "";
    }
    if (object.auditor !== undefined && object.auditor !== null) {
      message.auditor = String(object.auditor);
    } else {
      message.auditor = "";
    }
    if (object.attributes !== undefined && object.attributes !== null) {
      for (const e of object.attributes) {
        message.attributes.push(Attribute.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: MsgSignProviderAttributes): unknown {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner);
    message.auditor !== undefined && (obj.auditor = message.auditor);
    if (message.attributes) {
      obj.attributes = message.attributes.map((e) =>
        e ? Attribute.toJSON(e) : undefined
      );
    } else {
      obj.attributes = [];
    }
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgSignProviderAttributes>
  ): MsgSignProviderAttributes {
    const message = {
      ...baseMsgSignProviderAttributes,
    } as MsgSignProviderAttributes;
    message.attributes = [];
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    } else {
      message.owner = "";
    }
    if (object.auditor !== undefined && object.auditor !== null) {
      message.auditor = object.auditor;
    } else {
      message.auditor = "";
    }
    if (object.attributes !== undefined && object.attributes !== null) {
      for (const e of object.attributes) {
        message.attributes.push(Attribute.fromPartial(e));
      }
    }
    return message;
  },
};

const baseMsgSignProviderAttributesResponse: object = {};

export const MsgSignProviderAttributesResponse = {
  encode(
    _: MsgSignProviderAttributesResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgSignProviderAttributesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgSignProviderAttributesResponse,
    } as MsgSignProviderAttributesResponse;
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

  fromJSON(_: any): MsgSignProviderAttributesResponse {
    const message = {
      ...baseMsgSignProviderAttributesResponse,
    } as MsgSignProviderAttributesResponse;
    return message;
  },

  toJSON(_: MsgSignProviderAttributesResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgSignProviderAttributesResponse>
  ): MsgSignProviderAttributesResponse {
    const message = {
      ...baseMsgSignProviderAttributesResponse,
    } as MsgSignProviderAttributesResponse;
    return message;
  },
};

const baseMsgDeleteProviderAttributes: object = {
  owner: "",
  auditor: "",
  keys: "",
};

export const MsgDeleteProviderAttributes = {
  encode(
    message: MsgDeleteProviderAttributes,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (message.auditor !== "") {
      writer.uint32(18).string(message.auditor);
    }
    for (const v of message.keys) {
      writer.uint32(26).string(v!);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgDeleteProviderAttributes {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgDeleteProviderAttributes,
    } as MsgDeleteProviderAttributes;
    message.keys = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;
        case 2:
          message.auditor = reader.string();
          break;
        case 3:
          message.keys.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgDeleteProviderAttributes {
    const message = {
      ...baseMsgDeleteProviderAttributes,
    } as MsgDeleteProviderAttributes;
    message.keys = [];
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = String(object.owner);
    } else {
      message.owner = "";
    }
    if (object.auditor !== undefined && object.auditor !== null) {
      message.auditor = String(object.auditor);
    } else {
      message.auditor = "";
    }
    if (object.keys !== undefined && object.keys !== null) {
      for (const e of object.keys) {
        message.keys.push(String(e));
      }
    }
    return message;
  },

  toJSON(message: MsgDeleteProviderAttributes): unknown {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner);
    message.auditor !== undefined && (obj.auditor = message.auditor);
    if (message.keys) {
      obj.keys = message.keys.map((e) => e);
    } else {
      obj.keys = [];
    }
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgDeleteProviderAttributes>
  ): MsgDeleteProviderAttributes {
    const message = {
      ...baseMsgDeleteProviderAttributes,
    } as MsgDeleteProviderAttributes;
    message.keys = [];
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    } else {
      message.owner = "";
    }
    if (object.auditor !== undefined && object.auditor !== null) {
      message.auditor = object.auditor;
    } else {
      message.auditor = "";
    }
    if (object.keys !== undefined && object.keys !== null) {
      for (const e of object.keys) {
        message.keys.push(e);
      }
    }
    return message;
  },
};

const baseMsgDeleteProviderAttributesResponse: object = {};

export const MsgDeleteProviderAttributesResponse = {
  encode(
    _: MsgDeleteProviderAttributesResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgDeleteProviderAttributesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgDeleteProviderAttributesResponse,
    } as MsgDeleteProviderAttributesResponse;
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

  fromJSON(_: any): MsgDeleteProviderAttributesResponse {
    const message = {
      ...baseMsgDeleteProviderAttributesResponse,
    } as MsgDeleteProviderAttributesResponse;
    return message;
  },

  toJSON(_: MsgDeleteProviderAttributesResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgDeleteProviderAttributesResponse>
  ): MsgDeleteProviderAttributesResponse {
    const message = {
      ...baseMsgDeleteProviderAttributesResponse,
    } as MsgDeleteProviderAttributesResponse;
    return message;
  },
};

/** Msg defines the provider Msg service */
export interface Msg {
  /** SignProviderAttributes defines a method that signs provider attributes */
  SignProviderAttributes(
    request: MsgSignProviderAttributes
  ): Promise<MsgSignProviderAttributesResponse>;
  /** DeleteProviderAttributes defines a method that deletes provider attributes */
  DeleteProviderAttributes(
    request: MsgDeleteProviderAttributes
  ): Promise<MsgDeleteProviderAttributesResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.SignProviderAttributes = this.SignProviderAttributes.bind(this);
    this.DeleteProviderAttributes = this.DeleteProviderAttributes.bind(this);
  }
  SignProviderAttributes(
    request: MsgSignProviderAttributes
  ): Promise<MsgSignProviderAttributesResponse> {
    const data = MsgSignProviderAttributes.encode(request).finish();
    const promise = this.rpc.request(
      "akash.audit.v1beta1.Msg",
      "SignProviderAttributes",
      data
    );
    return promise.then((data) =>
      MsgSignProviderAttributesResponse.decode(new _m0.Reader(data))
    );
  }

  DeleteProviderAttributes(
    request: MsgDeleteProviderAttributes
  ): Promise<MsgDeleteProviderAttributesResponse> {
    const data = MsgDeleteProviderAttributes.encode(request).finish();
    const promise = this.rpc.request(
      "akash.audit.v1beta1.Msg",
      "DeleteProviderAttributes",
      data
    );
    return promise.then((data) =>
      MsgDeleteProviderAttributesResponse.decode(new _m0.Reader(data))
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
