/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import {
  PageResponse,
  PageRequest,
} from "../../../cosmos/base/query/v1beta1/pagination";
import { Provider } from "../../../akash/audit/v1beta1/audit";

export const protobufPackage = "akash.audit.v1beta1";

/** QueryProvidersResponse is response type for the Query/Providers RPC method */
export interface QueryProvidersResponse {
  providers: Provider[];
  pagination?: PageResponse;
}

/** QueryProviderRequest is request type for the Query/Provider RPC method */
export interface QueryProviderRequest {
  auditor: string;
  owner: string;
}

/** QueryAllProvidersAttributesRequest is request type for the Query/All Providers RPC method */
export interface QueryAllProvidersAttributesRequest {
  pagination?: PageRequest;
}

/** QueryProviderAttributesRequest is request type for the Query/Provider RPC method */
export interface QueryProviderAttributesRequest {
  owner: string;
  pagination?: PageRequest;
}

/** QueryProviderAuditorRequest is request type for the Query/Providers RPC method */
export interface QueryProviderAuditorRequest {
  auditor: string;
  owner: string;
}

/** QueryAuditorAttributesRequest is request type for the Query/Providers RPC method */
export interface QueryAuditorAttributesRequest {
  auditor: string;
  pagination?: PageRequest;
}

const baseQueryProvidersResponse: object = {};

