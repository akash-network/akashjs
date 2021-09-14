/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import {
  OrderFilters,
  OrderID,
  Order,
} from "../../../akash/market/v1beta1/order";
import {
  PageRequest,
  PageResponse,
} from "../../../cosmos/base/query/v1beta1/pagination";
import { BidFilters, BidID, Bid } from "../../../akash/market/v1beta1/bid";
import { Account, Payment } from "../../../akash/escrow/v1beta1/types";
import {
  LeaseFilters,
  LeaseID,
  Lease,
} from "../../../akash/market/v1beta1/lease";

export const protobufPackage = "akash.market.v1beta1";

/** QueryOrdersRequest is request type for the Query/Orders RPC method */
export interface QueryOrdersRequest {
  filters?: OrderFilters;
  pagination?: PageRequest;
}

/** QueryOrdersResponse is response type for the Query/Orders RPC method */
export interface QueryOrdersResponse {
  orders: Order[];
  pagination?: PageResponse;
}

/** QueryOrderRequest is request type for the Query/Order RPC method */
export interface QueryOrderRequest {
  id?: OrderID;
}

/** QueryOrderResponse is response type for the Query/Order RPC method */
export interface QueryOrderResponse {
  order?: Order;
}

/** QueryBidsRequest is request type for the Query/Bids RPC method */
export interface QueryBidsRequest {
  filters?: BidFilters;
  pagination?: PageRequest;
}

/** QueryBidsResponse is response type for the Query/Bids RPC method */
export interface QueryBidsResponse {
  bids: QueryBidResponse[];
  pagination?: PageResponse;
}

/** QueryBidRequest is request type for the Query/Bid RPC method */
export interface QueryBidRequest {
  id?: BidID;
}

/** QueryBidResponse is response type for the Query/Bid RPC method */
export interface QueryBidResponse {
  bid?: Bid;
  escrowAccount?: Account;
}

/** QueryLeasesRequest is request type for the Query/Leases RPC method */
export interface QueryLeasesRequest {
  filters?: LeaseFilters;
  pagination?: PageRequest;
}

/** QueryLeasesResponse is response type for the Query/Leases RPC method */
export interface QueryLeasesResponse {
  leases: QueryLeaseResponse[];
  pagination?: PageResponse;
}

/** QueryLeaseRequest is request type for the Query/Lease RPC method */
export interface QueryLeaseRequest {
  id?: LeaseID;
}

/** QueryLeaseResponse is response type for the Query/Lease RPC method */
export interface QueryLeaseResponse {
  lease?: Lease;
  escrowPayment?: Payment;
}

const baseQueryOrdersRequest: object = {};

