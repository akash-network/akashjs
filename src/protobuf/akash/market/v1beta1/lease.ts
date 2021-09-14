/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { BidID } from "../../../akash/market/v1beta1/bid";

export const protobufPackage = "akash.market.v1beta1";

/** LeaseID stores bid details of lease */
export interface LeaseID {
  owner: string;
  dseq: Long;
  gseq: number;
  oseq: number;
  provider: string;
}

/** Lease stores LeaseID, state of lease and price */
export interface Lease {
  leaseId?: LeaseID;
  state: Lease_State;
  price?: Coin;
  createdAt: Long;
}

/** State is an enum which refers to state of lease */
export enum Lease_State {
  /** invalid - Prefix should start with 0 in enum. So declaring dummy state */
  invalid = 0,
  /** active - LeaseActive denotes state for lease active */
  active = 1,
  /** insufficient_funds - LeaseInsufficientFunds denotes state for lease insufficient_funds */
  insufficient_funds = 2,
  /** closed - LeaseClosed denotes state for lease closed */
  closed = 3,
  UNRECOGNIZED = -1,
}

export function lease_StateFromJSON(object: any): Lease_State {
  switch (object) {
    case 0:
    case "invalid":
      return Lease_State.invalid;
    case 1:
    case "active":
      return Lease_State.active;
    case 2:
    case "insufficient_funds":
      return Lease_State.insufficient_funds;
    case 3:
    case "closed":
      return Lease_State.closed;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Lease_State.UNRECOGNIZED;
  }
}

export function lease_StateToJSON(object: Lease_State): string {
  switch (object) {
    case Lease_State.invalid:
      return "invalid";
    case Lease_State.active:
      return "active";
    case Lease_State.insufficient_funds:
      return "insufficient_funds";
    case Lease_State.closed:
      return "closed";
    default:
      return "UNKNOWN";
  }
}

/** LeaseFilters defines flags for lease list filter */
export interface LeaseFilters {
  owner: string;
  dseq: Long;
  gseq: number;
  oseq: number;
  provider: string;
  state: string;
}

/** MsgCreateLease is sent to create a lease */
export interface MsgCreateLease {
  bidId?: BidID;
}

/** MsgCreateLeaseResponse is the response from creating a lease */
export interface MsgCreateLeaseResponse {}

/** MsgWithdrawLease defines an SDK message for closing bid */
export interface MsgWithdrawLease {
  bidId?: LeaseID;
}

/** MsgWithdrawLeaseResponse defines the Msg/WithdrawLease response type. */
export interface MsgWithdrawLeaseResponse {}

/** MsgCloseLease defines an SDK message for closing order */
export interface MsgCloseLease {
  leaseId?: LeaseID;
}

/** MsgCloseLeaseResponse defines the Msg/CloseLease response type. */
export interface MsgCloseLeaseResponse {}

const baseLeaseID: object = {
  owner: "",
  dseq: Long.UZERO,
  gseq: 0,
  oseq: 0,
  provider: "",
};

export const LeaseID = {
  encode(
    message: LeaseID,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (!message.dseq.isZero()) {
      writer.uint32(16).uint64(message.dseq);
    }
    if (message.gseq !== 0) {
      writer.uint32(24).uint32(message.gseq);
    }
    if (message.oseq !== 0) {
      writer.uint32(32).uint32(message.oseq);
    }
    if (message.provider !== "") {
      writer.uint32(42).string(message.provider);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LeaseID {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseLeaseID } as LeaseID;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;
        case 2:
          message.dseq = reader.uint64() as Long;
          break;
        case 3:
          message.gseq = reader.uint32();
          break;
        case 4:
          message.oseq = reader.uint32();
          break;
        case 5:
          message.provider = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): LeaseID {
    const message = { ...baseLeaseID } as LeaseID;
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = String(object.owner);
    } else {
      message.owner = "";
    }
    if (object.dseq !== undefined && object.dseq !== null) {
      message.dseq = Long.fromString(object.dseq);
    } else {
      message.dseq = Long.UZERO;
    }
    if (object.gseq !== undefined && object.gseq !== null) {
      message.gseq = Number(object.gseq);
    } else {
      message.gseq = 0;
    }
    if (object.oseq !== undefined && object.oseq !== null) {
      message.oseq = Number(object.oseq);
    } else {
      message.oseq = 0;
    }
    if (object.provider !== undefined && object.provider !== null) {
      message.provider = String(object.provider);
    } else {
      message.provider = "";
    }
    return message;
  },

  toJSON(message: LeaseID): unknown {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner);
    message.dseq !== undefined &&
      (obj.dseq = (message.dseq || Long.UZERO).toString());
    message.gseq !== undefined && (obj.gseq = message.gseq);
    message.oseq !== undefined && (obj.oseq = message.oseq);
    message.provider !== undefined && (obj.provider = message.provider);
    return obj;
  },

  fromPartial(object: DeepPartial<LeaseID>): LeaseID {
    const message = { ...baseLeaseID } as LeaseID;
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    } else {
      message.owner = "";
    }
    if (object.dseq !== undefined && object.dseq !== null) {
      message.dseq = object.dseq as Long;
    } else {
      message.dseq = Long.UZERO;
    }
    if (object.gseq !== undefined && object.gseq !== null) {
      message.gseq = object.gseq;
    } else {
      message.gseq = 0;
    }
    if (object.oseq !== undefined && object.oseq !== null) {
      message.oseq = object.oseq;
    } else {
      message.oseq = 0;
    }
    if (object.provider !== undefined && object.provider !== null) {
      message.provider = object.provider;
    } else {
      message.provider = "";
    }
    return message;
  },
};