export const QueryProvidersResponse = {
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
    const message = { ...baseQueryProvidersResponse } as QueryProvidersResponse;
    message.providers = [];
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
    const message = { ...baseQueryProvidersResponse } as QueryProvidersResponse;
    message.providers = [];
    if (object.providers !== undefined && object.providers !== null) {
      for (const e of object.providers) {
        message.providers.push(Provider.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
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

  fromPartial(
    object: DeepPartial<QueryProvidersResponse>
  ): QueryProvidersResponse {
    const message = { ...baseQueryProvidersResponse } as QueryProvidersResponse;
    message.providers = [];
    if (object.providers !== undefined && object.providers !== null) {
      for (const e of object.providers) {
        message.providers.push(Provider.fromPartial(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryProviderRequest: object = { auditor: "", owner: "" };

export const QueryProviderRequest = {
  encode(
    message: QueryProviderRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.auditor !== "") {
      writer.uint32(10).string(message.auditor);
    }
    if (message.owner !== "") {
      writer.uint32(18).string(message.owner);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryProviderRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryProviderRequest } as QueryProviderRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.auditor = reader.string();
          break;
        case 2:
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
    const message = { ...baseQueryProviderRequest } as QueryProviderRequest;
    if (object.auditor !== undefined && object.auditor !== null) {
      message.auditor = String(object.auditor);
    } else {
      message.auditor = "";
    }
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = String(object.owner);
    } else {
      message.owner = "";
    }
    return message;
  },

  toJSON(message: QueryProviderRequest): unknown {
    const obj: any = {};
    message.auditor !== undefined && (obj.auditor = message.auditor);
    message.owner !== undefined && (obj.owner = message.owner);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryProviderRequest>): QueryProviderRequest {
    const message = { ...baseQueryProviderRequest } as QueryProviderRequest;
    if (object.auditor !== undefined && object.auditor !== null) {
      message.auditor = object.auditor;
    } else {
      message.auditor = "";
    }
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    } else {
      message.owner = "";
    }
    return message;
  },
};

const baseQueryAllProvidersAttributesRequest: object = {};

export const QueryAllProvidersAttributesRequest = {
  encode(
    message: QueryAllProvidersAttributesRequest,
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
  ): QueryAllProvidersAttributesRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllProvidersAttributesRequest,
    } as QueryAllProvidersAttributesRequest;
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

  fromJSON(object: any): QueryAllProvidersAttributesRequest {
    const message = {
      ...baseQueryAllProvidersAttributesRequest,
    } as QueryAllProvidersAttributesRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllProvidersAttributesRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllProvidersAttributesRequest>
  ): QueryAllProvidersAttributesRequest {
    const message = {
      ...baseQueryAllProvidersAttributesRequest,
    } as QueryAllProvidersAttributesRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryProviderAttributesRequest: object = { owner: "" };

export const QueryProviderAttributesRequest = {
  encode(
    message: QueryProviderAttributesRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryProviderAttributesRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryProviderAttributesRequest,
    } as QueryProviderAttributesRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryProviderAttributesRequest {
    const message = {
      ...baseQueryProviderAttributesRequest,
    } as QueryProviderAttributesRequest;
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = String(object.owner);
    } else {
      message.owner = "";
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryProviderAttributesRequest): unknown {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner);
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryProviderAttributesRequest>
  ): QueryProviderAttributesRequest {
    const message = {
      ...baseQueryProviderAttributesRequest,
    } as QueryProviderAttributesRequest;
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    } else {
      message.owner = "";
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryProviderAuditorRequest: object = { auditor: "", owner: "" };

export const QueryProviderAuditorRequest = {
  encode(
    message: QueryProviderAuditorRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.auditor !== "") {
      writer.uint32(10).string(message.auditor);
    }
    if (message.owner !== "") {
      writer.uint32(18).string(message.owner);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryProviderAuditorRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryProviderAuditorRequest,
    } as QueryProviderAuditorRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.auditor = reader.string();
          break;
        case 2:
          message.owner = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryProviderAuditorRequest {
    const message = {
      ...baseQueryProviderAuditorRequest,
    } as QueryProviderAuditorRequest;
    if (object.auditor !== undefined && object.auditor !== null) {
      message.auditor = String(object.auditor);
    } else {
      message.auditor = "";
    }
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = String(object.owner);
    } else {
      message.owner = "";
    }
    return message;
  },

  toJSON(message: QueryProviderAuditorRequest): unknown {
    const obj: any = {};
    message.auditor !== undefined && (obj.auditor = message.auditor);
    message.owner !== undefined && (obj.owner = message.owner);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryProviderAuditorRequest>
  ): QueryProviderAuditorRequest {
    const message = {
      ...baseQueryProviderAuditorRequest,
    } as QueryProviderAuditorRequest;
    if (object.auditor !== undefined && object.auditor !== null) {
      message.auditor = object.auditor;
    } else {
      message.auditor = "";
    }
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    } else {
      message.owner = "";
    }
    return message;
  },
};

const baseQueryAuditorAttributesRequest: object = { auditor: "" };

export const QueryAuditorAttributesRequest = {
  encode(
    message: QueryAuditorAttributesRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.auditor !== "") {
      writer.uint32(10).string(message.auditor);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryAuditorAttributesRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAuditorAttributesRequest,
    } as QueryAuditorAttributesRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.auditor = reader.string();
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAuditorAttributesRequest {
    const message = {
      ...baseQueryAuditorAttributesRequest,
    } as QueryAuditorAttributesRequest;
    if (object.auditor !== undefined && object.auditor !== null) {
      message.auditor = String(object.auditor);
    } else {
      message.auditor = "";
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAuditorAttributesRequest): unknown {
    const obj: any = {};
    message.auditor !== undefined && (obj.auditor = message.auditor);
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAuditorAttributesRequest>
  ): QueryAuditorAttributesRequest {
    const message = {
      ...baseQueryAuditorAttributesRequest,
    } as QueryAuditorAttributesRequest;
    if (object.auditor !== undefined && object.auditor !== null) {
      message.auditor = object.auditor;
    } else {
      message.auditor = "";
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

/** Query defines the gRPC querier service */
export interface Query {
  /**
   * AllProvidersAttributes queries all providers
   * buf:lint:ignore RPC_REQUEST_RESPONSE_UNIQUE
   * buf:lint:ignore RPC_RESPONSE_STANDARD_NAME
   */
  AllProvidersAttributes(
    request: QueryAllProvidersAttributesRequest
  ): Promise<QueryProvidersResponse>;
  /**
   * ProviderAttributes queries all provider signed attributes
   * buf:lint:ignore RPC_REQUEST_RESPONSE_UNIQUE
   * buf:lint:ignore RPC_RESPONSE_STANDARD_NAME
   */
  ProviderAttributes(
    request: QueryProviderAttributesRequest
  ): Promise<QueryProvidersResponse>;
  /**
   * ProviderAuditorAttributes queries provider signed attributes by specific auditor
   * buf:lint:ignore RPC_REQUEST_RESPONSE_UNIQUE
   * buf:lint:ignore RPC_RESPONSE_STANDARD_NAME
   */
  ProviderAuditorAttributes(
    request: QueryProviderAuditorRequest
  ): Promise<QueryProvidersResponse>;
  /**
   * AuditorAttributes queries all providers signed by this auditor
   * buf:lint:ignore RPC_REQUEST_RESPONSE_UNIQUE
   * buf:lint:ignore RPC_RESPONSE_STANDARD_NAME
   */
  AuditorAttributes(
    request: QueryAuditorAttributesRequest
  ): Promise<QueryProvidersResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.AllProvidersAttributes = this.AllProvidersAttributes.bind(this);
    this.ProviderAttributes = this.ProviderAttributes.bind(this);
    this.ProviderAuditorAttributes = this.ProviderAuditorAttributes.bind(this);
    this.AuditorAttributes = this.AuditorAttributes.bind(this);
  }
  AllProvidersAttributes(
    request: QueryAllProvidersAttributesRequest
  ): Promise<QueryProvidersResponse> {
    const data = QueryAllProvidersAttributesRequest.encode(request).finish();
    const promise = this.rpc.request(
      "akash.audit.v1beta1.Query",
      "AllProvidersAttributes",
      data
    );
    return promise.then((data) =>
      QueryProvidersResponse.decode(new _m0.Reader(data))
    );
  }

  ProviderAttributes(
    request: QueryProviderAttributesRequest
  ): Promise<QueryProvidersResponse> {
    const data = QueryProviderAttributesRequest.encode(request).finish();
    const promise = this.rpc.request(
      "akash.audit.v1beta1.Query",
      "ProviderAttributes",
      data
    );
    return promise.then((data) =>
      QueryProvidersResponse.decode(new _m0.Reader(data))
    );
  }

  ProviderAuditorAttributes(
    request: QueryProviderAuditorRequest
  ): Promise<QueryProvidersResponse> {
    const data = QueryProviderAuditorRequest.encode(request).finish();
    const promise = this.rpc.request(
      "akash.audit.v1beta1.Query",
      "ProviderAuditorAttributes",
      data
    );
    return promise.then((data) =>
      QueryProvidersResponse.decode(new _m0.Reader(data))
    );
  }

  AuditorAttributes(
    request: QueryAuditorAttributesRequest
  ): Promise<QueryProvidersResponse> {
    const data = QueryAuditorAttributesRequest.encode(request).finish();
    const promise = this.rpc.request(
      "akash.audit.v1beta1.Query",
      "AuditorAttributes",
      data
    );
    return promise.then((data) =>
      QueryProvidersResponse.decode(new _m0.Reader(data))
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
