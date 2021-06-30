/* eslint-disable */
import { util, configure, Reader, Writer } from "protobufjs/minimal";
import * as Long from "long";
import {
  DeploymentFilters,
  DeploymentID,
  Deployment,
} from "./akash/deployment/v1beta1/deployment";
import {
  PageRequest,
  PageResponse,
} from "./cosmos/base/query/v1beta1/pagination";
import { Group, GroupID } from "./akash/deployment/v1beta1/group";
import { Account } from "./akash/escrow/v1beta1/types";

export const protobufPackage = "akash.deployment.v1beta1";

/** QueryDeploymentsRequest is request type for the Query/Deployments RPC method */
export interface QueryDeploymentsRequest {
  filters: DeploymentFilters | undefined;
  pagination: PageRequest | undefined;
}

/** QueryDeploymentsResponse is response type for the Query/Deployments RPC method */
export interface QueryDeploymentsResponse {
  deployments: QueryDeploymentResponse[];
  pagination: PageResponse | undefined;
}

/** QueryDeploymentRequest is request type for the Query/Deployment RPC method */
export interface QueryDeploymentRequest {
  id: DeploymentID | undefined;
}

/** QueryDeploymentResponse is response type for the Query/Deployment RPC method */
export interface QueryDeploymentResponse {
  deployment: Deployment | undefined;
  groups: Group[];
  escrowAccount: Account | undefined;
}

/** QueryGroupRequest is request type for the Query/Group RPC method */
export interface QueryGroupRequest {
  id: GroupID | undefined;
}

/** QueryGroupResponse is response type for the Query/Group RPC method */
export interface QueryGroupResponse {
  group: Group | undefined;
}

const baseQueryDeploymentsRequest: object = {};

