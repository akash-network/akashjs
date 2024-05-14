/* eslint-disable */
import { messageTypeRegistry } from "../../../typeRegistry";
import Long from "long";
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "akash.deployment.v1beta3";

/** Params defines the parameters for the x/deployment package */
export interface Params {
  $type: "akash.deployment.v1beta3.Params";
  minDeposits: Coin[];
}

function createBaseParams(): Params {
  return { $type: "akash.deployment.v1beta3.Params", minDeposits: [] };
}

export const Params = {
  $type: "akash.deployment.v1beta3.Params" as const,

  encode(message: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.minDeposits) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Params {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.minDeposits.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Params {
    return {
      $type: Params.$type,
      minDeposits: Array.isArray(object?.minDeposits) ? object.minDeposits.map((e: any) => Coin.fromJSON(e)) : []
    };
  },

  toJSON(message: Params): unknown {
    const obj: any = {};
    if (message.minDeposits) {
      obj.minDeposits = message.minDeposits.map(e => (e ? Coin.toJSON(e) : undefined));
    } else {
      obj.minDeposits = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Params>, I>>(object: I): Params {
    const message = createBaseParams();
    message.minDeposits = object.minDeposits?.map(e => Coin.fromPartial(e)) || [];
    return message;
  }
};

messageTypeRegistry.set(Params.$type, Params);

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
