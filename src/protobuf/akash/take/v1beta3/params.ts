/* eslint-disable */
import { messageTypeRegistry } from "../../../typeRegistry";
import Long from "long";
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "akash.take.v1beta3";

/** Params defines the parameters for the x/take package */
export interface Params {
  $type: "akash.take.v1beta3.Params";
  /** denom -> % take rate */
  denomTakeRates: { [key: string]: number };
  defaultTakeRate: number;
}

export interface Params_DenomTakeRatesEntry {
  $type: "akash.take.v1beta3.Params.DenomTakeRatesEntry";
  key: string;
  value: number;
}

function createBaseParams(): Params {
  return {
    $type: "akash.take.v1beta3.Params",
    denomTakeRates: {},
    defaultTakeRate: 0,
  };
}

export const Params = {
  $type: "akash.take.v1beta3.Params" as const,

  encode(
    message: Params,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    Object.entries(message.denomTakeRates).forEach(([key, value]) => {
      Params_DenomTakeRatesEntry.encode(
        {
          $type: "akash.take.v1beta3.Params.DenomTakeRatesEntry",
          key: key as any,
          value,
        },
        writer.uint32(10).fork()
      ).ldelim();
    });
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
          const entry1 = Params_DenomTakeRatesEntry.decode(
            reader,
            reader.uint32()
          );
          if (entry1.value !== undefined) {
            message.denomTakeRates[entry1.key] = entry1.value;
          }
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
      denomTakeRates: isObject(object.denomTakeRates)
        ? Object.entries(object.denomTakeRates).reduce<{
            [key: string]: number;
          }>((acc, [key, value]) => {
            acc[key] = Number(value);
            return acc;
          }, {})
        : {},
      defaultTakeRate: isSet(object.defaultTakeRate)
        ? Number(object.defaultTakeRate)
        : 0,
    };
  },

  toJSON(message: Params): unknown {
    const obj: any = {};
    obj.denomTakeRates = {};
    if (message.denomTakeRates) {
      Object.entries(message.denomTakeRates).forEach(([k, v]) => {
        obj.denomTakeRates[k] = Math.round(v);
      });
    }
    message.defaultTakeRate !== undefined &&
      (obj.defaultTakeRate = Math.round(message.defaultTakeRate));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Params>, I>>(object: I): Params {
    const message = createBaseParams();
    message.denomTakeRates = Object.entries(
      object.denomTakeRates ?? {}
    ).reduce<{ [key: string]: number }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = Number(value);
      }
      return acc;
    }, {});
    message.defaultTakeRate = object.defaultTakeRate ?? 0;
    return message;
  },
};

messageTypeRegistry.set(Params.$type, Params);

function createBaseParams_DenomTakeRatesEntry(): Params_DenomTakeRatesEntry {
  return {
    $type: "akash.take.v1beta3.Params.DenomTakeRatesEntry",
    key: "",
    value: 0,
  };
}

export const Params_DenomTakeRatesEntry = {
  $type: "akash.take.v1beta3.Params.DenomTakeRatesEntry" as const,

  encode(
    message: Params_DenomTakeRatesEntry,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== 0) {
      writer.uint32(16).uint32(message.value);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): Params_DenomTakeRatesEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParams_DenomTakeRatesEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.value = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Params_DenomTakeRatesEntry {
    return {
      $type: Params_DenomTakeRatesEntry.$type,
      key: isSet(object.key) ? String(object.key) : "",
      value: isSet(object.value) ? Number(object.value) : 0,
    };
  },

  toJSON(message: Params_DenomTakeRatesEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = Math.round(message.value));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Params_DenomTakeRatesEntry>, I>>(
    object: I
  ): Params_DenomTakeRatesEntry {
    const message = createBaseParams_DenomTakeRatesEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? 0;
    return message;
  },
};

messageTypeRegistry.set(
  Params_DenomTakeRatesEntry.$type,
  Params_DenomTakeRatesEntry
);

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

function isObject(value: any): boolean {
  return typeof value === "object" && value !== null;
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
