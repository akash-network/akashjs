/* eslint-disable */
import { messageTypeRegistry } from "../../../typeRegistry";
import Long from "long";
import { Attribute } from "../../base/v1beta3/attribute";
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "akash.audit.v1beta3";

/** Provider stores owner auditor and attributes details */
export interface Provider {
  $type: "akash.audit.v1beta3.Provider";
  owner: string;
  auditor: string;
  attributes: Attribute[];
}

/** Attributes */
export interface AuditedAttributes {
  $type: "akash.audit.v1beta3.AuditedAttributes";
  owner: string;
  auditor: string;
  attributes: Attribute[];
}

/** AttributesResponse represents details of deployment along with group details */
export interface AttributesResponse {
  $type: "akash.audit.v1beta3.AttributesResponse";
  attributes: AuditedAttributes[];
}

/** AttributesFilters defines filters used to filter deployments */
export interface AttributesFilters {
  $type: "akash.audit.v1beta3.AttributesFilters";
  auditors: string[];
  owners: string[];
}

/** MsgSignProviderAttributes defines an SDK message for signing a provider attributes */
export interface MsgSignProviderAttributes {
  $type: "akash.audit.v1beta3.MsgSignProviderAttributes";
  owner: string;
  auditor: string;
  attributes: Attribute[];
}

/** MsgSignProviderAttributesResponse defines the Msg/CreateProvider response type. */
export interface MsgSignProviderAttributesResponse {
  $type: "akash.audit.v1beta3.MsgSignProviderAttributesResponse";
}

/** MsgDeleteProviderAttributes defined the Msg/DeleteProviderAttributes */
export interface MsgDeleteProviderAttributes {
  $type: "akash.audit.v1beta3.MsgDeleteProviderAttributes";
  owner: string;
  auditor: string;
  keys: string[];
}

/** MsgDeleteProviderAttributesResponse defines the Msg/ProviderAttributes response type. */
export interface MsgDeleteProviderAttributesResponse {
  $type: "akash.audit.v1beta3.MsgDeleteProviderAttributesResponse";
}

function createBaseProvider(): Provider {
  return {
    $type: "akash.audit.v1beta3.Provider",
    owner: "",
    auditor: "",
    attributes: [],
  };
}

export const Provider = {
  $type: "akash.audit.v1beta3.Provider" as const,

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
    const message = createBaseProvider();
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
    return {
      $type: Provider.$type,
      owner: isSet(object.owner) ? String(object.owner) : "",
      auditor: isSet(object.auditor) ? String(object.auditor) : "",
      attributes: Array.isArray(object?.attributes)
        ? object.attributes.map((e: any) => Attribute.fromJSON(e))
        : [],
    };
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

  fromPartial<I extends Exact<DeepPartial<Provider>, I>>(object: I): Provider {
    const message = createBaseProvider();
    message.owner = object.owner ?? "";
    message.auditor = object.auditor ?? "";
    message.attributes =
      object.attributes?.map((e) => Attribute.fromPartial(e)) || [];
    return message;
  },
};

messageTypeRegistry.set(Provider.$type, Provider);

function createBaseAuditedAttributes(): AuditedAttributes {
  return {
    $type: "akash.audit.v1beta3.AuditedAttributes",
    owner: "",
    auditor: "",
    attributes: [],
  };
}

export const AuditedAttributes = {
  $type: "akash.audit.v1beta3.AuditedAttributes" as const,

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
    const message = createBaseAuditedAttributes();
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
    return {
      $type: AuditedAttributes.$type,
      owner: isSet(object.owner) ? String(object.owner) : "",
      auditor: isSet(object.auditor) ? String(object.auditor) : "",
      attributes: Array.isArray(object?.attributes)
        ? object.attributes.map((e: any) => Attribute.fromJSON(e))
        : [],
    };
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

  fromPartial<I extends Exact<DeepPartial<AuditedAttributes>, I>>(
    object: I
  ): AuditedAttributes {
    const message = createBaseAuditedAttributes();
    message.owner = object.owner ?? "";
    message.auditor = object.auditor ?? "";
    message.attributes =
      object.attributes?.map((e) => Attribute.fromPartial(e)) || [];
    return message;
  },
};

messageTypeRegistry.set(AuditedAttributes.$type, AuditedAttributes);

function createBaseAttributesResponse(): AttributesResponse {
  return { $type: "akash.audit.v1beta3.AttributesResponse", attributes: [] };
}

export const AttributesResponse = {
  $type: "akash.audit.v1beta3.AttributesResponse" as const,

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
    const message = createBaseAttributesResponse();
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
    return {
      $type: AttributesResponse.$type,
      attributes: Array.isArray(object?.attributes)
        ? object.attributes.map((e: any) => AuditedAttributes.fromJSON(e))
        : [],
    };
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

  fromPartial<I extends Exact<DeepPartial<AttributesResponse>, I>>(
    object: I
  ): AttributesResponse {
    const message = createBaseAttributesResponse();
    message.attributes =
      object.attributes?.map((e) => AuditedAttributes.fromPartial(e)) || [];
    return message;
  },
};

messageTypeRegistry.set(AttributesResponse.$type, AttributesResponse);

function createBaseAttributesFilters(): AttributesFilters {
  return {
    $type: "akash.audit.v1beta3.AttributesFilters",
    auditors: [],
    owners: [],
  };
}

