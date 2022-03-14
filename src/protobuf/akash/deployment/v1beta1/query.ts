/* eslint-disable */
import { messageTypeRegistry } from "../../../typeRegistry";
import Long from "long";
import _m0 from "protobufjs/minimal";
import {
  DeploymentFilters,
  DeploymentID,
  Deployment,
} from "../../../akash/deployment/v1beta1/deployment";
import {
  PageRequest,
  PageResponse,
} from "../../../cosmos/base/query/v1beta1/pagination";
import { Account } from "../../../akash/escrow/v1beta1/types";
import { GroupID, Group } from "../../../akash/deployment/v1beta1/group";

export const protobufPackage = "akash.deployment.v1beta1";

/** QueryDeploymentsRequest is request type for the Query/Deployments RPC method */
export interface QueryDeploymentsRequest {
  $type: "akash.deployment.v1beta1.QueryDeploymentsRequest";
  filters?: DeploymentFilters;
  pagination?: PageRequest;
}

/** QueryDeploymentsResponse is response type for the Query/Deployments RPC method */
export interface QueryDeploymentsResponse {
  $type: "akash.deployment.v1beta1.QueryDeploymentsResponse";
  deployments: QueryDeploymentResponse[];
  pagination?: PageResponse;
}

/** QueryDeploymentRequest is request type for the Query/Deployment RPC method */
export interface QueryDeploymentRequest {
  $type: "akash.deployment.v1beta1.QueryDeploymentRequest";
  id?: DeploymentID;
}

/** QueryDeploymentResponse is response type for the Query/Deployment RPC method */
export interface QueryDeploymentResponse {
  $type: "akash.deployment.v1beta1.QueryDeploymentResponse";
  deployment?: Deployment;
  groups: Group[];
  escrowAccount?: Account;
}

/** QueryGroupRequest is request type for the Query/Group RPC method */
export interface QueryGroupRequest {
  $type: "akash.deployment.v1beta1.QueryGroupRequest";
  id?: GroupID;
}

/** QueryGroupResponse is response type for the Query/Group RPC method */
export interface QueryGroupResponse {
  $type: "akash.deployment.v1beta1.QueryGroupResponse";
  group?: Group;
}

function createBaseQueryDeploymentsRequest(): QueryDeploymentsRequest {
  return {
    $type: "akash.deployment.v1beta1.QueryDeploymentsRequest",
    filters: undefined,
    pagination: undefined,
  };
}

