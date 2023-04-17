/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { messageTypeRegistry } from "../../../typeRegistry";

export const protobufPackage = "akash.deployment.v1beta3";

/** Params defines the parameters for the x/deployment package */
export interface Params {
  $type: "akash.deployment.v1beta3.Params";
  deploymentMinDeposit: Coin | undefined;
}

function createBaseParams(): Params {
  return { $type: "akash.deployment.v1beta3.Params", deploymentMinDeposit: undefined };
}

export const Params = {
  $type: "akash.deployment.v1beta3.Params" as const,

  encode(message: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.deploymentMinDeposit !== undefined) {
      Coin.encode(message.deploymentMinDeposit, writer.uint32(10).fork()).ldelim();
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

          message.deploymentMinDeposit = Coin.decode(reader, reader.uint32());
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
      deploymentMinDeposit: isSet(object.deploymentMinDeposit) ? Coin.fromJSON(object.deploymentMinDeposit) : undefined,
    };
  },

  toJSON(message: Params): unknown {
    const obj: any = {};
    message.deploymentMinDeposit !== undefined &&
      (obj.deploymentMinDeposit = message.deploymentMinDeposit ? Coin.toJSON(message.deploymentMinDeposit) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<Params>, I>>(base?: I): Params {
    return Params.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Params>, I>>(object: I): Params {
    const message = createBaseParams();
    message.deploymentMinDeposit = (object.deploymentMinDeposit !== undefined && object.deploymentMinDeposit !== null)
      ? Coin.fromPartial(object.deploymentMinDeposit)
      : undefined;
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
