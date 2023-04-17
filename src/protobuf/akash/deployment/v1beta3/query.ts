/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { PageRequest, PageResponse } from "../../../cosmos/base/query/v1beta1/pagination";
import { messageTypeRegistry } from "../../../typeRegistry";
import { Account } from "../../escrow/v1beta3/types";
import { Deployment, DeploymentFilters, DeploymentID } from "./deployment";
import { Group } from "./group";
import { GroupID } from "./groupid";

export const protobufPackage = "akash.deployment.v1beta3";

/** QueryDeploymentsRequest is request type for the Query/Deployments RPC method */
export interface QueryDeploymentsRequest {
  $type: "akash.deployment.v1beta3.QueryDeploymentsRequest";
  filters: DeploymentFilters | undefined;
  pagination: PageRequest | undefined;
}

/** QueryDeploymentsResponse is response type for the Query/Deployments RPC method */
export interface QueryDeploymentsResponse {
  $type: "akash.deployment.v1beta3.QueryDeploymentsResponse";
  deployments: QueryDeploymentResponse[];
  pagination: PageResponse | undefined;
}

/** QueryDeploymentRequest is request type for the Query/Deployment RPC method */
export interface QueryDeploymentRequest {
  $type: "akash.deployment.v1beta3.QueryDeploymentRequest";
  id: DeploymentID | undefined;
}

/** QueryDeploymentResponse is response type for the Query/Deployment RPC method */
export interface QueryDeploymentResponse {
  $type: "akash.deployment.v1beta3.QueryDeploymentResponse";
  deployment: Deployment | undefined;
  groups: Group[];
  escrowAccount: Account | undefined;
}

/** QueryGroupRequest is request type for the Query/Group RPC method */
export interface QueryGroupRequest {
  $type: "akash.deployment.v1beta3.QueryGroupRequest";
  id: GroupID | undefined;
}

/** QueryGroupResponse is response type for the Query/Group RPC method */
export interface QueryGroupResponse {
  $type: "akash.deployment.v1beta3.QueryGroupResponse";
  group: Group | undefined;
}

function createBaseQueryDeploymentsRequest(): QueryDeploymentsRequest {
  return { $type: "akash.deployment.v1beta3.QueryDeploymentsRequest", filters: undefined, pagination: undefined };
}

