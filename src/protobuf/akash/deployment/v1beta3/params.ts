/* eslint-disable */
import { messageTypeRegistry } from "../../../typeRegistry";
import Long from "long";
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "akash.deployment.v1beta3";

/** Params defines the parameters for the x/deployment package */
export interface Params {
  $type: "akash.deployment.v1beta3.Params";
  /** denom -> min deposit */
  minDeposits: { [key: string]: number };
}

export interface Params_MinDepositsEntry {
  $type: "akash.deployment.v1beta3.Params.MinDepositsEntry";
  key: string;
  value: number;
}

function createBaseParams(): Params {
  return { $type: "akash.deployment.v1beta3.Params", minDeposits: {} };
}

export const Params = {
  $type: "akash.deployment.v1beta3.Params" as const,

  encode(
    message: Params,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    Object.entries(message.minDeposits).forEach(([key, value]) => {
      Params_MinDepositsEntry.encode(
        {
          $type: "akash.deployment.v1beta3.Params.MinDepositsEntry",
          key: key as any,
          value,
        },
        writer.uint32(10).fork()
      ).ldelim();
    });
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
          const entry1 = Params_MinDepositsEntry.decode(
            reader,
            reader.uint32()
          );
          if (entry1.value !== undefined) {
            message.minDeposits[entry1.key] = entry1.value;
          }
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
      minDeposits: isObject(object.minDeposits)
        ? Object.entries(object.minDeposits).reduce<{ [key: string]: number }>(
            (acc, [key, value]) => {
              acc[key] = Number(value);
              return acc;
            },
            {}
          )
        : {},
    };
  },

  toJSON(message: Params): unknown {
    const obj: any = {};
    obj.minDeposits = {};
    if (message.minDeposits) {
      Object.entries(message.minDeposits).forEach(([k, v]) => {
        obj.minDeposits[k] = Math.round(v);
      });
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Params>, I>>(object: I): Params {
    const message = createBaseParams();
    message.minDeposits = Object.entries(object.minDeposits ?? {}).reduce<{
      [key: string]: number;
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = Number(value);
      }
      return acc;
    }, {});
    return message;
  },
};

messageTypeRegistry.set(Params.$type, Params);

function createBaseParams_MinDepositsEntry(): Params_MinDepositsEntry {
  return {
    $type: "akash.deployment.v1beta3.Params.MinDepositsEntry",
    key: "",
    value: 0,
  };
}

export const Params_MinDepositsEntry = {
  $type: "akash.deployment.v1beta3.Params.MinDepositsEntry" as const,

  encode(
    message: Params_MinDepositsEntry,
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
  ): Params_MinDepositsEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParams_MinDepositsEntry();
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

  fromJSON(object: any): Params_MinDepositsEntry {
    return {
      $type: Params_MinDepositsEntry.$type,
      key: isSet(object.key) ? String(object.key) : "",
      value: isSet(object.value) ? Number(object.value) : 0,
    };
  },

  toJSON(message: Params_MinDepositsEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = Math.round(message.value));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Params_MinDepositsEntry>, I>>(
    object: I
  ): Params_MinDepositsEntry {
    const message = createBaseParams_MinDepositsEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? 0;
    return message;
  },
};

messageTypeRegistry.set(Params_MinDepositsEntry.$type, Params_MinDepositsEntry);

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
