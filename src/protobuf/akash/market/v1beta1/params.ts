/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Coin } from "../../../cosmos/base/v1beta1/coin";

export const protobufPackage = "akash.market.v1beta1";

/** Params is the params for the x/market module */
export interface Params {
  bidMinDeposit?: Coin;
  orderMaxBids: number;
}

const baseParams: object = { orderMaxBids: 0 };

export const Params = {
  encode(
    message: Params,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.bidMinDeposit !== undefined) {
      Coin.encode(message.bidMinDeposit, writer.uint32(10).fork()).ldelim();
    }
    if (message.orderMaxBids !== 0) {
      writer.uint32(16).uint32(message.orderMaxBids);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Params {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseParams } as Params;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.bidMinDeposit = Coin.decode(reader, reader.uint32());
          break;
        case 2:
          message.orderMaxBids = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Params {
    const message = { ...baseParams } as Params;
    if (object.bidMinDeposit !== undefined && object.bidMinDeposit !== null) {
      message.bidMinDeposit = Coin.fromJSON(object.bidMinDeposit);
    } else {
      message.bidMinDeposit = undefined;
    }
    if (object.orderMaxBids !== undefined && object.orderMaxBids !== null) {
      message.orderMaxBids = Number(object.orderMaxBids);
    } else {
      message.orderMaxBids = 0;
    }
    return message;
  },

  toJSON(message: Params): unknown {
    const obj: any = {};
    message.bidMinDeposit !== undefined &&
      (obj.bidMinDeposit = message.bidMinDeposit
        ? Coin.toJSON(message.bidMinDeposit)
        : undefined);
    message.orderMaxBids !== undefined &&
      (obj.orderMaxBids = message.orderMaxBids);
    return obj;
  },

  fromPartial(object: DeepPartial<Params>): Params {
    const message = { ...baseParams } as Params;
    if (object.bidMinDeposit !== undefined && object.bidMinDeposit !== null) {
      message.bidMinDeposit = Coin.fromPartial(object.bidMinDeposit);
    } else {
      message.bidMinDeposit = undefined;
    }
    if (object.orderMaxBids !== undefined && object.orderMaxBids !== null) {
      message.orderMaxBids = object.orderMaxBids;
    } else {
      message.orderMaxBids = 0;
    }
    return message;
  },
};

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