const baseLease: object = { state: 0, createdAt: Long.ZERO };

export const Lease = {
  encode(message: Lease, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.leaseId !== undefined) {
      LeaseID.encode(message.leaseId, writer.uint32(10).fork()).ldelim();
    }
    if (message.state !== 0) {
      writer.uint32(16).int32(message.state);
    }
    if (message.price !== undefined) {
      Coin.encode(message.price, writer.uint32(26).fork()).ldelim();
    }
    if (!message.createdAt.isZero()) {
      writer.uint32(32).int64(message.createdAt);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Lease {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseLease } as Lease;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.leaseId = LeaseID.decode(reader, reader.uint32());
          break;
        case 2:
          message.state = reader.int32() as any;
          break;
        case 3:
          message.price = Coin.decode(reader, reader.uint32());
          break;
        case 4:
          message.createdAt = reader.int64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Lease {
    const message = { ...baseLease } as Lease;
    if (object.leaseId !== undefined && object.leaseId !== null) {
      message.leaseId = LeaseID.fromJSON(object.leaseId);
    } else {
      message.leaseId = undefined;
    }
    if (object.state !== undefined && object.state !== null) {
      message.state = lease_StateFromJSON(object.state);
    } else {
      message.state = 0;
    }
    if (object.price !== undefined && object.price !== null) {
      message.price = Coin.fromJSON(object.price);
    } else {
      message.price = undefined;
    }
    if (object.createdAt !== undefined && object.createdAt !== null) {
      message.createdAt = Long.fromString(object.createdAt);
    } else {
      message.createdAt = Long.ZERO;
    }
    return message;
  },

  toJSON(message: Lease): unknown {
    const obj: any = {};
    message.leaseId !== undefined &&
      (obj.leaseId = message.leaseId
        ? LeaseID.toJSON(message.leaseId)
        : undefined);
    message.state !== undefined &&
      (obj.state = lease_StateToJSON(message.state));
    message.price !== undefined &&
      (obj.price = message.price ? Coin.toJSON(message.price) : undefined);
    message.createdAt !== undefined &&
      (obj.createdAt = (message.createdAt || Long.ZERO).toString());
    return obj;
  },

  fromPartial(object: DeepPartial<Lease>): Lease {
    const message = { ...baseLease } as Lease;
    if (object.leaseId !== undefined && object.leaseId !== null) {
      message.leaseId = LeaseID.fromPartial(object.leaseId);
    } else {
      message.leaseId = undefined;
    }
    if (object.state !== undefined && object.state !== null) {
      message.state = object.state;
    } else {
      message.state = 0;
    }
    if (object.price !== undefined && object.price !== null) {
      message.price = Coin.fromPartial(object.price);
    } else {
      message.price = undefined;
    }
    if (object.createdAt !== undefined && object.createdAt !== null) {
      message.createdAt = object.createdAt as Long;
    } else {
      message.createdAt = Long.ZERO;
    }
    return message;
  },
};

const baseLeaseFilters: object = {
  owner: "",
  dseq: Long.UZERO,
  gseq: 0,
  oseq: 0,
  provider: "",
  state: "",
};

export const LeaseFilters = {
  encode(
    message: LeaseFilters,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (!message.dseq.isZero()) {
      writer.uint32(16).uint64(message.dseq);
    }
    if (message.gseq !== 0) {
      writer.uint32(24).uint32(message.gseq);
    }
    if (message.oseq !== 0) {
      writer.uint32(32).uint32(message.oseq);
    }
    if (message.provider !== "") {
      writer.uint32(42).string(message.provider);
    }
    if (message.state !== "") {
      writer.uint32(50).string(message.state);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LeaseFilters {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseLeaseFilters } as LeaseFilters;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;
        case 2:
          message.dseq = reader.uint64() as Long;
          break;
        case 3:
          message.gseq = reader.uint32();
          break;
        case 4:
          message.oseq = reader.uint32();
          break;
        case 5:
          message.provider = reader.string();
          break;
        case 6:
          message.state = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): LeaseFilters {
    const message = { ...baseLeaseFilters } as LeaseFilters;
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = String(object.owner);
    } else {
      message.owner = "";
    }
    if (object.dseq !== undefined && object.dseq !== null) {
      message.dseq = Long.fromString(object.dseq);
    } else {
      message.dseq = Long.UZERO;
    }
    if (object.gseq !== undefined && object.gseq !== null) {
      message.gseq = Number(object.gseq);
    } else {
      message.gseq = 0;
    }
    if (object.oseq !== undefined && object.oseq !== null) {
      message.oseq = Number(object.oseq);
    } else {
      message.oseq = 0;
    }
    if (object.provider !== undefined && object.provider !== null) {
      message.provider = String(object.provider);
    } else {
      message.provider = "";
    }
    if (object.state !== undefined && object.state !== null) {
      message.state = String(object.state);
    } else {
      message.state = "";
    }
    return message;
  },

  toJSON(message: LeaseFilters): unknown {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner);
    message.dseq !== undefined &&
      (obj.dseq = (message.dseq || Long.UZERO).toString());
    message.gseq !== undefined && (obj.gseq = message.gseq);
    message.oseq !== undefined && (obj.oseq = message.oseq);
    message.provider !== undefined && (obj.provider = message.provider);
    message.state !== undefined && (obj.state = message.state);
    return obj;
  },

  fromPartial(object: DeepPartial<LeaseFilters>): LeaseFilters {
    const message = { ...baseLeaseFilters } as LeaseFilters;
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    } else {
      message.owner = "";
    }
    if (object.dseq !== undefined && object.dseq !== null) {
      message.dseq = object.dseq as Long;
    } else {
      message.dseq = Long.UZERO;
    }
    if (object.gseq !== undefined && object.gseq !== null) {
      message.gseq = object.gseq;
    } else {
      message.gseq = 0;
    }
    if (object.oseq !== undefined && object.oseq !== null) {
      message.oseq = object.oseq;
    } else {
      message.oseq = 0;
    }
    if (object.provider !== undefined && object.provider !== null) {
      message.provider = object.provider;
    } else {
      message.provider = "";
    }
    if (object.state !== undefined && object.state !== null) {
      message.state = object.state;
    } else {
      message.state = "";
    }
    return message;
  },
};

