/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { PageRequest, PageResponse } from "../../../cosmos/base/query/v1beta1/pagination";
import { messageTypeRegistry } from "../../../typeRegistry";
import { Provider } from "./audit";

export const protobufPackage = "akash.audit.v1beta2";

/** QueryProvidersResponse is response type for the Query/Providers RPC method */
export interface QueryProvidersResponse {
  $type: "akash.audit.v1beta2.QueryProvidersResponse";
  providers: Provider[];
  pagination: PageResponse | undefined;
}

/** QueryProviderRequest is request type for the Query/Provider RPC method */
export interface QueryProviderRequest {
  $type: "akash.audit.v1beta2.QueryProviderRequest";
  auditor: string;
  owner: string;
}

/** QueryAllProvidersAttributesRequest is request type for the Query/All Providers RPC method */
export interface QueryAllProvidersAttributesRequest {
  $type: "akash.audit.v1beta2.QueryAllProvidersAttributesRequest";
  pagination: PageRequest | undefined;
}

/** QueryProviderAttributesRequest is request type for the Query/Provider RPC method */
export interface QueryProviderAttributesRequest {
  $type: "akash.audit.v1beta2.QueryProviderAttributesRequest";
  owner: string;
  pagination: PageRequest | undefined;
}

/** QueryProviderAuditorRequest is request type for the Query/Providers RPC method */
export interface QueryProviderAuditorRequest {
  $type: "akash.audit.v1beta2.QueryProviderAuditorRequest";
  auditor: string;
  owner: string;
}

/** QueryAuditorAttributesRequest is request type for the Query/Providers RPC method */
export interface QueryAuditorAttributesRequest {
  $type: "akash.audit.v1beta2.QueryAuditorAttributesRequest";
  auditor: string;
  pagination: PageRequest | undefined;
}

function createBaseQueryProvidersResponse(): QueryProvidersResponse {
  return { $type: "akash.audit.v1beta2.QueryProvidersResponse", providers: [], pagination: undefined };
}

