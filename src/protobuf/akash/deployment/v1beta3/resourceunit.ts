/* eslint-disable */
import { messageTypeRegistry } from "../../../typeRegistry";
import Long from "long";
import { Resources } from "../../base/v1beta3/resources";
import { DecCoin } from "../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "akash.deployment.v1beta3";

/** ResourceUnit extends Resources and adds Count along with the Price */
export interface ResourceUnit {
  $type: "akash.deployment.v1beta3.ResourceUnit";
  resource: Resources | undefined;
  count: number;
  price: DecCoin | undefined;
}

function createBaseResourceUnit(): ResourceUnit {
  return {
    $type: "akash.deployment.v1beta3.ResourceUnit",
    resource: undefined,
    count: 0,
    price: undefined,
  };
}

export const ResourceUnit = {
  $type: "akash.deployment.v1beta3.ResourceUnit" as const,

  encode(
    message: ResourceUnit,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.resource !== undefined) {
      Resources.encode(message.resource, writer.uint32(10).fork()).ldelim();
    }
    if (message.count !== 0) {
      writer.uint32(16).uint32(message.count);
    }
    if (message.price !== undefined) {
      DecCoin.encode(message.price, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ResourceUnit {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResourceUnit();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.resource = Resources.decode(reader, reader.uint32());
          break;
        case 2:
          message.count = reader.uint32();
          break;
        case 3:
          message.price = DecCoin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ResourceUnit {
    return {
      $type: ResourceUnit.$type,
      resource: isSet(object.resource)
        ? Resources.fromJSON(object.resource)
        : undefined,
      count: isSet(object.count) ? Number(object.count) : 0,
      price: isSet(object.price) ? DecCoin.fromJSON(object.price) : undefined,
    };
  },

  toJSON(message: ResourceUnit): unknown {
    const obj: any = {};
    message.resource !== undefined &&
      (obj.resource = message.resource
        ? Resources.toJSON(message.resource)
        : undefined);
    message.count !== undefined && (obj.count = Math.round(message.count));
    message.price !== undefined &&
      (obj.price = message.price ? DecCoin.toJSON(message.price) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ResourceUnit>, I>>(
    object: I
  ): ResourceUnit {
    const message = createBaseResourceUnit();
    message.resource =
      object.resource !== undefined && object.resource !== null
        ? Resources.fromPartial(object.resource)
        : undefined;
    message.count = object.count ?? 0;
    message.price =
      object.price !== undefined && object.price !== null
        ? DecCoin.fromPartial(object.price)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(ResourceUnit.$type, ResourceUnit);

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