export const QueryDeploymentsRequest = {
  encode(
    message: QueryDeploymentsRequest,
    writer: Writer = Writer.create()
  ): Writer {
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

  decode(input: Reader | Uint8Array, length?: number): QueryDeploymentsRequest {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryDeploymentsRequest,
    } as QueryDeploymentsRequest;
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
    const message = {
      ...baseQueryDeploymentsRequest,
    } as QueryDeploymentsRequest;
    if (object.filters !== undefined && object.filters !== null) {
      message.filters = DeploymentFilters.fromJSON(object.filters);
    } else {
      message.filters = undefined;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
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

  fromPartial(
    object: DeepPartial<QueryDeploymentsRequest>
  ): QueryDeploymentsRequest {
    const message = {
      ...baseQueryDeploymentsRequest,
    } as QueryDeploymentsRequest;
    if (object.filters !== undefined && object.filters !== null) {
      message.filters = DeploymentFilters.fromPartial(object.filters);
    } else {
      message.filters = undefined;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryDeploymentsResponse: object = {};

export const QueryDeploymentsResponse = {
  encode(
    message: QueryDeploymentsResponse,
    writer: Writer = Writer.create()
  ): Writer {
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
    input: Reader | Uint8Array,
    length?: number
  ): QueryDeploymentsResponse {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryDeploymentsResponse,
    } as QueryDeploymentsResponse;
    message.deployments = [];
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
    const message = {
      ...baseQueryDeploymentsResponse,
    } as QueryDeploymentsResponse;
    message.deployments = [];
    if (object.deployments !== undefined && object.deployments !== null) {
      for (const e of object.deployments) {
        message.deployments.push(QueryDeploymentResponse.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
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

  fromPartial(
    object: DeepPartial<QueryDeploymentsResponse>
  ): QueryDeploymentsResponse {
    const message = {
      ...baseQueryDeploymentsResponse,
    } as QueryDeploymentsResponse;
    message.deployments = [];
    if (object.deployments !== undefined && object.deployments !== null) {
      for (const e of object.deployments) {
        message.deployments.push(QueryDeploymentResponse.fromPartial(e));
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

const baseQueryDeploymentRequest: object = {};

export const QueryDeploymentRequest = {
  encode(
    message: QueryDeploymentRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.id !== undefined) {
      DeploymentID.encode(message.id, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryDeploymentRequest {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryDeploymentRequest } as QueryDeploymentRequest;
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
    const message = { ...baseQueryDeploymentRequest } as QueryDeploymentRequest;
    if (object.id !== undefined && object.id !== null) {
      message.id = DeploymentID.fromJSON(object.id);
    } else {
      message.id = undefined;
    }
    return message;
  },

  toJSON(message: QueryDeploymentRequest): unknown {
    const obj: any = {};
    message.id !== undefined &&
      (obj.id = message.id ? DeploymentID.toJSON(message.id) : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryDeploymentRequest>
  ): QueryDeploymentRequest {
    const message = { ...baseQueryDeploymentRequest } as QueryDeploymentRequest;
    if (object.id !== undefined && object.id !== null) {
      message.id = DeploymentID.fromPartial(object.id);
    } else {
      message.id = undefined;
    }
    return message;
  },
};

const baseQueryDeploymentResponse: object = {};

export const QueryDeploymentResponse = {
  encode(
    message: QueryDeploymentResponse,
    writer: Writer = Writer.create()
  ): Writer {
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

  decode(input: Reader | Uint8Array, length?: number): QueryDeploymentResponse {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryDeploymentResponse,
    } as QueryDeploymentResponse;
    message.groups = [];
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
    const message = {
      ...baseQueryDeploymentResponse,
    } as QueryDeploymentResponse;
    message.groups = [];
    if (object.deployment !== undefined && object.deployment !== null) {
      message.deployment = Deployment.fromJSON(object.deployment);
    } else {
      message.deployment = undefined;
    }
    if (object.groups !== undefined && object.groups !== null) {
      for (const e of object.groups) {
        message.groups.push(Group.fromJSON(e));
      }
    }
    if (object.escrowAccount !== undefined && object.escrowAccount !== null) {
      message.escrowAccount = Account.fromJSON(object.escrowAccount);
    } else {
      message.escrowAccount = undefined;
    }
    return message;
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

  fromPartial(
    object: DeepPartial<QueryDeploymentResponse>
  ): QueryDeploymentResponse {
    const message = {
      ...baseQueryDeploymentResponse,
    } as QueryDeploymentResponse;
    message.groups = [];
    if (object.deployment !== undefined && object.deployment !== null) {
      message.deployment = Deployment.fromPartial(object.deployment);
    } else {
      message.deployment = undefined;
    }
    if (object.groups !== undefined && object.groups !== null) {
      for (const e of object.groups) {
        message.groups.push(Group.fromPartial(e));
      }
    }
    if (object.escrowAccount !== undefined && object.escrowAccount !== null) {
      message.escrowAccount = Account.fromPartial(object.escrowAccount);
    } else {
      message.escrowAccount = undefined;
    }
    return message;
  },
};

const baseQueryGroupRequest: object = {};

export const QueryGroupRequest = {
  encode(message: QueryGroupRequest, writer: Writer = Writer.create()): Writer {
    if (message.id !== undefined) {
      GroupID.encode(message.id, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGroupRequest {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryGroupRequest } as QueryGroupRequest;
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
    const message = { ...baseQueryGroupRequest } as QueryGroupRequest;
    if (object.id !== undefined && object.id !== null) {
      message.id = GroupID.fromJSON(object.id);
    } else {
      message.id = undefined;
    }
    return message;
  },

  toJSON(message: QueryGroupRequest): unknown {
    const obj: any = {};
    message.id !== undefined &&
      (obj.id = message.id ? GroupID.toJSON(message.id) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryGroupRequest>): QueryGroupRequest {
    const message = { ...baseQueryGroupRequest } as QueryGroupRequest;
    if (object.id !== undefined && object.id !== null) {
      message.id = GroupID.fromPartial(object.id);
    } else {
      message.id = undefined;
    }
    return message;
  },
};

const baseQueryGroupResponse: object = {};

export const QueryGroupResponse = {
  encode(
    message: QueryGroupResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.group !== undefined) {
      Group.encode(message.group, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGroupResponse {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryGroupResponse } as QueryGroupResponse;
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
    const message = { ...baseQueryGroupResponse } as QueryGroupResponse;
    if (object.group !== undefined && object.group !== null) {
      message.group = Group.fromJSON(object.group);
    } else {
      message.group = undefined;
    }
    return message;
  },

  toJSON(message: QueryGroupResponse): unknown {
    const obj: any = {};
    message.group !== undefined &&
      (obj.group = message.group ? Group.toJSON(message.group) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryGroupResponse>): QueryGroupResponse {
    const message = { ...baseQueryGroupResponse } as QueryGroupResponse;
    if (object.group !== undefined && object.group !== null) {
      message.group = Group.fromPartial(object.group);
    } else {
      message.group = undefined;
    }
    return message;
  },
};

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
      QueryDeploymentsResponse.decode(new Reader(data))
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
      QueryDeploymentResponse.decode(new Reader(data))
    );
  }

  Group(request: QueryGroupRequest): Promise<QueryGroupResponse> {
    const data = QueryGroupRequest.encode(request).finish();
    const promise = this.rpc.request(
      "akash.deployment.v1beta1.Query",
      "Group",
      data
    );
    return promise.then((data) => QueryGroupResponse.decode(new Reader(data)));
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
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;