const baseMsgCreateLease: object = {};

export const MsgCreateLease = {
  encode(
    message: MsgCreateLease,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.bidId !== undefined) {
      BidID.encode(message.bidId, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateLease {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCreateLease } as MsgCreateLease;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.bidId = BidID.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateLease {
    const message = { ...baseMsgCreateLease } as MsgCreateLease;
    if (object.bidId !== undefined && object.bidId !== null) {
      message.bidId = BidID.fromJSON(object.bidId);
    } else {
      message.bidId = undefined;
    }
    return message;
  },

  toJSON(message: MsgCreateLease): unknown {
    const obj: any = {};
    message.bidId !== undefined &&
      (obj.bidId = message.bidId ? BidID.toJSON(message.bidId) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgCreateLease>): MsgCreateLease {
    const message = { ...baseMsgCreateLease } as MsgCreateLease;
    if (object.bidId !== undefined && object.bidId !== null) {
      message.bidId = BidID.fromPartial(object.bidId);
    } else {
      message.bidId = undefined;
    }
    return message;
  },
};

const baseMsgCreateLeaseResponse: object = {};

export const MsgCreateLeaseResponse = {
  encode(
    _: MsgCreateLeaseResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgCreateLeaseResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCreateLeaseResponse } as MsgCreateLeaseResponse;
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

  fromJSON(_: any): MsgCreateLeaseResponse {
    const message = { ...baseMsgCreateLeaseResponse } as MsgCreateLeaseResponse;
    return message;
  },

  toJSON(_: MsgCreateLeaseResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgCreateLeaseResponse>): MsgCreateLeaseResponse {
    const message = { ...baseMsgCreateLeaseResponse } as MsgCreateLeaseResponse;
    return message;
  },
};

const baseMsgWithdrawLease: object = {};

export const MsgWithdrawLease = {
  encode(
    message: MsgWithdrawLease,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.bidId !== undefined) {
      LeaseID.encode(message.bidId, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgWithdrawLease {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgWithdrawLease } as MsgWithdrawLease;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.bidId = LeaseID.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgWithdrawLease {
    const message = { ...baseMsgWithdrawLease } as MsgWithdrawLease;
    if (object.bidId !== undefined && object.bidId !== null) {
      message.bidId = LeaseID.fromJSON(object.bidId);
    } else {
      message.bidId = undefined;
    }
    return message;
  },

  toJSON(message: MsgWithdrawLease): unknown {
    const obj: any = {};
    message.bidId !== undefined &&
      (obj.bidId = message.bidId ? LeaseID.toJSON(message.bidId) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgWithdrawLease>): MsgWithdrawLease {
    const message = { ...baseMsgWithdrawLease } as MsgWithdrawLease;
    if (object.bidId !== undefined && object.bidId !== null) {
      message.bidId = LeaseID.fromPartial(object.bidId);
    } else {
      message.bidId = undefined;
    }
    return message;
  },
};

const baseMsgWithdrawLeaseResponse: object = {};

export const MsgWithdrawLeaseResponse = {
  encode(
    _: MsgWithdrawLeaseResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgWithdrawLeaseResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgWithdrawLeaseResponse,
    } as MsgWithdrawLeaseResponse;
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

  fromJSON(_: any): MsgWithdrawLeaseResponse {
    const message = {
      ...baseMsgWithdrawLeaseResponse,
    } as MsgWithdrawLeaseResponse;
    return message;
  },

  toJSON(_: MsgWithdrawLeaseResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgWithdrawLeaseResponse>
  ): MsgWithdrawLeaseResponse {
    const message = {
      ...baseMsgWithdrawLeaseResponse,
    } as MsgWithdrawLeaseResponse;
    return message;
  },
};

const baseMsgCloseLease: object = {};

export const MsgCloseLease = {
  encode(
    message: MsgCloseLease,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.leaseId !== undefined) {
      LeaseID.encode(message.leaseId, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCloseLease {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCloseLease } as MsgCloseLease;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.leaseId = LeaseID.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCloseLease {
    const message = { ...baseMsgCloseLease } as MsgCloseLease;
    if (object.leaseId !== undefined && object.leaseId !== null) {
      message.leaseId = LeaseID.fromJSON(object.leaseId);
    } else {
      message.leaseId = undefined;
    }
    return message;
  },

  toJSON(message: MsgCloseLease): unknown {
    const obj: any = {};
    message.leaseId !== undefined &&
      (obj.leaseId = message.leaseId
        ? LeaseID.toJSON(message.leaseId)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgCloseLease>): MsgCloseLease {
    const message = { ...baseMsgCloseLease } as MsgCloseLease;
    if (object.leaseId !== undefined && object.leaseId !== null) {
      message.leaseId = LeaseID.fromPartial(object.leaseId);
    } else {
      message.leaseId = undefined;
    }
    return message;
  },
};

const baseMsgCloseLeaseResponse: object = {};

export const MsgCloseLeaseResponse = {
  encode(
    _: MsgCloseLeaseResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgCloseLeaseResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCloseLeaseResponse } as MsgCloseLeaseResponse;
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

  fromJSON(_: any): MsgCloseLeaseResponse {
    const message = { ...baseMsgCloseLeaseResponse } as MsgCloseLeaseResponse;
    return message;
  },

  toJSON(_: MsgCloseLeaseResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgCloseLeaseResponse>): MsgCloseLeaseResponse {
    const message = { ...baseMsgCloseLeaseResponse } as MsgCloseLeaseResponse;
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
