/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { DecCoin } from "../../../cosmos/base/v1beta1/coin";
import { messageTypeRegistry } from "../../../typeRegistry";
import { BidID } from "./bid";

export const protobufPackage = "akash.market.v1beta3";

/** LeaseID stores bid details of lease */
export interface LeaseID {
  $type: "akash.market.v1beta3.LeaseID";
  owner: string;
  dseq: Long;
  gseq: number;
  oseq: number;
  provider: string;
}

/** Lease stores LeaseID, state of lease and price */
export interface Lease {
  $type: "akash.market.v1beta3.Lease";
  leaseId: LeaseID | undefined;
  state: Lease_State;
  price: DecCoin | undefined;
  createdAt: Long;
  closedOn: Long;
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
    case Lease_State.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

/** LeaseFilters defines flags for lease list filter */
export interface LeaseFilters {
  $type: "akash.market.v1beta3.LeaseFilters";
  owner: string;
  dseq: Long;
  gseq: number;
  oseq: number;
  provider: string;
  state: string;
}

/** MsgCreateLease is sent to create a lease */
export interface MsgCreateLease {
  $type: "akash.market.v1beta3.MsgCreateLease";
  bidId: BidID | undefined;
}

/** MsgCreateLeaseResponse is the response from creating a lease */
export interface MsgCreateLeaseResponse {
  $type: "akash.market.v1beta3.MsgCreateLeaseResponse";
}

/** MsgWithdrawLease defines an SDK message for closing bid */
export interface MsgWithdrawLease {
  $type: "akash.market.v1beta3.MsgWithdrawLease";
  bidId: LeaseID | undefined;
}

/** MsgWithdrawLeaseResponse defines the Msg/WithdrawLease response type. */
export interface MsgWithdrawLeaseResponse {
  $type: "akash.market.v1beta3.MsgWithdrawLeaseResponse";
}

/** MsgCloseLease defines an SDK message for closing order */
export interface MsgCloseLease {
  $type: "akash.market.v1beta3.MsgCloseLease";
  leaseId: LeaseID | undefined;
}

/** MsgCloseLeaseResponse defines the Msg/CloseLease response type. */
export interface MsgCloseLeaseResponse {
  $type: "akash.market.v1beta3.MsgCloseLeaseResponse";
}

function createBaseLeaseID(): LeaseID {
  return { $type: "akash.market.v1beta3.LeaseID", owner: "", dseq: Long.UZERO, gseq: 0, oseq: 0, provider: "" };
}

export const LeaseID = {
  $type: "akash.market.v1beta3.LeaseID" as const,

  encode(message: LeaseID, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLeaseID();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.owner = reader.string();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.dseq = reader.uint64() as Long;
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.gseq = reader.uint32();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.oseq = reader.uint32();
          continue;
        case 5:
          if (tag != 42) {
            break;
          }

          message.provider = reader.string();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): LeaseID {
    return {
      $type: LeaseID.$type,
      owner: isSet(object.owner) ? String(object.owner) : "",
      dseq: isSet(object.dseq) ? Long.fromValue(object.dseq) : Long.UZERO,
      gseq: isSet(object.gseq) ? Number(object.gseq) : 0,
      oseq: isSet(object.oseq) ? Number(object.oseq) : 0,
      provider: isSet(object.provider) ? String(object.provider) : "",
    };
  },

  toJSON(message: LeaseID): unknown {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner);
    message.dseq !== undefined && (obj.dseq = (message.dseq || Long.UZERO).toString());
    message.gseq !== undefined && (obj.gseq = Math.round(message.gseq));
    message.oseq !== undefined && (obj.oseq = Math.round(message.oseq));
    message.provider !== undefined && (obj.provider = message.provider);
    return obj;
  },

