/* eslint-disable */
import { messageTypeRegistry } from "../../../typeRegistry";
import Long from "long";
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "akash.take.v1beta3";

/** DenomTakeRate describes take rate for specified denom */
export interface DenomTakeRate {
  $type: "akash.take.v1beta3.DenomTakeRate";
  denom: string;
  rate: number;
}

/** Params defines the parameters for the x/take package */
export interface Params {
  $type: "akash.take.v1beta3.Params";
  /** denom -> % take rate */
  denomTakeRates: DenomTakeRate[];
  defaultTakeRate: number;
}

function createBaseDenomTakeRate(): DenomTakeRate {
  return { $type: "akash.take.v1beta3.DenomTakeRate", denom: "", rate: 0 };
}

export const DenomTakeRate = {
  $type: "akash.take.v1beta3.DenomTakeRate" as const,

  encode(
    message: DenomTakeRate,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    if (message.rate !== 0) {
      writer.uint32(16).uint32(message.rate);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DenomTakeRate {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDenomTakeRate();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;
        case 2:
          message.rate = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DenomTakeRate {
    return {
      $type: DenomTakeRate.$type,
      denom: isSet(object.denom) ? String(object.denom) : "",
      rate: isSet(object.rate) ? Number(object.rate) : 0,
    };
  },

  toJSON(message: DenomTakeRate): unknown {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    message.rate !== undefined && (obj.rate = Math.round(message.rate));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DenomTakeRate>, I>>(
    object: I
  ): DenomTakeRate {
    const message = createBaseDenomTakeRate();
    message.denom = object.denom ?? "";
    message.rate = object.rate ?? 0;
    return message;
  },
};

messageTypeRegistry.set(DenomTakeRate.$type, DenomTakeRate);

function createBaseParams(): Params {
  return {
    $type: "akash.take.v1beta3.Params",
    denomTakeRates: [],
    defaultTakeRate: 0,
  };
}

export const Params = {
  $type: "akash.take.v1beta3.Params" as const,

  encode(
    message: Params,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.denomTakeRates) {
      DenomTakeRate.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.defaultTakeRate !== 0) {
      writer.uint32(16).uint32(message.defaultTakeRate);
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
          message.denomTakeRates.push(
            DenomTakeRate.decode(reader, reader.uint32())
          );
          break;
        case 2:
          message.defaultTakeRate = reader.uint32();
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
      denomTakeRates: Array.isArray(object?.denomTakeRates)
        ? object.denomTakeRates.map((e: any) => DenomTakeRate.fromJSON(e))
        : [],
      defaultTakeRate: isSet(object.defaultTakeRate)
        ? Number(object.defaultTakeRate)
        : 0,
    };
  },

  toJSON(message: Params): unknown {
    const obj: any = {};
    if (message.denomTakeRates) {
      obj.denomTakeRates = message.denomTakeRates.map((e) =>
        e ? DenomTakeRate.toJSON(e) : undefined
      );
    } else {
      obj.denomTakeRates = [];
    }
    message.defaultTakeRate !== undefined &&
      (obj.defaultTakeRate = Math.round(message.defaultTakeRate));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Params>, I>>(object: I): Params {
    const message = createBaseParams();
    message.denomTakeRates =
      object.denomTakeRates?.map((e) => DenomTakeRate.fromPartial(e)) || [];
    message.defaultTakeRate = object.defaultTakeRate ?? 0;
    return message;
  },
};

messageTypeRegistry.set(Params.$type, Params);

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
