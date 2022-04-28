/* eslint-disable */
import { messageTypeRegistry } from "../../../typeRegistry";
import Long from "long";
import _m0 from "protobufjs/minimal";
import {
  PageRequest,
  PageResponse,
} from "../../../cosmos/base/query/v1beta1/pagination";
import { Provider } from "../../../akash/provider/v1beta2/provider";

export const protobufPackage = "akash.provider.v1beta2";

/** QueryProvidersRequest is request type for the Query/Providers RPC method */
export interface QueryProvidersRequest {
  $type: "akash.provider.v1beta2.QueryProvidersRequest";
  pagination?: PageRequest;
}

/** QueryProvidersResponse is response type for the Query/Providers RPC method */
export interface QueryProvidersResponse {
  $type: "akash.provider.v1beta2.QueryProvidersResponse";
  providers: Provider[];
  pagination?: PageResponse;
}

/** QueryProviderRequest is request type for the Query/Provider RPC method */
export interface QueryProviderRequest {
  $type: "akash.provider.v1beta2.QueryProviderRequest";
  owner: string;
}

/** QueryProviderResponse is response type for the Query/Provider RPC method */
export interface QueryProviderResponse {
  $type: "akash.provider.v1beta2.QueryProviderResponse";
  provider?: Provider;
}

function createBaseQueryProvidersRequest(): QueryProvidersRequest {
  return {
    $type: "akash.provider.v1beta2.QueryProvidersRequest",
    pagination: undefined,
  };
}

export const QueryProvidersRequest = {
  $type: "akash.provider.v1beta2.QueryProvidersRequest" as const,

  encode(
    message: QueryProvidersRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryProvidersRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryProvidersRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryProvidersRequest {
    return {
      $type: QueryProvidersRequest.$type,
      pagination: isSet(object.pagination)
        ? PageRequest.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: QueryProvidersRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryProvidersRequest>, I>>(
    object: I
  ): QueryProvidersRequest {
    const message = createBaseQueryProvidersRequest();
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(QueryProvidersRequest.$type, QueryProvidersRequest);

function createBaseQueryProvidersResponse(): QueryProvidersResponse {
  return {
    $type: "akash.provider.v1beta2.QueryProvidersResponse",
    providers: [],
    pagination: undefined,
  };
}

export const QueryProvidersResponse = {
  $type: "akash.provider.v1beta2.QueryProvidersResponse" as const,

  encode(
    message: QueryProvidersResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.providers) {
      Provider.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryProvidersResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryProvidersResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.providers.push(Provider.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryProvidersResponse {
    return {
      $type: QueryProvidersResponse.$type,
      providers: Array.isArray(object?.providers)
        ? object.providers.map((e: any) => Provider.fromJSON(e))
        : [],
      pagination: isSet(object.pagination)
        ? PageResponse.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: QueryProvidersResponse): unknown {
    const obj: any = {};
    if (message.providers) {
      obj.providers = message.providers.map((e) =>
        e ? Provider.toJSON(e) : undefined
      );
    } else {
      obj.providers = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryProvidersResponse>, I>>(
    object: I
  ): QueryProvidersResponse {
    const message = createBaseQueryProvidersResponse();
    message.providers =
      object.providers?.map((e) => Provider.fromPartial(e)) || [];
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(QueryProvidersResponse.$type, QueryProvidersResponse);

function createBaseQueryProviderRequest(): QueryProviderRequest {
  return { $type: "akash.provider.v1beta2.QueryProviderRequest", owner: "" };
}

export const QueryProviderRequest = {
  $type: "akash.provider.v1beta2.QueryProviderRequest" as const,

  encode(
    message: QueryProviderRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryProviderRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryProviderRequest();
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

  fromJSON(object: any): QueryProviderRequest {
    return {
      $type: QueryProviderRequest.$type,
      owner: isSet(object.owner) ? String(object.owner) : "",
    };
  },

  toJSON(message: QueryProviderRequest): unknown {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryProviderRequest>, I>>(
    object: I
  ): QueryProviderRequest {
    const message = createBaseQueryProviderRequest();
    message.owner = object.owner ?? "";
    return message;
  },
};

messageTypeRegistry.set(QueryProviderRequest.$type, QueryProviderRequest);

function createBaseQueryProviderResponse(): QueryProviderResponse {
  return {
    $type: "akash.provider.v1beta2.QueryProviderResponse",
    provider: undefined,
  };
}

export const QueryProviderResponse = {
  $type: "akash.provider.v1beta2.QueryProviderResponse" as const,

  encode(
    message: QueryProviderResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.provider !== undefined) {
      Provider.encode(message.provider, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryProviderResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryProviderResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.provider = Provider.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryProviderResponse {
    return {
      $type: QueryProviderResponse.$type,
      provider: isSet(object.provider)
        ? Provider.fromJSON(object.provider)
        : undefined,
    };
  },

  toJSON(message: QueryProviderResponse): unknown {
    const obj: any = {};
    message.provider !== undefined &&
      (obj.provider = message.provider
        ? Provider.toJSON(message.provider)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryProviderResponse>, I>>(
    object: I
  ): QueryProviderResponse {
    const message = createBaseQueryProviderResponse();
    message.provider =
      object.provider !== undefined && object.provider !== null
        ? Provider.fromPartial(object.provider)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(QueryProviderResponse.$type, QueryProviderResponse);

/** Query defines the gRPC querier service */
export interface Query {
  /** Providers queries providers */
  Providers(request: QueryProvidersRequest): Promise<QueryProvidersResponse>;
  /** Provider queries provider details */
  Provider(request: QueryProviderRequest): Promise<QueryProviderResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Providers = this.Providers.bind(this);
    this.Provider = this.Provider.bind(this);
  }
  Providers(request: QueryProvidersRequest): Promise<QueryProvidersResponse> {
    const data = QueryProvidersRequest.encode(request).finish();
    const promise = this.rpc.request(
      "akash.provider.v1beta2.Query",
      "Providers",
      data
    );
    return promise.then((data) =>
      QueryProvidersResponse.decode(new _m0.Reader(data))
    );
  }

  Provider(request: QueryProviderRequest): Promise<QueryProviderResponse> {
    const data = QueryProviderRequest.encode(request).finish();
    const promise = this.rpc.request(
      "akash.provider.v1beta2.Query",
      "Provider",
      data
    );
    return promise.then((data) =>
      QueryProviderResponse.decode(new _m0.Reader(data))
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