export const QueryDeploymentsRequest = {
  $type: "akash.deployment.v1beta3.QueryDeploymentsRequest" as const,

  encode(message: QueryDeploymentsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.filters !== undefined) {
      DeploymentFilters.encode(message.filters, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryDeploymentsRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDeploymentsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.filters = DeploymentFilters.decode(reader, reader.uint32());
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

  fromJSON(object: any): QueryDeploymentsRequest {
    return {
      $type: QueryDeploymentsRequest.$type,
      filters: isSet(object.filters) ? DeploymentFilters.fromJSON(object.filters) : undefined,
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryDeploymentsRequest): unknown {
    const obj: any = {};
    message.filters !== undefined &&
      (obj.filters = message.filters ? DeploymentFilters.toJSON(message.filters) : undefined);
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryDeploymentsRequest>, I>>(base?: I): QueryDeploymentsRequest {
    return QueryDeploymentsRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QueryDeploymentsRequest>, I>>(object: I): QueryDeploymentsRequest {
    const message = createBaseQueryDeploymentsRequest();
    message.filters = (object.filters !== undefined && object.filters !== null)
      ? DeploymentFilters.fromPartial(object.filters)
      : undefined;
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(QueryDeploymentsRequest.$type, QueryDeploymentsRequest);

function createBaseQueryDeploymentsResponse(): QueryDeploymentsResponse {
  return { $type: "akash.deployment.v1beta3.QueryDeploymentsResponse", deployments: [], pagination: undefined };
}

export const QueryDeploymentsResponse = {
  $type: "akash.deployment.v1beta3.QueryDeploymentsResponse" as const,

  encode(message: QueryDeploymentsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.deployments) {
      QueryDeploymentResponse.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryDeploymentsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDeploymentsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.deployments.push(QueryDeploymentResponse.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryDeploymentsResponse {
    return {
      $type: QueryDeploymentsResponse.$type,
      deployments: Array.isArray(object?.deployments)
        ? object.deployments.map((e: any) => QueryDeploymentResponse.fromJSON(e))
        : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryDeploymentsResponse): unknown {
    const obj: any = {};
    if (message.deployments) {
      obj.deployments = message.deployments.map((e) => e ? QueryDeploymentResponse.toJSON(e) : undefined);
    } else {
      obj.deployments = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryDeploymentsResponse>, I>>(base?: I): QueryDeploymentsResponse {
    return QueryDeploymentsResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QueryDeploymentsResponse>, I>>(object: I): QueryDeploymentsResponse {
    const message = createBaseQueryDeploymentsResponse();
    message.deployments = object.deployments?.map((e) => QueryDeploymentResponse.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(QueryDeploymentsResponse.$type, QueryDeploymentsResponse);

function createBaseQueryDeploymentRequest(): QueryDeploymentRequest {
  return { $type: "akash.deployment.v1beta3.QueryDeploymentRequest", id: undefined };
}

export const QueryDeploymentRequest = {
  $type: "akash.deployment.v1beta3.QueryDeploymentRequest" as const,

  encode(message: QueryDeploymentRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== undefined) {
      DeploymentID.encode(message.id, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryDeploymentRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDeploymentRequest();
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

  fromJSON(object: any): QueryDeploymentRequest {
    return { $type: QueryDeploymentRequest.$type, id: isSet(object.id) ? DeploymentID.fromJSON(object.id) : undefined };
  },

  toJSON(message: QueryDeploymentRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id ? DeploymentID.toJSON(message.id) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryDeploymentRequest>, I>>(base?: I): QueryDeploymentRequest {
    return QueryDeploymentRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QueryDeploymentRequest>, I>>(object: I): QueryDeploymentRequest {
    const message = createBaseQueryDeploymentRequest();
    message.id = (object.id !== undefined && object.id !== null) ? DeploymentID.fromPartial(object.id) : undefined;
    return message;
  },
};

messageTypeRegistry.set(QueryDeploymentRequest.$type, QueryDeploymentRequest);

function createBaseQueryDeploymentResponse(): QueryDeploymentResponse {
  return {
    $type: "akash.deployment.v1beta3.QueryDeploymentResponse",
    deployment: undefined,
    groups: [],
    escrowAccount: undefined,
  };
}

export const QueryDeploymentResponse = {
  $type: "akash.deployment.v1beta3.QueryDeploymentResponse" as const,

  encode(message: QueryDeploymentResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.deployment !== undefined) {
      Deployment.encode(message.deployment, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.groups) {
      Group.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.escrowAccount !== undefined) {
      Account.encode(message.escrowAccount, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryDeploymentResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDeploymentResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.deployment = Deployment.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.groups.push(Group.decode(reader, reader.uint32()));
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.escrowAccount = Account.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryDeploymentResponse {
    return {
      $type: QueryDeploymentResponse.$type,
      deployment: isSet(object.deployment) ? Deployment.fromJSON(object.deployment) : undefined,
      groups: Array.isArray(object?.groups) ? object.groups.map((e: any) => Group.fromJSON(e)) : [],
      escrowAccount: isSet(object.escrowAccount) ? Account.fromJSON(object.escrowAccount) : undefined,
    };
  },

  toJSON(message: QueryDeploymentResponse): unknown {
    const obj: any = {};
    message.deployment !== undefined &&
      (obj.deployment = message.deployment ? Deployment.toJSON(message.deployment) : undefined);
    if (message.groups) {
      obj.groups = message.groups.map((e) => e ? Group.toJSON(e) : undefined);
    } else {
      obj.groups = [];
    }
    message.escrowAccount !== undefined &&
      (obj.escrowAccount = message.escrowAccount ? Account.toJSON(message.escrowAccount) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryDeploymentResponse>, I>>(base?: I): QueryDeploymentResponse {
    return QueryDeploymentResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QueryDeploymentResponse>, I>>(object: I): QueryDeploymentResponse {
    const message = createBaseQueryDeploymentResponse();
    message.deployment = (object.deployment !== undefined && object.deployment !== null)
      ? Deployment.fromPartial(object.deployment)
      : undefined;
    message.groups = object.groups?.map((e) => Group.fromPartial(e)) || [];
    message.escrowAccount = (object.escrowAccount !== undefined && object.escrowAccount !== null)
      ? Account.fromPartial(object.escrowAccount)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(QueryDeploymentResponse.$type, QueryDeploymentResponse);

function createBaseQueryGroupRequest(): QueryGroupRequest {
  return { $type: "akash.deployment.v1beta3.QueryGroupRequest", id: undefined };
}

export const QueryGroupRequest = {
  $type: "akash.deployment.v1beta3.QueryGroupRequest" as const,

  encode(message: QueryGroupRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== undefined) {
      GroupID.encode(message.id, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGroupRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGroupRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.id = GroupID.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryGroupRequest {
    return { $type: QueryGroupRequest.$type, id: isSet(object.id) ? GroupID.fromJSON(object.id) : undefined };
  },

  toJSON(message: QueryGroupRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id ? GroupID.toJSON(message.id) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryGroupRequest>, I>>(base?: I): QueryGroupRequest {
    return QueryGroupRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QueryGroupRequest>, I>>(object: I): QueryGroupRequest {
    const message = createBaseQueryGroupRequest();
    message.id = (object.id !== undefined && object.id !== null) ? GroupID.fromPartial(object.id) : undefined;
    return message;
  },
};

messageTypeRegistry.set(QueryGroupRequest.$type, QueryGroupRequest);

function createBaseQueryGroupResponse(): QueryGroupResponse {
  return { $type: "akash.deployment.v1beta3.QueryGroupResponse", group: undefined };
}

export const QueryGroupResponse = {
  $type: "akash.deployment.v1beta3.QueryGroupResponse" as const,

  encode(message: QueryGroupResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.group !== undefined) {
      Group.encode(message.group, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGroupResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGroupResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.group = Group.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryGroupResponse {
    return { $type: QueryGroupResponse.$type, group: isSet(object.group) ? Group.fromJSON(object.group) : undefined };
  },

  toJSON(message: QueryGroupResponse): unknown {
    const obj: any = {};
    message.group !== undefined && (obj.group = message.group ? Group.toJSON(message.group) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryGroupResponse>, I>>(base?: I): QueryGroupResponse {
    return QueryGroupResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QueryGroupResponse>, I>>(object: I): QueryGroupResponse {
    const message = createBaseQueryGroupResponse();
    message.group = (object.group !== undefined && object.group !== null) ? Group.fromPartial(object.group) : undefined;
    return message;
  },
};

messageTypeRegistry.set(QueryGroupResponse.$type, QueryGroupResponse);

/** Query defines the gRPC querier service */
export interface Query {
  /** Deployments queries deployments */
  Deployments(request: QueryDeploymentsRequest): Promise<QueryDeploymentsResponse>;
  /** Deployment queries deployment details */
  Deployment(request: QueryDeploymentRequest): Promise<QueryDeploymentResponse>;
  /** Group queries group details */
  Group(request: QueryGroupRequest): Promise<QueryGroupResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || "akash.deployment.v1beta3.Query";
    this.rpc = rpc;
    this.Deployments = this.Deployments.bind(this);
    this.Deployment = this.Deployment.bind(this);
    this.Group = this.Group.bind(this);
  }
  Deployments(request: QueryDeploymentsRequest): Promise<QueryDeploymentsResponse> {
    const data = QueryDeploymentsRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "Deployments", data);
    return promise.then((data) => QueryDeploymentsResponse.decode(_m0.Reader.create(data)));
  }

  Deployment(request: QueryDeploymentRequest): Promise<QueryDeploymentResponse> {
    const data = QueryDeploymentRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "Deployment", data);
    return promise.then((data) => QueryDeploymentResponse.decode(_m0.Reader.create(data)));
  }

  Group(request: QueryGroupRequest): Promise<QueryGroupResponse> {
    const data = QueryGroupRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "Group", data);
    return promise.then((data) => QueryGroupResponse.decode(_m0.Reader.create(data)));
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