export const QueryOrdersRequest = {
  encode(
    message: QueryOrdersRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.filters !== undefined) {
      OrderFilters.encode(message.filters, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryOrdersRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryOrdersRequest } as QueryOrdersRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.filters = OrderFilters.decode(reader, reader.uint32());
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

  fromJSON(object: any): QueryOrdersRequest {
    const message = { ...baseQueryOrdersRequest } as QueryOrdersRequest;
    if (object.filters !== undefined && object.filters !== null) {
      message.filters = OrderFilters.fromJSON(object.filters);
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

  toJSON(message: QueryOrdersRequest): unknown {
    const obj: any = {};
    message.filters !== undefined &&
      (obj.filters = message.filters
        ? OrderFilters.toJSON(message.filters)
        : undefined);
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryOrdersRequest>): QueryOrdersRequest {
    const message = { ...baseQueryOrdersRequest } as QueryOrdersRequest;
    if (object.filters !== undefined && object.filters !== null) {
      message.filters = OrderFilters.fromPartial(object.filters);
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

const baseQueryOrdersResponse: object = {};

export const QueryOrdersResponse = {
  encode(
    message: QueryOrdersResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.orders) {
      Order.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryOrdersResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryOrdersResponse } as QueryOrdersResponse;
    message.orders = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.orders.push(Order.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryOrdersResponse {
    const message = { ...baseQueryOrdersResponse } as QueryOrdersResponse;
    message.orders = [];
    if (object.orders !== undefined && object.orders !== null) {
      for (const e of object.orders) {
        message.orders.push(Order.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryOrdersResponse): unknown {
    const obj: any = {};
    if (message.orders) {
      obj.orders = message.orders.map((e) => (e ? Order.toJSON(e) : undefined));
    } else {
      obj.orders = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryOrdersResponse>): QueryOrdersResponse {
    const message = { ...baseQueryOrdersResponse } as QueryOrdersResponse;
    message.orders = [];
    if (object.orders !== undefined && object.orders !== null) {
      for (const e of object.orders) {
        message.orders.push(Order.fromPartial(e));
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

const baseQueryOrderRequest: object = {};

export const QueryOrderRequest = {
  encode(
    message: QueryOrderRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== undefined) {
      OrderID.encode(message.id, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryOrderRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryOrderRequest } as QueryOrderRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = OrderID.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryOrderRequest {
    const message = { ...baseQueryOrderRequest } as QueryOrderRequest;
    if (object.id !== undefined && object.id !== null) {
      message.id = OrderID.fromJSON(object.id);
    } else {
      message.id = undefined;
    }
    return message;
  },

  toJSON(message: QueryOrderRequest): unknown {
    const obj: any = {};
    message.id !== undefined &&
      (obj.id = message.id ? OrderID.toJSON(message.id) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryOrderRequest>): QueryOrderRequest {
    const message = { ...baseQueryOrderRequest } as QueryOrderRequest;
    if (object.id !== undefined && object.id !== null) {
      message.id = OrderID.fromPartial(object.id);
    } else {
      message.id = undefined;
    }
    return message;
  },
};

const baseQueryOrderResponse: object = {};

export const QueryOrderResponse = {
  encode(
    message: QueryOrderResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.order !== undefined) {
      Order.encode(message.order, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryOrderResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryOrderResponse } as QueryOrderResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.order = Order.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryOrderResponse {
    const message = { ...baseQueryOrderResponse } as QueryOrderResponse;
    if (object.order !== undefined && object.order !== null) {
      message.order = Order.fromJSON(object.order);
    } else {
      message.order = undefined;
    }
    return message;
  },

  toJSON(message: QueryOrderResponse): unknown {
    const obj: any = {};
    message.order !== undefined &&
      (obj.order = message.order ? Order.toJSON(message.order) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryOrderResponse>): QueryOrderResponse {
    const message = { ...baseQueryOrderResponse } as QueryOrderResponse;
    if (object.order !== undefined && object.order !== null) {
      message.order = Order.fromPartial(object.order);
    } else {
      message.order = undefined;
    }
    return message;
  },
};

const baseQueryBidsRequest: object = {};

export const QueryBidsRequest = {
  encode(
    message: QueryBidsRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.filters !== undefined) {
      BidFilters.encode(message.filters, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryBidsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryBidsRequest } as QueryBidsRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.filters = BidFilters.decode(reader, reader.uint32());
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

  fromJSON(object: any): QueryBidsRequest {
    const message = { ...baseQueryBidsRequest } as QueryBidsRequest;
    if (object.filters !== undefined && object.filters !== null) {
      message.filters = BidFilters.fromJSON(object.filters);
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

  toJSON(message: QueryBidsRequest): unknown {
    const obj: any = {};
    message.filters !== undefined &&
      (obj.filters = message.filters
        ? BidFilters.toJSON(message.filters)
        : undefined);
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryBidsRequest>): QueryBidsRequest {
    const message = { ...baseQueryBidsRequest } as QueryBidsRequest;
    if (object.filters !== undefined && object.filters !== null) {
      message.filters = BidFilters.fromPartial(object.filters);
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

const baseQueryBidsResponse: object = {};

export const QueryBidsResponse = {
  encode(
    message: QueryBidsResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.bids) {
      QueryBidResponse.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryBidsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryBidsResponse } as QueryBidsResponse;
    message.bids = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.bids.push(QueryBidResponse.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryBidsResponse {
    const message = { ...baseQueryBidsResponse } as QueryBidsResponse;
    message.bids = [];
    if (object.bids !== undefined && object.bids !== null) {
      for (const e of object.bids) {
        message.bids.push(QueryBidResponse.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryBidsResponse): unknown {
    const obj: any = {};
    if (message.bids) {
      obj.bids = message.bids.map((e) =>
        e ? QueryBidResponse.toJSON(e) : undefined
      );
    } else {
      obj.bids = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryBidsResponse>): QueryBidsResponse {
    const message = { ...baseQueryBidsResponse } as QueryBidsResponse;
    message.bids = [];
    if (object.bids !== undefined && object.bids !== null) {
      for (const e of object.bids) {
        message.bids.push(QueryBidResponse.fromPartial(e));
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

const baseQueryBidRequest: object = {};

export const QueryBidRequest = {
  encode(
    message: QueryBidRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== undefined) {
      BidID.encode(message.id, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryBidRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryBidRequest } as QueryBidRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = BidID.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryBidRequest {
    const message = { ...baseQueryBidRequest } as QueryBidRequest;
    if (object.id !== undefined && object.id !== null) {
      message.id = BidID.fromJSON(object.id);
    } else {
      message.id = undefined;
    }
    return message;
  },

  toJSON(message: QueryBidRequest): unknown {
    const obj: any = {};
    message.id !== undefined &&
      (obj.id = message.id ? BidID.toJSON(message.id) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryBidRequest>): QueryBidRequest {
    const message = { ...baseQueryBidRequest } as QueryBidRequest;
    if (object.id !== undefined && object.id !== null) {
      message.id = BidID.fromPartial(object.id);
    } else {
      message.id = undefined;
    }
    return message;
  },
};

const baseQueryBidResponse: object = {};

export const QueryBidResponse = {
  encode(
    message: QueryBidResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.bid !== undefined) {
      Bid.encode(message.bid, writer.uint32(10).fork()).ldelim();
    }
    if (message.escrowAccount !== undefined) {
      Account.encode(message.escrowAccount, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryBidResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryBidResponse } as QueryBidResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.bid = Bid.decode(reader, reader.uint32());
          break;
        case 2:
          message.escrowAccount = Account.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryBidResponse {
    const message = { ...baseQueryBidResponse } as QueryBidResponse;
    if (object.bid !== undefined && object.bid !== null) {
      message.bid = Bid.fromJSON(object.bid);
    } else {
      message.bid = undefined;
    }
    if (object.escrowAccount !== undefined && object.escrowAccount !== null) {
      message.escrowAccount = Account.fromJSON(object.escrowAccount);
    } else {
      message.escrowAccount = undefined;
    }
    return message;
  },

  toJSON(message: QueryBidResponse): unknown {
    const obj: any = {};
    message.bid !== undefined &&
      (obj.bid = message.bid ? Bid.toJSON(message.bid) : undefined);
    message.escrowAccount !== undefined &&
      (obj.escrowAccount = message.escrowAccount
        ? Account.toJSON(message.escrowAccount)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryBidResponse>): QueryBidResponse {
    const message = { ...baseQueryBidResponse } as QueryBidResponse;
    if (object.bid !== undefined && object.bid !== null) {
      message.bid = Bid.fromPartial(object.bid);
    } else {
      message.bid = undefined;
    }
    if (object.escrowAccount !== undefined && object.escrowAccount !== null) {
      message.escrowAccount = Account.fromPartial(object.escrowAccount);
    } else {
      message.escrowAccount = undefined;
    }
    return message;
  },
};

const baseQueryLeasesRequest: object = {};

export const QueryLeasesRequest = {
  encode(
    message: QueryLeasesRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.filters !== undefined) {
      LeaseFilters.encode(message.filters, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryLeasesRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryLeasesRequest } as QueryLeasesRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.filters = LeaseFilters.decode(reader, reader.uint32());
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

  fromJSON(object: any): QueryLeasesRequest {
    const message = { ...baseQueryLeasesRequest } as QueryLeasesRequest;
    if (object.filters !== undefined && object.filters !== null) {
      message.filters = LeaseFilters.fromJSON(object.filters);
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

  toJSON(message: QueryLeasesRequest): unknown {
    const obj: any = {};
    message.filters !== undefined &&
      (obj.filters = message.filters
        ? LeaseFilters.toJSON(message.filters)
        : undefined);
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryLeasesRequest>): QueryLeasesRequest {
    const message = { ...baseQueryLeasesRequest } as QueryLeasesRequest;
    if (object.filters !== undefined && object.filters !== null) {
      message.filters = LeaseFilters.fromPartial(object.filters);
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

const baseQueryLeasesResponse: object = {};

export const QueryLeasesResponse = {
  encode(
    message: QueryLeasesResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.leases) {
      QueryLeaseResponse.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryLeasesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryLeasesResponse } as QueryLeasesResponse;
    message.leases = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.leases.push(
            QueryLeaseResponse.decode(reader, reader.uint32())
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

  fromJSON(object: any): QueryLeasesResponse {
    const message = { ...baseQueryLeasesResponse } as QueryLeasesResponse;
    message.leases = [];
    if (object.leases !== undefined && object.leases !== null) {
      for (const e of object.leases) {
        message.leases.push(QueryLeaseResponse.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryLeasesResponse): unknown {
    const obj: any = {};
    if (message.leases) {
      obj.leases = message.leases.map((e) =>
        e ? QueryLeaseResponse.toJSON(e) : undefined
      );
    } else {
      obj.leases = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryLeasesResponse>): QueryLeasesResponse {
    const message = { ...baseQueryLeasesResponse } as QueryLeasesResponse;
    message.leases = [];
    if (object.leases !== undefined && object.leases !== null) {
      for (const e of object.leases) {
        message.leases.push(QueryLeaseResponse.fromPartial(e));
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

const baseQueryLeaseRequest: object = {};

export const QueryLeaseRequest = {
  encode(
    message: QueryLeaseRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== undefined) {
      LeaseID.encode(message.id, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryLeaseRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryLeaseRequest } as QueryLeaseRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = LeaseID.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryLeaseRequest {
    const message = { ...baseQueryLeaseRequest } as QueryLeaseRequest;
    if (object.id !== undefined && object.id !== null) {
      message.id = LeaseID.fromJSON(object.id);
    } else {
      message.id = undefined;
    }
    return message;
  },

  toJSON(message: QueryLeaseRequest): unknown {
    const obj: any = {};
    message.id !== undefined &&
      (obj.id = message.id ? LeaseID.toJSON(message.id) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryLeaseRequest>): QueryLeaseRequest {
    const message = { ...baseQueryLeaseRequest } as QueryLeaseRequest;
    if (object.id !== undefined && object.id !== null) {
      message.id = LeaseID.fromPartial(object.id);
    } else {
      message.id = undefined;
    }
    return message;
  },
};

const baseQueryLeaseResponse: object = {};

export const QueryLeaseResponse = {
  encode(
    message: QueryLeaseResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.lease !== undefined) {
      Lease.encode(message.lease, writer.uint32(10).fork()).ldelim();
    }
    if (message.escrowPayment !== undefined) {
      Payment.encode(message.escrowPayment, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryLeaseResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryLeaseResponse } as QueryLeaseResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.lease = Lease.decode(reader, reader.uint32());
          break;
        case 2:
          message.escrowPayment = Payment.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryLeaseResponse {
    const message = { ...baseQueryLeaseResponse } as QueryLeaseResponse;
    if (object.lease !== undefined && object.lease !== null) {
      message.lease = Lease.fromJSON(object.lease);
    } else {
      message.lease = undefined;
    }
    if (object.escrowPayment !== undefined && object.escrowPayment !== null) {
      message.escrowPayment = Payment.fromJSON(object.escrowPayment);
    } else {
      message.escrowPayment = undefined;
    }
    return message;
  },

  toJSON(message: QueryLeaseResponse): unknown {
    const obj: any = {};
    message.lease !== undefined &&
      (obj.lease = message.lease ? Lease.toJSON(message.lease) : undefined);
    message.escrowPayment !== undefined &&
      (obj.escrowPayment = message.escrowPayment
        ? Payment.toJSON(message.escrowPayment)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryLeaseResponse>): QueryLeaseResponse {
    const message = { ...baseQueryLeaseResponse } as QueryLeaseResponse;
    if (object.lease !== undefined && object.lease !== null) {
      message.lease = Lease.fromPartial(object.lease);
    } else {
      message.lease = undefined;
    }
    if (object.escrowPayment !== undefined && object.escrowPayment !== null) {
      message.escrowPayment = Payment.fromPartial(object.escrowPayment);
    } else {
      message.escrowPayment = undefined;
    }
    return message;
  },
};

/** Query defines the gRPC querier service */
export interface Query {
  /** Orders queries orders with filters */
  Orders(request: QueryOrdersRequest): Promise<QueryOrdersResponse>;
  /** Order queries order details */
  Order(request: QueryOrderRequest): Promise<QueryOrderResponse>;
  /** Bids queries bids with filters */
  Bids(request: QueryBidsRequest): Promise<QueryBidsResponse>;
  /** Bid queries bid details */
  Bid(request: QueryBidRequest): Promise<QueryBidResponse>;
  /** Leases queries leases with filters */
  Leases(request: QueryLeasesRequest): Promise<QueryLeasesResponse>;
  /** Lease queries lease details */
  Lease(request: QueryLeaseRequest): Promise<QueryLeaseResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Orders = this.Orders.bind(this);
    this.Order = this.Order.bind(this);
    this.Bids = this.Bids.bind(this);
    this.Bid = this.Bid.bind(this);
    this.Leases = this.Leases.bind(this);
    this.Lease = this.Lease.bind(this);
  }
  Orders(request: QueryOrdersRequest): Promise<QueryOrdersResponse> {
    const data = QueryOrdersRequest.encode(request).finish();
    const promise = this.rpc.request(
      "akash.market.v1beta1.Query",
      "Orders",
      data
    );
    return promise.then((data) =>
      QueryOrdersResponse.decode(new _m0.Reader(data))
    );
  }

  Order(request: QueryOrderRequest): Promise<QueryOrderResponse> {
    const data = QueryOrderRequest.encode(request).finish();
    const promise = this.rpc.request(
      "akash.market.v1beta1.Query",
      "Order",
      data
    );
    return promise.then((data) =>
      QueryOrderResponse.decode(new _m0.Reader(data))
    );
  }

  Bids(request: QueryBidsRequest): Promise<QueryBidsResponse> {
    const data = QueryBidsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "akash.market.v1beta1.Query",
      "Bids",
      data
    );
    return promise.then((data) =>
      QueryBidsResponse.decode(new _m0.Reader(data))
    );
  }

  Bid(request: QueryBidRequest): Promise<QueryBidResponse> {
    const data = QueryBidRequest.encode(request).finish();
    const promise = this.rpc.request("akash.market.v1beta1.Query", "Bid", data);
    return promise.then((data) =>
      QueryBidResponse.decode(new _m0.Reader(data))
    );
  }

  Leases(request: QueryLeasesRequest): Promise<QueryLeasesResponse> {
    const data = QueryLeasesRequest.encode(request).finish();
    const promise = this.rpc.request(
      "akash.market.v1beta1.Query",
      "Leases",
      data
    );
    return promise.then((data) =>
      QueryLeasesResponse.decode(new _m0.Reader(data))
    );
  }

  Lease(request: QueryLeaseRequest): Promise<QueryLeaseResponse> {
    const data = QueryLeaseRequest.encode(request).finish();
    const promise = this.rpc.request(
      "akash.market.v1beta1.Query",
      "Lease",
      data
    );
    return promise.then((data) =>
      QueryLeaseResponse.decode(new _m0.Reader(data))
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
