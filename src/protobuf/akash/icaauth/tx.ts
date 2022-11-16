/* eslint-disable */
import { messageTypeRegistry } from "../../typeRegistry";
import { Any } from "../../google/protobuf/any";
import Long from "long";
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "akash.icaauth";

/** MsgRegisterAccount defines the payload for Msg/RegisterAccount */
export interface MsgRegisterAccount {
  $type: "akash.icaauth.MsgRegisterAccount";
  owner: string;
  connectionId: string;
}

/** MsgRegisterAccountResponse defines the response for Msg/RegisterAccount */
export interface MsgRegisterAccountResponse {
  $type: "akash.icaauth.MsgRegisterAccountResponse";
}

/** MsgSubmitTx defines the payload for Msg/SubmitTx */
export interface MsgSubmitTx {
  $type: "akash.icaauth.MsgSubmitTx";
  owner: string;
  connectionId: string;
  msg?: Any;
}

/** MsgSubmitTxResponse defines the response for Msg/SubmitTx */
export interface MsgSubmitTxResponse {
  $type: "akash.icaauth.MsgSubmitTxResponse";
}

function createBaseMsgRegisterAccount(): MsgRegisterAccount {
  return {
    $type: "akash.icaauth.MsgRegisterAccount",
    owner: "",
    connectionId: "",
  };
}

export const MsgRegisterAccount = {
  $type: "akash.icaauth.MsgRegisterAccount" as const,

  encode(
    message: MsgRegisterAccount,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (message.connectionId !== "") {
      writer.uint32(18).string(message.connectionId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRegisterAccount {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRegisterAccount();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;
        case 2:
          message.connectionId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgRegisterAccount {
    return {
      $type: MsgRegisterAccount.$type,
      owner: isSet(object.owner) ? String(object.owner) : "",
      connectionId: isSet(object.connectionId)
        ? String(object.connectionId)
        : "",
    };
  },

  toJSON(message: MsgRegisterAccount): unknown {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner);
    message.connectionId !== undefined &&
      (obj.connectionId = message.connectionId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgRegisterAccount>, I>>(
    object: I
  ): MsgRegisterAccount {
    const message = createBaseMsgRegisterAccount();
    message.owner = object.owner ?? "";
    message.connectionId = object.connectionId ?? "";
    return message;
  },
};

messageTypeRegistry.set(MsgRegisterAccount.$type, MsgRegisterAccount);

function createBaseMsgRegisterAccountResponse(): MsgRegisterAccountResponse {
  return { $type: "akash.icaauth.MsgRegisterAccountResponse" };
}

export const MsgRegisterAccountResponse = {
  $type: "akash.icaauth.MsgRegisterAccountResponse" as const,

  encode(
    _: MsgRegisterAccountResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgRegisterAccountResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRegisterAccountResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgRegisterAccountResponse {
    return {
      $type: MsgRegisterAccountResponse.$type,
    };
  },

  toJSON(_: MsgRegisterAccountResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgRegisterAccountResponse>, I>>(
    _: I
  ): MsgRegisterAccountResponse {
    const message = createBaseMsgRegisterAccountResponse();
    return message;
  },
};

messageTypeRegistry.set(
  MsgRegisterAccountResponse.$type,
  MsgRegisterAccountResponse
);

function createBaseMsgSubmitTx(): MsgSubmitTx {
  return {
    $type: "akash.icaauth.MsgSubmitTx",
    owner: "",
    connectionId: "",
    msg: undefined,
  };
}

export const MsgSubmitTx = {
  $type: "akash.icaauth.MsgSubmitTx" as const,

  encode(
    message: MsgSubmitTx,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (message.connectionId !== "") {
      writer.uint32(18).string(message.connectionId);
    }
    if (message.msg !== undefined) {
      Any.encode(message.msg, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSubmitTx {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSubmitTx();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;
        case 2:
          message.connectionId = reader.string();
          break;
        case 3:
          message.msg = Any.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgSubmitTx {
    return {
      $type: MsgSubmitTx.$type,
      owner: isSet(object.owner) ? String(object.owner) : "",
      connectionId: isSet(object.connectionId)
        ? String(object.connectionId)
        : "",
      msg: isSet(object.msg) ? Any.fromJSON(object.msg) : undefined,
    };
  },

  toJSON(message: MsgSubmitTx): unknown {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner);
    message.connectionId !== undefined &&
      (obj.connectionId = message.connectionId);
    message.msg !== undefined &&
      (obj.msg = message.msg ? Any.toJSON(message.msg) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgSubmitTx>, I>>(
    object: I
  ): MsgSubmitTx {
    const message = createBaseMsgSubmitTx();
    message.owner = object.owner ?? "";
    message.connectionId = object.connectionId ?? "";
    message.msg =
      object.msg !== undefined && object.msg !== null
        ? Any.fromPartial(object.msg)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(MsgSubmitTx.$type, MsgSubmitTx);

function createBaseMsgSubmitTxResponse(): MsgSubmitTxResponse {
  return { $type: "akash.icaauth.MsgSubmitTxResponse" };
}

export const MsgSubmitTxResponse = {
  $type: "akash.icaauth.MsgSubmitTxResponse" as const,

  encode(
    _: MsgSubmitTxResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSubmitTxResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSubmitTxResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgSubmitTxResponse {
    return {
      $type: MsgSubmitTxResponse.$type,
    };
  },

  toJSON(_: MsgSubmitTxResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgSubmitTxResponse>, I>>(
    _: I
  ): MsgSubmitTxResponse {
    const message = createBaseMsgSubmitTxResponse();
    return message;
  },
};

messageTypeRegistry.set(MsgSubmitTxResponse.$type, MsgSubmitTxResponse);

/** Msg defines the icaauth Msg service. */
export interface Msg {
  /** Register defines a rpc handler for MsgRegisterAccount */
  RegisterAccount(
    request: MsgRegisterAccount
  ): Promise<MsgRegisterAccountResponse>;
  /** SubmitTx defines a rpc handler for MsgSubmitTx */
  SubmitTx(request: MsgSubmitTx): Promise<MsgSubmitTxResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.RegisterAccount = this.RegisterAccount.bind(this);
    this.SubmitTx = this.SubmitTx.bind(this);
  }
  RegisterAccount(
    request: MsgRegisterAccount
  ): Promise<MsgRegisterAccountResponse> {
    const data = MsgRegisterAccount.encode(request).finish();
    const promise = this.rpc.request(
      "akash.icaauth.Msg",
      "RegisterAccount",
      data
    );
    return promise.then((data) =>
      MsgRegisterAccountResponse.decode(new _m0.Reader(data))
    );
  }

  SubmitTx(request: MsgSubmitTx): Promise<MsgSubmitTxResponse> {
    const data = MsgSubmitTx.encode(request).finish();
    const promise = this.rpc.request("akash.icaauth.Msg", "SubmitTx", data);
    return promise.then((data) =>
      MsgSubmitTxResponse.decode(new _m0.Reader(data))
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
