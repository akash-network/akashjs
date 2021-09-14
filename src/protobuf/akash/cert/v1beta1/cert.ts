/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "akash.cert.v1beta1";

/** CertificateID stores owner and sequence number */
export interface CertificateID {
  owner: string;
  serial: string;
}

/** Certificate stores state, certificate and it's public key */
export interface Certificate {
  state: Certificate_State;
  cert: Uint8Array;
  pubkey: Uint8Array;
}

/** State is an enum which refers to state of deployment */
export enum Certificate_State {
  /** invalid - Prefix should start with 0 in enum. So declaring dummy state */
  invalid = 0,
  /** valid - CertificateValid denotes state for deployment active */
  valid = 1,
  /** revoked - CertificateRevoked denotes state for deployment closed */
  revoked = 2,
  UNRECOGNIZED = -1,
}

export function certificate_StateFromJSON(object: any): Certificate_State {
  switch (object) {
    case 0:
    case "invalid":
      return Certificate_State.invalid;
    case 1:
    case "valid":
      return Certificate_State.valid;
    case 2:
    case "revoked":
      return Certificate_State.revoked;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Certificate_State.UNRECOGNIZED;
  }
}

export function certificate_StateToJSON(object: Certificate_State): string {
  switch (object) {
    case Certificate_State.invalid:
      return "invalid";
    case Certificate_State.valid:
      return "valid";
    case Certificate_State.revoked:
      return "revoked";
    default:
      return "UNKNOWN";
  }
}

/** CertificateFilter defines filters used to filter certificates */
export interface CertificateFilter {
  owner: string;
  serial: string;
  state: string;
}

/** MsgCreateCertificate defines an SDK message for creating certificate */
export interface MsgCreateCertificate {
  owner: string;
  cert: Uint8Array;
  pubkey: Uint8Array;
}

/** MsgCreateCertificateResponse defines the Msg/CreateCertificate response type. */
export interface MsgCreateCertificateResponse {}

/** MsgRevokeCertificate defines an SDK message for revoking certificate */
export interface MsgRevokeCertificate {
  id?: CertificateID;
}

/** MsgRevokeCertificateResponse defines the Msg/RevokeCertificate response type. */
export interface MsgRevokeCertificateResponse {}

const baseCertificateID: object = { owner: "", serial: "" };

export const CertificateID = {
  encode(
    message: CertificateID,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (message.serial !== "") {
      writer.uint32(18).string(message.serial);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CertificateID {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCertificateID } as CertificateID;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;
        case 2:
          message.serial = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CertificateID {
    const message = { ...baseCertificateID } as CertificateID;
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = String(object.owner);
    } else {
      message.owner = "";
    }
    if (object.serial !== undefined && object.serial !== null) {
      message.serial = String(object.serial);
    } else {
      message.serial = "";
    }
    return message;
  },

  toJSON(message: CertificateID): unknown {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner);
    message.serial !== undefined && (obj.serial = message.serial);
    return obj;
  },

  fromPartial(object: DeepPartial<CertificateID>): CertificateID {
    const message = { ...baseCertificateID } as CertificateID;
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    } else {
      message.owner = "";
    }
    if (object.serial !== undefined && object.serial !== null) {
      message.serial = object.serial;
    } else {
      message.serial = "";
    }
    return message;
  },
};

const baseCertificate: object = { state: 0 };