  create<I extends Exact<DeepPartial<LeaseID>, I>>(base?: I): LeaseID {
    return LeaseID.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<LeaseID>, I>>(object: I): LeaseID {
    const message = createBaseLeaseID();
    message.owner = object.owner ?? "";
    message.dseq = (object.dseq !== undefined && object.dseq !== null) ? Long.fromValue(object.dseq) : Long.UZERO;
    message.gseq = object.gseq ?? 0;
    message.oseq = object.oseq ?? 0;
    message.provider = object.provider ?? "";
    return message;
  },
};

messageTypeRegistry.set(LeaseID.$type, LeaseID);

function createBaseLease(): Lease {
  return {
    $type: "akash.market.v1beta3.Lease",
    leaseId: undefined,
    state: 0,
    price: undefined,
    createdAt: Long.ZERO,
    closedOn: Long.ZERO,
  };
}

export const Lease = {
  $type: "akash.market.v1beta3.Lease" as const,

  encode(message: Lease, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.leaseId !== undefined) {
      LeaseID.encode(message.leaseId, writer.uint32(10).fork()).ldelim();
    }
    if (message.state !== 0) {
      writer.uint32(16).int32(message.state);
    }
    if (message.price !== undefined) {
      DecCoin.encode(message.price, writer.uint32(26).fork()).ldelim();
    }
    if (!message.createdAt.isZero()) {
      writer.uint32(32).int64(message.createdAt);
    }
    if (!message.closedOn.isZero()) {
      writer.uint32(40).int64(message.closedOn);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Lease {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLease();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.leaseId = LeaseID.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.state = reader.int32() as any;
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.price = DecCoin.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.createdAt = reader.int64() as Long;
          continue;
        case 5:
          if (tag != 40) {
            break;
          }

          message.closedOn = reader.int64() as Long;
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Lease {
    return {
      $type: Lease.$type,
      leaseId: isSet(object.leaseId) ? LeaseID.fromJSON(object.leaseId) : undefined,
      state: isSet(object.state) ? lease_StateFromJSON(object.state) : 0,
      price: isSet(object.price) ? DecCoin.fromJSON(object.price) : undefined,
      createdAt: isSet(object.createdAt) ? Long.fromValue(object.createdAt) : Long.ZERO,
      closedOn: isSet(object.closedOn) ? Long.fromValue(object.closedOn) : Long.ZERO,
    };
  },

  toJSON(message: Lease): unknown {
    const obj: any = {};
    message.leaseId !== undefined && (obj.leaseId = message.leaseId ? LeaseID.toJSON(message.leaseId) : undefined);
    message.state !== undefined && (obj.state = lease_StateToJSON(message.state));
    message.price !== undefined && (obj.price = message.price ? DecCoin.toJSON(message.price) : undefined);
    message.createdAt !== undefined && (obj.createdAt = (message.createdAt || Long.ZERO).toString());
    message.closedOn !== undefined && (obj.closedOn = (message.closedOn || Long.ZERO).toString());
    return obj;
  },

  create<I extends Exact<DeepPartial<Lease>, I>>(base?: I): Lease {
    return Lease.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Lease>, I>>(object: I): Lease {
    const message = createBaseLease();
    message.leaseId = (object.leaseId !== undefined && object.leaseId !== null)
      ? LeaseID.fromPartial(object.leaseId)
      : undefined;
    message.state = object.state ?? 0;
    message.price = (object.price !== undefined && object.price !== null)
      ? DecCoin.fromPartial(object.price)
      : undefined;
    message.createdAt = (object.createdAt !== undefined && object.createdAt !== null)
      ? Long.fromValue(object.createdAt)
      : Long.ZERO;
    message.closedOn = (object.closedOn !== undefined && object.closedOn !== null)
      ? Long.fromValue(object.closedOn)
      : Long.ZERO;
    return message;
  },
};

messageTypeRegistry.set(Lease.$type, Lease);

function createBaseLeaseFilters(): LeaseFilters {
  return {
    $type: "akash.market.v1beta3.LeaseFilters",
    owner: "",
    dseq: Long.UZERO,
    gseq: 0,
    oseq: 0,
    provider: "",
    state: "",
  };
}

export const LeaseFilters = {
  $type: "akash.market.v1beta3.LeaseFilters" as const,

  encode(message: LeaseFilters, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLeaseFilters();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.owner = reader.string();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.dseq = reader.uint64() as Long;
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.gseq = reader.uint32();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.oseq = reader.uint32();
          continue;
        case 5:
          if (tag != 42) {
            break;
          }

          message.provider = reader.string();
          continue;
        case 6:
          if (tag != 50) {
            break;
          }

          message.state = reader.string();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): LeaseFilters {
    return {
      $type: LeaseFilters.$type,
      owner: isSet(object.owner) ? String(object.owner) : "",
      dseq: isSet(object.dseq) ? Long.fromValue(object.dseq) : Long.UZERO,
      gseq: isSet(object.gseq) ? Number(object.gseq) : 0,
      oseq: isSet(object.oseq) ? Number(object.oseq) : 0,
      provider: isSet(object.provider) ? String(object.provider) : "",
      state: isSet(object.state) ? String(object.state) : "",
    };
  },

  toJSON(message: LeaseFilters): unknown {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner);
    message.dseq !== undefined && (obj.dseq = (message.dseq || Long.UZERO).toString());
    message.gseq !== undefined && (obj.gseq = Math.round(message.gseq));
    message.oseq !== undefined && (obj.oseq = Math.round(message.oseq));
    message.provider !== undefined && (obj.provider = message.provider);
    message.state !== undefined && (obj.state = message.state);
    return obj;
  },

  create<I extends Exact<DeepPartial<LeaseFilters>, I>>(base?: I): LeaseFilters {
    return LeaseFilters.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<LeaseFilters>, I>>(object: I): LeaseFilters {
    const message = createBaseLeaseFilters();
    message.owner = object.owner ?? "";
    message.dseq = (object.dseq !== undefined && object.dseq !== null) ? Long.fromValue(object.dseq) : Long.UZERO;
    message.gseq = object.gseq ?? 0;
    message.oseq = object.oseq ?? 0;
    message.provider = object.provider ?? "";
    message.state = object.state ?? "";
    return message;
  },
};

messageTypeRegistry.set(LeaseFilters.$type, LeaseFilters);

function createBaseMsgCreateLease(): MsgCreateLease {
  return { $type: "akash.market.v1beta3.MsgCreateLease", bidId: undefined };
}

export const MsgCreateLease = {
  $type: "akash.market.v1beta3.MsgCreateLease" as const,

  encode(message: MsgCreateLease, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.bidId !== undefined) {
      BidID.encode(message.bidId, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateLease {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateLease();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.bidId = BidID.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgCreateLease {
    return { $type: MsgCreateLease.$type, bidId: isSet(object.bidId) ? BidID.fromJSON(object.bidId) : undefined };
  },

  toJSON(message: MsgCreateLease): unknown {
    const obj: any = {};
    message.bidId !== undefined && (obj.bidId = message.bidId ? BidID.toJSON(message.bidId) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgCreateLease>, I>>(base?: I): MsgCreateLease {
    return MsgCreateLease.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<MsgCreateLease>, I>>(object: I): MsgCreateLease {
    const message = createBaseMsgCreateLease();
    message.bidId = (object.bidId !== undefined && object.bidId !== null) ? BidID.fromPartial(object.bidId) : undefined;
    return message;
  },
};

messageTypeRegistry.set(MsgCreateLease.$type, MsgCreateLease);

function createBaseMsgCreateLeaseResponse(): MsgCreateLeaseResponse {
  return { $type: "akash.market.v1beta3.MsgCreateLeaseResponse" };
}

export const MsgCreateLeaseResponse = {
  $type: "akash.market.v1beta3.MsgCreateLeaseResponse" as const,

  encode(_: MsgCreateLeaseResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateLeaseResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateLeaseResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): MsgCreateLeaseResponse {
    return { $type: MsgCreateLeaseResponse.$type };
  },

  toJSON(_: MsgCreateLeaseResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgCreateLeaseResponse>, I>>(base?: I): MsgCreateLeaseResponse {
    return MsgCreateLeaseResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<MsgCreateLeaseResponse>, I>>(_: I): MsgCreateLeaseResponse {
    const message = createBaseMsgCreateLeaseResponse();
    return message;
  },
};

messageTypeRegistry.set(MsgCreateLeaseResponse.$type, MsgCreateLeaseResponse);

function createBaseMsgWithdrawLease(): MsgWithdrawLease {
  return { $type: "akash.market.v1beta3.MsgWithdrawLease", bidId: undefined };
}

export const MsgWithdrawLease = {
  $type: "akash.market.v1beta3.MsgWithdrawLease" as const,

  encode(message: MsgWithdrawLease, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.bidId !== undefined) {
      LeaseID.encode(message.bidId, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgWithdrawLease {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgWithdrawLease();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.bidId = LeaseID.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgWithdrawLease {
    return { $type: MsgWithdrawLease.$type, bidId: isSet(object.bidId) ? LeaseID.fromJSON(object.bidId) : undefined };
  },

  toJSON(message: MsgWithdrawLease): unknown {
    const obj: any = {};
    message.bidId !== undefined && (obj.bidId = message.bidId ? LeaseID.toJSON(message.bidId) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgWithdrawLease>, I>>(base?: I): MsgWithdrawLease {
    return MsgWithdrawLease.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<MsgWithdrawLease>, I>>(object: I): MsgWithdrawLease {
    const message = createBaseMsgWithdrawLease();
    message.bidId = (object.bidId !== undefined && object.bidId !== null)
      ? LeaseID.fromPartial(object.bidId)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(MsgWithdrawLease.$type, MsgWithdrawLease);

function createBaseMsgWithdrawLeaseResponse(): MsgWithdrawLeaseResponse {
  return { $type: "akash.market.v1beta3.MsgWithdrawLeaseResponse" };
}

export const MsgWithdrawLeaseResponse = {
  $type: "akash.market.v1beta3.MsgWithdrawLeaseResponse" as const,

  encode(_: MsgWithdrawLeaseResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgWithdrawLeaseResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgWithdrawLeaseResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): MsgWithdrawLeaseResponse {
    return { $type: MsgWithdrawLeaseResponse.$type };
  },

  toJSON(_: MsgWithdrawLeaseResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgWithdrawLeaseResponse>, I>>(base?: I): MsgWithdrawLeaseResponse {
    return MsgWithdrawLeaseResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<MsgWithdrawLeaseResponse>, I>>(_: I): MsgWithdrawLeaseResponse {
    const message = createBaseMsgWithdrawLeaseResponse();
    return message;
  },
};

messageTypeRegistry.set(MsgWithdrawLeaseResponse.$type, MsgWithdrawLeaseResponse);

function createBaseMsgCloseLease(): MsgCloseLease {
  return { $type: "akash.market.v1beta3.MsgCloseLease", leaseId: undefined };
}

export const MsgCloseLease = {
  $type: "akash.market.v1beta3.MsgCloseLease" as const,

  encode(message: MsgCloseLease, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.leaseId !== undefined) {
      LeaseID.encode(message.leaseId, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCloseLease {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCloseLease();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.leaseId = LeaseID.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgCloseLease {
    return {
      $type: MsgCloseLease.$type,
      leaseId: isSet(object.leaseId) ? LeaseID.fromJSON(object.leaseId) : undefined,
    };
  },

  toJSON(message: MsgCloseLease): unknown {
    const obj: any = {};
    message.leaseId !== undefined && (obj.leaseId = message.leaseId ? LeaseID.toJSON(message.leaseId) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgCloseLease>, I>>(base?: I): MsgCloseLease {
    return MsgCloseLease.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<MsgCloseLease>, I>>(object: I): MsgCloseLease {
    const message = createBaseMsgCloseLease();
    message.leaseId = (object.leaseId !== undefined && object.leaseId !== null)
      ? LeaseID.fromPartial(object.leaseId)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(MsgCloseLease.$type, MsgCloseLease);

function createBaseMsgCloseLeaseResponse(): MsgCloseLeaseResponse {
  return { $type: "akash.market.v1beta3.MsgCloseLeaseResponse" };
}

export const MsgCloseLeaseResponse = {
  $type: "akash.market.v1beta3.MsgCloseLeaseResponse" as const,

  encode(_: MsgCloseLeaseResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCloseLeaseResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCloseLeaseResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): MsgCloseLeaseResponse {
    return { $type: MsgCloseLeaseResponse.$type };
  },

  toJSON(_: MsgCloseLeaseResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgCloseLeaseResponse>, I>>(base?: I): MsgCloseLeaseResponse {
    return MsgCloseLeaseResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<MsgCloseLeaseResponse>, I>>(_: I): MsgCloseLeaseResponse {
    const message = createBaseMsgCloseLeaseResponse();
    return message;
  },
};

messageTypeRegistry.set(MsgCloseLeaseResponse.$type, MsgCloseLeaseResponse);

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
