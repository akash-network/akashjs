/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { messageTypeRegistry } from "../../../typeRegistry";

export const protobufPackage = "akash.inflation.v1beta3";

/** Params defines the parameters for the x/deployment package */
export interface Params {
  $type: "akash.inflation.v1beta3.Params";
  /** InflationDecayFactor is the number of years it takes inflation to halve. */
  inflationDecayFactor: string;
  /**
   * InitialInflation is the rate at which inflation starts at genesis.
   * It is a decimal value in the range [0.0, 100.0].
   */
  initialInflation: string;
  /**
   * Variance defines the fraction by which inflation can vary from ideal inflation in a block.
   * It is a decimal value in the range [0.0, 1.0].
   */
  variance: string;
}

function createBaseParams(): Params {
  return { $type: "akash.inflation.v1beta3.Params", inflationDecayFactor: "", initialInflation: "", variance: "" };
}

export const Params = {
  $type: "akash.inflation.v1beta3.Params" as const,

  encode(message: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.inflationDecayFactor !== "") {
      writer.uint32(10).string(message.inflationDecayFactor);
    }
    if (message.initialInflation !== "") {
      writer.uint32(18).string(message.initialInflation);
    }
    if (message.variance !== "") {
      writer.uint32(26).string(message.variance);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Params {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.inflationDecayFactor = reader.string();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.initialInflation = reader.string();
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.variance = reader.string();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Params {
    return {
      $type: Params.$type,
      inflationDecayFactor: isSet(object.inflationDecayFactor) ? String(object.inflationDecayFactor) : "",
      initialInflation: isSet(object.initialInflation) ? String(object.initialInflation) : "",
      variance: isSet(object.variance) ? String(object.variance) : "",
    };
  },

  toJSON(message: Params): unknown {
    const obj: any = {};
    message.inflationDecayFactor !== undefined && (obj.inflationDecayFactor = message.inflationDecayFactor);
    message.initialInflation !== undefined && (obj.initialInflation = message.initialInflation);
    message.variance !== undefined && (obj.variance = message.variance);
    return obj;
  },

  create<I extends Exact<DeepPartial<Params>, I>>(base?: I): Params {
    return Params.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Params>, I>>(object: I): Params {
    const message = createBaseParams();
    message.inflationDecayFactor = object.inflationDecayFactor ?? "";
    message.initialInflation = object.initialInflation ?? "";
    message.variance = object.variance ?? "";
    return message;
  },
};

messageTypeRegistry.set(Params.$type, Params);

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