export const Certificate = {
  encode(
    message: Certificate,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.state !== 0) {
      writer.uint32(16).int32(message.state);
    }
    if (message.cert.length !== 0) {
      writer.uint32(26).bytes(message.cert);
    }
    if (message.pubkey.length !== 0) {
      writer.uint32(34).bytes(message.pubkey);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Certificate {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCertificate } as Certificate;
    message.cert = new Uint8Array();
    message.pubkey = new Uint8Array();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          message.state = reader.int32() as any;
          break;
        case 3:
          message.cert = reader.bytes();
          break;
        case 4:
          message.pubkey = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Certificate {
    const message = { ...baseCertificate } as Certificate;
    message.cert = new Uint8Array();
    message.pubkey = new Uint8Array();
    if (object.state !== undefined && object.state !== null) {
      message.state = certificate_StateFromJSON(object.state);
    } else {
      message.state = 0;
    }
    if (object.cert !== undefined && object.cert !== null) {
      message.cert = bytesFromBase64(object.cert);
    }
    if (object.pubkey !== undefined && object.pubkey !== null) {
      message.pubkey = bytesFromBase64(object.pubkey);
    }
    return message;
  },

  toJSON(message: Certificate): unknown {
    const obj: any = {};
    message.state !== undefined &&
      (obj.state = certificate_StateToJSON(message.state));
    message.cert !== undefined &&
      (obj.cert = base64FromBytes(
        message.cert !== undefined ? message.cert : new Uint8Array()
      ));
    message.pubkey !== undefined &&
      (obj.pubkey = base64FromBytes(
        message.pubkey !== undefined ? message.pubkey : new Uint8Array()
      ));
    return obj;
  },

  fromPartial(object: DeepPartial<Certificate>): Certificate {
    const message = { ...baseCertificate } as Certificate;
    if (object.state !== undefined && object.state !== null) {
      message.state = object.state;
    } else {
      message.state = 0;
    }
    if (object.cert !== undefined && object.cert !== null) {
      message.cert = object.cert;
    } else {
      message.cert = new Uint8Array();
    }
    if (object.pubkey !== undefined && object.pubkey !== null) {
      message.pubkey = object.pubkey;
    } else {
      message.pubkey = new Uint8Array();
    }
    return message;
  },
};

const baseCertificateFilter: object = { owner: "", serial: "", state: "" };

export const CertificateFilter = {
  encode(
    message: CertificateFilter,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (message.serial !== "") {
      writer.uint32(18).string(message.serial);
    }
    if (message.state !== "") {
      writer.uint32(26).string(message.state);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CertificateFilter {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCertificateFilter } as CertificateFilter;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;
        case 2:
          message.serial = reader.string();
          break;
        case 3:
          message.state = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CertificateFilter {
    const message = { ...baseCertificateFilter } as CertificateFilter;
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = String(object.owner);
    } else {
      message.owner = "";
    }
    if (object.serial !== undefined && object.serial !== null) {
      message.serial = String(object.serial);
    } else {
      message.serial = "";
    }
    if (object.state !== undefined && object.state !== null) {
      message.state = String(object.state);
    } else {
      message.state = "";
    }
    return message;
  },

  toJSON(message: CertificateFilter): unknown {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner);
    message.serial !== undefined && (obj.serial = message.serial);
    message.state !== undefined && (obj.state = message.state);
    return obj;
  },

  fromPartial(object: DeepPartial<CertificateFilter>): CertificateFilter {
    const message = { ...baseCertificateFilter } as CertificateFilter;
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    } else {
      message.owner = "";
    }
    if (object.serial !== undefined && object.serial !== null) {
      message.serial = object.serial;
    } else {
      message.serial = "";
    }
    if (object.state !== undefined && object.state !== null) {
      message.state = object.state;
    } else {
      message.state = "";
    }
    return message;
  },
};

const baseMsgCreateCertificate: object = { owner: "" };

export const MsgCreateCertificate = {
  encode(
    message: MsgCreateCertificate,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (message.cert.length !== 0) {
      writer.uint32(18).bytes(message.cert);
    }
    if (message.pubkey.length !== 0) {
      writer.uint32(26).bytes(message.pubkey);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgCreateCertificate {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCreateCertificate } as MsgCreateCertificate;
    message.cert = new Uint8Array();
    message.pubkey = new Uint8Array();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;
        case 2:
          message.cert = reader.bytes();
          break;
        case 3:
          message.pubkey = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateCertificate {
    const message = { ...baseMsgCreateCertificate } as MsgCreateCertificate;
    message.cert = new Uint8Array();
    message.pubkey = new Uint8Array();
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = String(object.owner);
    } else {
      message.owner = "";
    }
    if (object.cert !== undefined && object.cert !== null) {
      message.cert = bytesFromBase64(object.cert);
    }
    if (object.pubkey !== undefined && object.pubkey !== null) {
      message.pubkey = bytesFromBase64(object.pubkey);
    }
    return message;
  },

  toJSON(message: MsgCreateCertificate): unknown {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner);
    message.cert !== undefined &&
      (obj.cert = base64FromBytes(
        message.cert !== undefined ? message.cert : new Uint8Array()
      ));
    message.pubkey !== undefined &&
      (obj.pubkey = base64FromBytes(
        message.pubkey !== undefined ? message.pubkey : new Uint8Array()
      ));
    return obj;
  },

  fromPartial(object: DeepPartial<MsgCreateCertificate>): MsgCreateCertificate {
    const message = { ...baseMsgCreateCertificate } as MsgCreateCertificate;
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    } else {
      message.owner = "";
    }
    if (object.cert !== undefined && object.cert !== null) {
      message.cert = object.cert;
    } else {
      message.cert = new Uint8Array();
    }
    if (object.pubkey !== undefined && object.pubkey !== null) {
      message.pubkey = object.pubkey;
    } else {
      message.pubkey = new Uint8Array();
    }
    return message;
  },
};

const baseMsgCreateCertificateResponse: object = {};