export const QueryProvidersResponse = {
  $type: "akash.audit.v1beta2.QueryProvidersResponse" as const,

  encode(message: QueryProvidersResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.providers) {
      Provider.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryProvidersResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryProvidersResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.providers.push(Provider.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.pagination = PageResponse.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryProvidersResponse {
    return {
      $type: QueryProvidersResponse.$type,
      providers: Array.isArray(object?.providers) ? object.providers.map((e: any) => Provider.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryProvidersResponse): unknown {
    const obj: any = {};
    if (message.providers) {
      obj.providers = message.providers.map((e) => e ? Provider.toJSON(e) : undefined);
    } else {
      obj.providers = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryProvidersResponse>, I>>(base?: I): QueryProvidersResponse {
    return QueryProvidersResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QueryProvidersResponse>, I>>(object: I): QueryProvidersResponse {
    const message = createBaseQueryProvidersResponse();
    message.providers = object.providers?.map((e) => Provider.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(QueryProvidersResponse.$type, QueryProvidersResponse);

function createBaseQueryProviderRequest(): QueryProviderRequest {
  return { $type: "akash.audit.v1beta2.QueryProviderRequest", auditor: "", owner: "" };
}

export const QueryProviderRequest = {
  $type: "akash.audit.v1beta2.QueryProviderRequest" as const,

  encode(message: QueryProviderRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.auditor !== "") {
      writer.uint32(10).string(message.auditor);
    }
    if (message.owner !== "") {
      writer.uint32(18).string(message.owner);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryProviderRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryProviderRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.auditor = reader.string();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.owner = reader.string();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryProviderRequest {
    return {
      $type: QueryProviderRequest.$type,
      auditor: isSet(object.auditor) ? String(object.auditor) : "",
      owner: isSet(object.owner) ? String(object.owner) : "",
    };
  },

  toJSON(message: QueryProviderRequest): unknown {
    const obj: any = {};
    message.auditor !== undefined && (obj.auditor = message.auditor);
    message.owner !== undefined && (obj.owner = message.owner);
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryProviderRequest>, I>>(base?: I): QueryProviderRequest {
    return QueryProviderRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QueryProviderRequest>, I>>(object: I): QueryProviderRequest {
    const message = createBaseQueryProviderRequest();
    message.auditor = object.auditor ?? "";
    message.owner = object.owner ?? "";
    return message;
  },
};

messageTypeRegistry.set(QueryProviderRequest.$type, QueryProviderRequest);

function createBaseQueryAllProvidersAttributesRequest(): QueryAllProvidersAttributesRequest {
  return { $type: "akash.audit.v1beta2.QueryAllProvidersAttributesRequest", pagination: undefined };
}

export const QueryAllProvidersAttributesRequest = {
  $type: "akash.audit.v1beta2.QueryAllProvidersAttributesRequest" as const,

  encode(message: QueryAllProvidersAttributesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllProvidersAttributesRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllProvidersAttributesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.pagination = PageRequest.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryAllProvidersAttributesRequest {
    return {
      $type: QueryAllProvidersAttributesRequest.$type,
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryAllProvidersAttributesRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryAllProvidersAttributesRequest>, I>>(
    base?: I,
  ): QueryAllProvidersAttributesRequest {
    return QueryAllProvidersAttributesRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllProvidersAttributesRequest>, I>>(
    object: I,
  ): QueryAllProvidersAttributesRequest {
    const message = createBaseQueryAllProvidersAttributesRequest();
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(QueryAllProvidersAttributesRequest.$type, QueryAllProvidersAttributesRequest);

function createBaseQueryProviderAttributesRequest(): QueryProviderAttributesRequest {
  return { $type: "akash.audit.v1beta2.QueryProviderAttributesRequest", owner: "", pagination: undefined };
}

export const QueryProviderAttributesRequest = {
  $type: "akash.audit.v1beta2.QueryProviderAttributesRequest" as const,

  encode(message: QueryProviderAttributesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryProviderAttributesRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryProviderAttributesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.owner = reader.string();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.pagination = PageRequest.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryProviderAttributesRequest {
    return {
      $type: QueryProviderAttributesRequest.$type,
      owner: isSet(object.owner) ? String(object.owner) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryProviderAttributesRequest): unknown {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner);
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryProviderAttributesRequest>, I>>(base?: I): QueryProviderAttributesRequest {
    return QueryProviderAttributesRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QueryProviderAttributesRequest>, I>>(
    object: I,
  ): QueryProviderAttributesRequest {
    const message = createBaseQueryProviderAttributesRequest();
    message.owner = object.owner ?? "";
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(QueryProviderAttributesRequest.$type, QueryProviderAttributesRequest);

function createBaseQueryProviderAuditorRequest(): QueryProviderAuditorRequest {
  return { $type: "akash.audit.v1beta2.QueryProviderAuditorRequest", auditor: "", owner: "" };
}

export const QueryProviderAuditorRequest = {
  $type: "akash.audit.v1beta2.QueryProviderAuditorRequest" as const,

  encode(message: QueryProviderAuditorRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.auditor !== "") {
      writer.uint32(10).string(message.auditor);
    }
    if (message.owner !== "") {
      writer.uint32(18).string(message.owner);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryProviderAuditorRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryProviderAuditorRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.auditor = reader.string();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.owner = reader.string();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryProviderAuditorRequest {
    return {
      $type: QueryProviderAuditorRequest.$type,
      auditor: isSet(object.auditor) ? String(object.auditor) : "",
      owner: isSet(object.owner) ? String(object.owner) : "",
    };
  },

  toJSON(message: QueryProviderAuditorRequest): unknown {
    const obj: any = {};
    message.auditor !== undefined && (obj.auditor = message.auditor);
    message.owner !== undefined && (obj.owner = message.owner);
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryProviderAuditorRequest>, I>>(base?: I): QueryProviderAuditorRequest {
    return QueryProviderAuditorRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QueryProviderAuditorRequest>, I>>(object: I): QueryProviderAuditorRequest {
    const message = createBaseQueryProviderAuditorRequest();
    message.auditor = object.auditor ?? "";
    message.owner = object.owner ?? "";
    return message;
  },
};

messageTypeRegistry.set(QueryProviderAuditorRequest.$type, QueryProviderAuditorRequest);

function createBaseQueryAuditorAttributesRequest(): QueryAuditorAttributesRequest {
  return { $type: "akash.audit.v1beta2.QueryAuditorAttributesRequest", auditor: "", pagination: undefined };
}

export const QueryAuditorAttributesRequest = {
  $type: "akash.audit.v1beta2.QueryAuditorAttributesRequest" as const,

  encode(message: QueryAuditorAttributesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.auditor !== "") {
      writer.uint32(10).string(message.auditor);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAuditorAttributesRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAuditorAttributesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.auditor = reader.string();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.pagination = PageRequest.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryAuditorAttributesRequest {
    return {
      $type: QueryAuditorAttributesRequest.$type,
      auditor: isSet(object.auditor) ? String(object.auditor) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryAuditorAttributesRequest): unknown {
    const obj: any = {};
    message.auditor !== undefined && (obj.auditor = message.auditor);
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryAuditorAttributesRequest>, I>>(base?: I): QueryAuditorAttributesRequest {
    return QueryAuditorAttributesRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QueryAuditorAttributesRequest>, I>>(
    object: I,
  ): QueryAuditorAttributesRequest {
    const message = createBaseQueryAuditorAttributesRequest();
    message.auditor = object.auditor ?? "";
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(QueryAuditorAttributesRequest.$type, QueryAuditorAttributesRequest);

/** Query defines the gRPC querier service */
export interface Query {
  /**
   * AllProvidersAttributes queries all providers
   * buf:lint:ignore RPC_REQUEST_RESPONSE_UNIQUE
   * buf:lint:ignore RPC_RESPONSE_STANDARD_NAME
   */
  AllProvidersAttributes(request: QueryAllProvidersAttributesRequest): Promise<QueryProvidersResponse>;
  /**
   * ProviderAttributes queries all provider signed attributes
   * buf:lint:ignore RPC_REQUEST_RESPONSE_UNIQUE
   * buf:lint:ignore RPC_RESPONSE_STANDARD_NAME
   */
  ProviderAttributes(request: QueryProviderAttributesRequest): Promise<QueryProvidersResponse>;
  /**
   * ProviderAuditorAttributes queries provider signed attributes by specific auditor
   * buf:lint:ignore RPC_REQUEST_RESPONSE_UNIQUE
   * buf:lint:ignore RPC_RESPONSE_STANDARD_NAME
   */
  ProviderAuditorAttributes(request: QueryProviderAuditorRequest): Promise<QueryProvidersResponse>;
  /**
   * AuditorAttributes queries all providers signed by this auditor
   * buf:lint:ignore RPC_REQUEST_RESPONSE_UNIQUE
   * buf:lint:ignore RPC_RESPONSE_STANDARD_NAME
   */
  AuditorAttributes(request: QueryAuditorAttributesRequest): Promise<QueryProvidersResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || "akash.audit.v1beta2.Query";
    this.rpc = rpc;
    this.AllProvidersAttributes = this.AllProvidersAttributes.bind(this);
    this.ProviderAttributes = this.ProviderAttributes.bind(this);
    this.ProviderAuditorAttributes = this.ProviderAuditorAttributes.bind(this);
    this.AuditorAttributes = this.AuditorAttributes.bind(this);
  }
  AllProvidersAttributes(request: QueryAllProvidersAttributesRequest): Promise<QueryProvidersResponse> {
    const data = QueryAllProvidersAttributesRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "AllProvidersAttributes", data);
    return promise.then((data) => QueryProvidersResponse.decode(_m0.Reader.create(data)));
  }

  ProviderAttributes(request: QueryProviderAttributesRequest): Promise<QueryProvidersResponse> {
    const data = QueryProviderAttributesRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "ProviderAttributes", data);
    return promise.then((data) => QueryProvidersResponse.decode(_m0.Reader.create(data)));
  }

  ProviderAuditorAttributes(request: QueryProviderAuditorRequest): Promise<QueryProvidersResponse> {
    const data = QueryProviderAuditorRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "ProviderAuditorAttributes", data);
    return promise.then((data) => QueryProvidersResponse.decode(_m0.Reader.create(data)));
  }

  AuditorAttributes(request: QueryAuditorAttributesRequest): Promise<QueryProvidersResponse> {
    const data = QueryAuditorAttributesRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "AuditorAttributes", data);
    return promise.then((data) => QueryProvidersResponse.decode(_m0.Reader.create(data)));
  }
}

interface Rpc {
  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
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