export const QueryDeploymentsRequest = {
  $type: "akash.deployment.v1beta1.QueryDeploymentsRequest" as const,

  encode(
    message: QueryDeploymentsRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.filters !== undefined) {
      DeploymentFilters.encode(
        message.filters,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryDeploymentsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDeploymentsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.filters = DeploymentFilters.decode(reader, reader.uint32());
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

  fromJSON(object: any): QueryDeploymentsRequest {
    return {
      $type: QueryDeploymentsRequest.$type,
      filters: isSet(object.filters)
        ? DeploymentFilters.fromJSON(object.filters)
        : undefined,
      pagination: isSet(object.pagination)
        ? PageRequest.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: QueryDeploymentsRequest): unknown {
    const obj: any = {};
    message.filters !== undefined &&
      (obj.filters = message.filters
        ? DeploymentFilters.toJSON(message.filters)
        : undefined);
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryDeploymentsRequest>, I>>(
    object: I
  ): QueryDeploymentsRequest {
    const message = createBaseQueryDeploymentsRequest();
    message.filters =
      object.filters !== undefined && object.filters !== null
        ? DeploymentFilters.fromPartial(object.filters)
        : undefined;
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(QueryDeploymentsRequest.$type, QueryDeploymentsRequest);

function createBaseQueryDeploymentsResponse(): QueryDeploymentsResponse {
  return {
    $type: "akash.deployment.v1beta1.QueryDeploymentsResponse",
    deployments: [],
    pagination: undefined,
  };
}

export const QueryDeploymentsResponse = {
  $type: "akash.deployment.v1beta1.QueryDeploymentsResponse" as const,

  encode(
    message: QueryDeploymentsResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.deployments) {
      QueryDeploymentResponse.encode(v!, writer.uint32(10).fork()).ldelim();
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
  ): QueryDeploymentsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDeploymentsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.deployments.push(
            QueryDeploymentResponse.decode(reader, reader.uint32())
          );
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

  fromJSON(object: any): QueryDeploymentsResponse {
    return {
      $type: QueryDeploymentsResponse.$type,
      deployments: Array.isArray(object?.deployments)
        ? object.deployments.map((e: any) =>
            QueryDeploymentResponse.fromJSON(e)
          )
        : [],
      pagination: isSet(object.pagination)
        ? PageResponse.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: QueryDeploymentsResponse): unknown {
    const obj: any = {};
    if (message.deployments) {
      obj.deployments = message.deployments.map((e) =>
        e ? QueryDeploymentResponse.toJSON(e) : undefined
      );
    } else {
      obj.deployments = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryDeploymentsResponse>, I>>(
    object: I
  ): QueryDeploymentsResponse {
    const message = createBaseQueryDeploymentsResponse();
    message.deployments =
      object.deployments?.map((e) => QueryDeploymentResponse.fromPartial(e)) ||
      [];
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(
  QueryDeploymentsResponse.$type,
  QueryDeploymentsResponse
);

function createBaseQueryDeploymentRequest(): QueryDeploymentRequest {
  return {
    $type: "akash.deployment.v1beta1.QueryDeploymentRequest",
    id: undefined,
  };
}

export const QueryDeploymentRequest = {
  $type: "akash.deployment.v1beta1.QueryDeploymentRequest" as const,

  encode(
    message: QueryDeploymentRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== undefined) {
      DeploymentID.encode(message.id, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryDeploymentRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDeploymentRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = DeploymentID.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryDeploymentRequest {
    return {
      $type: QueryDeploymentRequest.$type,
      id: isSet(object.id) ? DeploymentID.fromJSON(object.id) : undefined,
    };
  },

  toJSON(message: QueryDeploymentRequest): unknown {
    const obj: any = {};
    message.id !== undefined &&
      (obj.id = message.id ? DeploymentID.toJSON(message.id) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryDeploymentRequest>, I>>(
    object: I
  ): QueryDeploymentRequest {
    const message = createBaseQueryDeploymentRequest();
    message.id =
      object.id !== undefined && object.id !== null
        ? DeploymentID.fromPartial(object.id)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(QueryDeploymentRequest.$type, QueryDeploymentRequest);

function createBaseQueryDeploymentResponse(): QueryDeploymentResponse {
  return {
    $type: "akash.deployment.v1beta1.QueryDeploymentResponse",
    deployment: undefined,
    groups: [],
    escrowAccount: undefined,
  };
}

export const QueryDeploymentResponse = {
  $type: "akash.deployment.v1beta1.QueryDeploymentResponse" as const,

  encode(
    message: QueryDeploymentResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
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

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryDeploymentResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDeploymentResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.deployment = Deployment.decode(reader, reader.uint32());
          break;
        case 2:
          message.groups.push(Group.decode(reader, reader.uint32()));
          break;
        case 3:
          message.escrowAccount = Account.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryDeploymentResponse {
    return {
      $type: QueryDeploymentResponse.$type,
      deployment: isSet(object.deployment)
        ? Deployment.fromJSON(object.deployment)
        : undefined,
      groups: Array.isArray(object?.groups)
        ? object.groups.map((e: any) => Group.fromJSON(e))
        : [],
      escrowAccount: isSet(object.escrowAccount)
        ? Account.fromJSON(object.escrowAccount)
        : undefined,
    };
  },

  toJSON(message: QueryDeploymentResponse): unknown {
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
    message.escrowAccount !== undefined &&
      (obj.escrowAccount = message.escrowAccount
        ? Account.toJSON(message.escrowAccount)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryDeploymentResponse>, I>>(
    object: I
  ): QueryDeploymentResponse {
    const message = createBaseQueryDeploymentResponse();
    message.deployment =
      object.deployment !== undefined && object.deployment !== null
        ? Deployment.fromPartial(object.deployment)
        : undefined;
    message.groups = object.groups?.map((e) => Group.fromPartial(e)) || [];
    message.escrowAccount =
      object.escrowAccount !== undefined && object.escrowAccount !== null
        ? Account.fromPartial(object.escrowAccount)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(QueryDeploymentResponse.$type, QueryDeploymentResponse);

function createBaseQueryGroupRequest(): QueryGroupRequest {
  return { $type: "akash.deployment.v1beta1.QueryGroupRequest", id: undefined };
}

export const QueryGroupRequest = {
  $type: "akash.deployment.v1beta1.QueryGroupRequest" as const,

  encode(
    message: QueryGroupRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== undefined) {
      GroupID.encode(message.id, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGroupRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGroupRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = GroupID.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGroupRequest {
    return {
      $type: QueryGroupRequest.$type,
      id: isSet(object.id) ? GroupID.fromJSON(object.id) : undefined,
    };
  },

  toJSON(message: QueryGroupRequest): unknown {
    const obj: any = {};
    message.id !== undefined &&
      (obj.id = message.id ? GroupID.toJSON(message.id) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGroupRequest>, I>>(
    object: I
  ): QueryGroupRequest {
    const message = createBaseQueryGroupRequest();
    message.id =
      object.id !== undefined && object.id !== null
        ? GroupID.fromPartial(object.id)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(QueryGroupRequest.$type, QueryGroupRequest);

function createBaseQueryGroupResponse(): QueryGroupResponse {
  return {
    $type: "akash.deployment.v1beta1.QueryGroupResponse",
    group: undefined,
  };
}

export const QueryGroupResponse = {
  $type: "akash.deployment.v1beta1.QueryGroupResponse" as const,

  encode(
    message: QueryGroupResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.group !== undefined) {
      Group.encode(message.group, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGroupResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGroupResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.group = Group.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGroupResponse {
    return {
      $type: QueryGroupResponse.$type,
      group: isSet(object.group) ? Group.fromJSON(object.group) : undefined,
    };
  },

  toJSON(message: QueryGroupResponse): unknown {
    const obj: any = {};
    message.group !== undefined &&
      (obj.group = message.group ? Group.toJSON(message.group) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGroupResponse>, I>>(
    object: I
  ): QueryGroupResponse {
    const message = createBaseQueryGroupResponse();
    message.group =
      object.group !== undefined && object.group !== null
        ? Group.fromPartial(object.group)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(QueryGroupResponse.$type, QueryGroupResponse);

/** Query defines the gRPC querier service */
export interface Query {
  /** Deployments queries deployments */
  Deployments(
    request: QueryDeploymentsRequest
  ): Promise<QueryDeploymentsResponse>;
  /** Deployment queries deployment details */
  Deployment(request: QueryDeploymentRequest): Promise<QueryDeploymentResponse>;
  /** Group queries group details */
  Group(request: QueryGroupRequest): Promise<QueryGroupResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Deployments = this.Deployments.bind(this);
    this.Deployment = this.Deployment.bind(this);
    this.Group = this.Group.bind(this);
  }
  Deployments(
    request: QueryDeploymentsRequest
  ): Promise<QueryDeploymentsResponse> {
    const data = QueryDeploymentsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "akash.deployment.v1beta1.Query",
      "Deployments",
      data
    );
    return promise.then((data) =>
      QueryDeploymentsResponse.decode(new _m0.Reader(data))
    );
  }

  Deployment(
    request: QueryDeploymentRequest
  ): Promise<QueryDeploymentResponse> {
    const data = QueryDeploymentRequest.encode(request).finish();
    const promise = this.rpc.request(
      "akash.deployment.v1beta1.Query",
      "Deployment",
      data
    );
    return promise.then((data) =>
      QueryDeploymentResponse.decode(new _m0.Reader(data))
    );
  }

  Group(request: QueryGroupRequest): Promise<QueryGroupResponse> {
    const data = QueryGroupRequest.encode(request).finish();
    const promise = this.rpc.request(
      "akash.deployment.v1beta1.Query",
      "Group",
      data
    );
    return promise.then((data) =>
      QueryGroupResponse.decode(new _m0.Reader(data))
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
