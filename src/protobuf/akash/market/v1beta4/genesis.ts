/* eslint-disable */
import { messageTypeRegistry } from "../../../typeRegistry";
import Long from "long";
import { Params } from "./params";
import { Order } from "./order";
import { Lease } from "./lease";
import { Bid } from "./bid";
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "akash.market.v1beta4";

/** GenesisState defines the basic genesis state used by market module */
export interface GenesisState {
  $type: "akash.market.v1beta4.GenesisState";
  params: Params | undefined;
  orders: Order[];
  leases: Lease[];
  bids: Bid[];
}

function createBaseGenesisState(): GenesisState {
  return {
    $type: "akash.market.v1beta4.GenesisState",
    params: undefined,
    orders: [],
    leases: [],
    bids: []
  };
}

export const GenesisState = {
  $type: "akash.market.v1beta4.GenesisState" as const,

  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.orders) {
      Order.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.leases) {
      Lease.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.bids) {
      Bid.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        case 2:
          message.orders.push(Order.decode(reader, reader.uint32()));
          break;
        case 3:
          message.leases.push(Lease.decode(reader, reader.uint32()));
          break;
        case 4:
          message.bids.push(Bid.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GenesisState {
    return {
      $type: GenesisState.$type,
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
      orders: Array.isArray(object?.orders) ? object.orders.map((e: any) => Order.fromJSON(e)) : [],
      leases: Array.isArray(object?.leases) ? object.leases.map((e: any) => Lease.fromJSON(e)) : [],
      bids: Array.isArray(object?.bids) ? object.bids.map((e: any) => Bid.fromJSON(e)) : []
    };
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    if (message.orders) {
      obj.orders = message.orders.map(e => (e ? Order.toJSON(e) : undefined));
    } else {
      obj.orders = [];
    }
    if (message.leases) {
      obj.leases = message.leases.map(e => (e ? Lease.toJSON(e) : undefined));
    } else {
      obj.leases = [];
    }
    if (message.bids) {
      obj.bids = message.bids.map(e => (e ? Bid.toJSON(e) : undefined));
    } else {
      obj.bids = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GenesisState>, I>>(object: I): GenesisState {
    const message = createBaseGenesisState();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    message.orders = object.orders?.map(e => Order.fromPartial(e)) || [];
    message.leases = object.leases?.map(e => Lease.fromPartial(e)) || [];
    message.bids = object.bids?.map(e => Bid.fromPartial(e)) || [];
    return message;
  }
};

messageTypeRegistry.set(GenesisState.$type, GenesisState);

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

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
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & Record<Exclude<keyof I, KeysOfUnion<P> | "$type">, never>;

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