export const AttributesFilters = {
  $type: "akash.audit.v1beta3.AttributesFilters" as const,

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
    const message = createBaseAttributesFilters();
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
    return {
      $type: AttributesFilters.$type,
      auditors: Array.isArray(object?.auditors)
        ? object.auditors.map((e: any) => String(e))
        : [],
      owners: Array.isArray(object?.owners)
        ? object.owners.map((e: any) => String(e))
        : [],
    };
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

  fromPartial<I extends Exact<DeepPartial<AttributesFilters>, I>>(
    object: I
  ): AttributesFilters {
    const message = createBaseAttributesFilters();
    message.auditors = object.auditors?.map((e) => e) || [];
    message.owners = object.owners?.map((e) => e) || [];
    return message;
  },
};

messageTypeRegistry.set(AttributesFilters.$type, AttributesFilters);

function createBaseMsgSignProviderAttributes(): MsgSignProviderAttributes {
  return {
    $type: "akash.audit.v1beta3.MsgSignProviderAttributes",
    owner: "",
    auditor: "",
    attributes: [],
  };
}

export const MsgSignProviderAttributes = {
  $type: "akash.audit.v1beta3.MsgSignProviderAttributes" as const,

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
    const message = createBaseMsgSignProviderAttributes();
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
    return {
      $type: MsgSignProviderAttributes.$type,
      owner: isSet(object.owner) ? String(object.owner) : "",
      auditor: isSet(object.auditor) ? String(object.auditor) : "",
      attributes: Array.isArray(object?.attributes)
        ? object.attributes.map((e: any) => Attribute.fromJSON(e))
        : [],
    };
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

  fromPartial<I extends Exact<DeepPartial<MsgSignProviderAttributes>, I>>(
    object: I
  ): MsgSignProviderAttributes {
    const message = createBaseMsgSignProviderAttributes();
    message.owner = object.owner ?? "";
    message.auditor = object.auditor ?? "";
    message.attributes =
      object.attributes?.map((e) => Attribute.fromPartial(e)) || [];
    return message;
  },
};

messageTypeRegistry.set(
  MsgSignProviderAttributes.$type,
  MsgSignProviderAttributes
);

function createBaseMsgSignProviderAttributesResponse(): MsgSignProviderAttributesResponse {
  return { $type: "akash.audit.v1beta3.MsgSignProviderAttributesResponse" };
}

export const MsgSignProviderAttributesResponse = {
  $type: "akash.audit.v1beta3.MsgSignProviderAttributesResponse" as const,

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
    const message = createBaseMsgSignProviderAttributesResponse();
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
    return {
      $type: MsgSignProviderAttributesResponse.$type,
    };
  },

  toJSON(_: MsgSignProviderAttributesResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<MsgSignProviderAttributesResponse>, I>
  >(_: I): MsgSignProviderAttributesResponse {
    const message = createBaseMsgSignProviderAttributesResponse();
    return message;
  },
};

messageTypeRegistry.set(
  MsgSignProviderAttributesResponse.$type,
  MsgSignProviderAttributesResponse
);

function createBaseMsgDeleteProviderAttributes(): MsgDeleteProviderAttributes {
  return {
    $type: "akash.audit.v1beta3.MsgDeleteProviderAttributes",
    owner: "",
    auditor: "",
    keys: [],
  };
}

export const MsgDeleteProviderAttributes = {
  $type: "akash.audit.v1beta3.MsgDeleteProviderAttributes" as const,

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
    const message = createBaseMsgDeleteProviderAttributes();
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
    return {
      $type: MsgDeleteProviderAttributes.$type,
      owner: isSet(object.owner) ? String(object.owner) : "",
      auditor: isSet(object.auditor) ? String(object.auditor) : "",
      keys: Array.isArray(object?.keys)
        ? object.keys.map((e: any) => String(e))
        : [],
    };
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

  fromPartial<I extends Exact<DeepPartial<MsgDeleteProviderAttributes>, I>>(
    object: I
  ): MsgDeleteProviderAttributes {
    const message = createBaseMsgDeleteProviderAttributes();
    message.owner = object.owner ?? "";
    message.auditor = object.auditor ?? "";
    message.keys = object.keys?.map((e) => e) || [];
    return message;
  },
};

messageTypeRegistry.set(
  MsgDeleteProviderAttributes.$type,
  MsgDeleteProviderAttributes
);

function createBaseMsgDeleteProviderAttributesResponse(): MsgDeleteProviderAttributesResponse {
  return { $type: "akash.audit.v1beta3.MsgDeleteProviderAttributesResponse" };
}

export const MsgDeleteProviderAttributesResponse = {
  $type: "akash.audit.v1beta3.MsgDeleteProviderAttributesResponse" as const,

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
    const message = createBaseMsgDeleteProviderAttributesResponse();
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
    return {
      $type: MsgDeleteProviderAttributesResponse.$type,
    };
  },

  toJSON(_: MsgDeleteProviderAttributesResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<MsgDeleteProviderAttributesResponse>, I>
  >(_: I): MsgDeleteProviderAttributesResponse {
    const message = createBaseMsgDeleteProviderAttributesResponse();
    return message;
  },
};

messageTypeRegistry.set(
  MsgDeleteProviderAttributesResponse.$type,
  MsgDeleteProviderAttributesResponse
);

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
      "akash.audit.v1beta3.Msg",
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
      "akash.audit.v1beta3.Msg",
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