export const MsgCreateCertificateResponse = {
  encode(
    _: MsgCreateCertificateResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgCreateCertificateResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgCreateCertificateResponse,
    } as MsgCreateCertificateResponse;
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

  fromJSON(_: any): MsgCreateCertificateResponse {
    const message = {
      ...baseMsgCreateCertificateResponse,
    } as MsgCreateCertificateResponse;
    return message;
  },

  toJSON(_: MsgCreateCertificateResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgCreateCertificateResponse>
  ): MsgCreateCertificateResponse {
    const message = {
      ...baseMsgCreateCertificateResponse,
    } as MsgCreateCertificateResponse;
    return message;
  },
};

const baseMsgRevokeCertificate: object = {};

export const MsgRevokeCertificate = {
  encode(
    message: MsgRevokeCertificate,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== undefined) {
      CertificateID.encode(message.id, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgRevokeCertificate {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgRevokeCertificate } as MsgRevokeCertificate;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = CertificateID.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgRevokeCertificate {
    const message = { ...baseMsgRevokeCertificate } as MsgRevokeCertificate;
    if (object.id !== undefined && object.id !== null) {
      message.id = CertificateID.fromJSON(object.id);
    } else {
      message.id = undefined;
    }
    return message;
  },

  toJSON(message: MsgRevokeCertificate): unknown {
    const obj: any = {};
    message.id !== undefined &&
      (obj.id = message.id ? CertificateID.toJSON(message.id) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgRevokeCertificate>): MsgRevokeCertificate {
    const message = { ...baseMsgRevokeCertificate } as MsgRevokeCertificate;
    if (object.id !== undefined && object.id !== null) {
      message.id = CertificateID.fromPartial(object.id);
    } else {
      message.id = undefined;
    }
    return message;
  },
};

const baseMsgRevokeCertificateResponse: object = {};

export const MsgRevokeCertificateResponse = {
  encode(
    _: MsgRevokeCertificateResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgRevokeCertificateResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgRevokeCertificateResponse,
    } as MsgRevokeCertificateResponse;
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

  fromJSON(_: any): MsgRevokeCertificateResponse {
    const message = {
      ...baseMsgRevokeCertificateResponse,
    } as MsgRevokeCertificateResponse;
    return message;
  },

  toJSON(_: MsgRevokeCertificateResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgRevokeCertificateResponse>
  ): MsgRevokeCertificateResponse {
    const message = {
      ...baseMsgRevokeCertificateResponse,
    } as MsgRevokeCertificateResponse;
    return message;
  },
};

/** Msg defines the provider Msg service */
export interface Msg {
  /** CreateCertificate defines a method to create new certificate given proper inputs. */
  CreateCertificate(
    request: MsgCreateCertificate
  ): Promise<MsgCreateCertificateResponse>;
  /** RevokeCertificate defines a method to revoke the certificate */
  RevokeCertificate(
    request: MsgRevokeCertificate
  ): Promise<MsgRevokeCertificateResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.CreateCertificate = this.CreateCertificate.bind(this);
    this.RevokeCertificate = this.RevokeCertificate.bind(this);
  }
  CreateCertificate(
    request: MsgCreateCertificate
  ): Promise<MsgCreateCertificateResponse> {
    const data = MsgCreateCertificate.encode(request).finish();
    const promise = this.rpc.request(
      "akash.cert.v1beta1.Msg",
      "CreateCertificate",
      data
    );
    return promise.then((data) =>
      MsgCreateCertificateResponse.decode(new _m0.Reader(data))
    );
  }

  RevokeCertificate(
    request: MsgRevokeCertificate
  ): Promise<MsgRevokeCertificateResponse> {
    const data = MsgRevokeCertificate.encode(request).finish();
    const promise = this.rpc.request(
      "akash.cert.v1beta1.Msg",
      "RevokeCertificate",
      data
    );
    return promise.then((data) =>
      MsgRevokeCertificateResponse.decode(new _m0.Reader(data))
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

declare var self: any | undefined;
declare var window: any | undefined;
var globalThis: any = (() => {
  if (typeof globalThis !== "undefined") return globalThis;
  if (typeof self !== "undefined") return self;
  if (typeof window !== "undefined") return window;
  if (typeof global !== "undefined") return global;
  throw "Unable to locate global object";
})();

const atob: (b64: string) => string =
  globalThis.atob ||
  ((b64) => globalThis.Buffer.from(b64, "base64").toString("binary"));
function bytesFromBase64(b64: string): Uint8Array {
  const bin = atob(b64);
  const arr = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; ++i) {
    arr[i] = bin.charCodeAt(i);
  }
  return arr;
}

const btoa: (bin: string) => string =
  globalThis.btoa ||
  ((bin) => globalThis.Buffer.from(bin, "binary").toString("base64"));
function base64FromBytes(arr: Uint8Array): string {
  const bin: string[] = [];
  for (let i = 0; i < arr.byteLength; ++i) {
    bin.push(String.fromCharCode(arr[i]));
  }
  return btoa(bin.join(""));
}

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
