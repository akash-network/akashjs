/* eslint-disable */
import { util, configure, Writer, Reader } from "protobufjs/minimal";
import * as Long from "long";
import { Coin } from "../../../cosmos/base/v1beta1/coin";

export const protobufPackage = "akash.escrow.v1beta1";

/** AccountID is the account identifier */
export interface AccountID {
  scope: string;
  xid: string;
}

/** Account stores state for an escrow account */
export interface Account {
  id: AccountID | undefined;
  owner: string;
  state: Account_State;
  balance: Coin | undefined;
  transferred: Coin | undefined;
  settledAt: number;
}

/** State stores state for an escrow account */
export enum Account_State {
  /** invalid - AccountStateInvalid is an invalid state */
  invalid = 0,
  /** open - AccountOpen is the state when an account is open */
  open = 1,
  /** closed - AccountClosed is the state when an account is closed */
  closed = 2,
  /** overdrawn - AccountOverdrawn is the state when an account is overdrawn */
  overdrawn = 3,
  UNRECOGNIZED = -1,
}

export function account_StateFromJSON(object: any): Account_State {
  switch (object) {
    case 0:
    case "invalid":
      return Account_State.invalid;
    case 1:
    case "open":
      return Account_State.open;
    case 2:
    case "closed":
      return Account_State.closed;
    case 3:
    case "overdrawn":
      return Account_State.overdrawn;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Account_State.UNRECOGNIZED;
  }
}

export function account_StateToJSON(object: Account_State): string {
  switch (object) {
    case Account_State.invalid:
      return "invalid";
    case Account_State.open:
      return "open";
    case Account_State.closed:
      return "closed";
    case Account_State.overdrawn:
      return "overdrawn";
    default:
      return "UNKNOWN";
  }
}

/** Payment stores state for a payment */
export interface Payment {
  accountId: AccountID | undefined;
  paymentId: string;
  owner: string;
  state: Payment_State;
  rate: Coin | undefined;
  balance: Coin | undefined;
  withdrawn: Coin | undefined;
}

/** Payment State */
export enum Payment_State {
  /** invalid - PaymentStateInvalid is the state when the payment is invalid */
  invalid = 0,
  /** open - PaymentStateOpen is the state when the payment is open */
  open = 1,
  /** closed - PaymentStateClosed is the state when the payment is closed */
  closed = 2,
  /** overdrawn - PaymentStateOverdrawn is the state when the payment is overdrawn */
  overdrawn = 3,
  UNRECOGNIZED = -1,
}

export function payment_StateFromJSON(object: any): Payment_State {
  switch (object) {
    case 0:
    case "invalid":
      return Payment_State.invalid;
    case 1:
    case "open":
      return Payment_State.open;
    case 2:
    case "closed":
      return Payment_State.closed;
    case 3:
    case "overdrawn":
      return Payment_State.overdrawn;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Payment_State.UNRECOGNIZED;
  }
}

export function payment_StateToJSON(object: Payment_State): string {
  switch (object) {
    case Payment_State.invalid:
      return "invalid";
    case Payment_State.open:
      return "open";
    case Payment_State.closed:
      return "closed";
    case Payment_State.overdrawn:
      return "overdrawn";
    default:
      return "UNKNOWN";
  }
}

const baseAccountID: object = { scope: "", xid: "" };

export const AccountID = {
  encode(message: AccountID, writer: Writer = Writer.create()): Writer {
    if (message.scope !== "") {
      writer.uint32(10).string(message.scope);
    }
    if (message.xid !== "") {
      writer.uint32(18).string(message.xid);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): AccountID {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseAccountID } as AccountID;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.scope = reader.string();
          break;
        case 2:
          message.xid = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AccountID {
    const message = { ...baseAccountID } as AccountID;
    if (object.scope !== undefined && object.scope !== null) {
      message.scope = String(object.scope);
    } else {
      message.scope = "";
    }
    if (object.xid !== undefined && object.xid !== null) {
      message.xid = String(object.xid);
    } else {
      message.xid = "";
    }
    return message;
  },

  toJSON(message: AccountID): unknown {
    const obj: any = {};
    message.scope !== undefined && (obj.scope = message.scope);
    message.xid !== undefined && (obj.xid = message.xid);
    return obj;
  },

  fromPartial(object: DeepPartial<AccountID>): AccountID {
    const message = { ...baseAccountID } as AccountID;
    if (object.scope !== undefined && object.scope !== null) {
      message.scope = object.scope;
    } else {
      message.scope = "";
    }
    if (object.xid !== undefined && object.xid !== null) {
      message.xid = object.xid;
    } else {
      message.xid = "";
    }
    return message;
  },
};

const baseAccount: object = { owner: "", state: 0, settledAt: 0 };

export const Account = {
  encode(message: Account, writer: Writer = Writer.create()): Writer {
    if (message.id !== undefined) {
      AccountID.encode(message.id, writer.uint32(10).fork()).ldelim();
    }
    if (message.owner !== "") {
      writer.uint32(18).string(message.owner);
    }
    if (message.state !== 0) {
      writer.uint32(24).int32(message.state);
    }
    if (message.balance !== undefined) {
      Coin.encode(message.balance, writer.uint32(34).fork()).ldelim();
    }
    if (message.transferred !== undefined) {
      Coin.encode(message.transferred, writer.uint32(42).fork()).ldelim();
    }
    if (message.settledAt !== 0) {
      writer.uint32(48).int64(message.settledAt);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Account {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseAccount } as Account;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = AccountID.decode(reader, reader.uint32());
          break;
        case 2:
          message.owner = reader.string();
          break;
        case 3:
          message.state = reader.int32() as any;
          break;
        case 4:
          message.balance = Coin.decode(reader, reader.uint32());
          break;
        case 5:
          message.transferred = Coin.decode(reader, reader.uint32());
          break;
        case 6:
          message.settledAt = longToNumber(reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Account {
    const message = { ...baseAccount } as Account;
    if (object.id !== undefined && object.id !== null) {
      message.id = AccountID.fromJSON(object.id);
    } else {
      message.id = undefined;
    }
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = String(object.owner);
    } else {
      message.owner = "";
    }
    if (object.state !== undefined && object.state !== null) {
      message.state = account_StateFromJSON(object.state);
    } else {
      message.state = 0;
    }
    if (object.balance !== undefined && object.balance !== null) {
      message.balance = Coin.fromJSON(object.balance);
    } else {
      message.balance = undefined;
    }
    if (object.transferred !== undefined && object.transferred !== null) {
      message.transferred = Coin.fromJSON(object.transferred);
    } else {
      message.transferred = undefined;
    }
    if (object.settledAt !== undefined && object.settledAt !== null) {
      message.settledAt = Number(object.settledAt);
    } else {
      message.settledAt = 0;
    }
    return message;
  },

  toJSON(message: Account): unknown {
    const obj: any = {};
    message.id !== undefined &&
      (obj.id = message.id ? AccountID.toJSON(message.id) : undefined);
    message.owner !== undefined && (obj.owner = message.owner);
    message.state !== undefined &&
      (obj.state = account_StateToJSON(message.state));
    message.balance !== undefined &&
      (obj.balance = message.balance
        ? Coin.toJSON(message.balance)
        : undefined);
    message.transferred !== undefined &&
      (obj.transferred = message.transferred
        ? Coin.toJSON(message.transferred)
        : undefined);
    message.settledAt !== undefined && (obj.settledAt = message.settledAt);
    return obj;
  },

  fromPartial(object: DeepPartial<Account>): Account {
    const message = { ...baseAccount } as Account;
    if (object.id !== undefined && object.id !== null) {
      message.id = AccountID.fromPartial(object.id);
    } else {
      message.id = undefined;
    }
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    } else {
      message.owner = "";
    }
    if (object.state !== undefined && object.state !== null) {
      message.state = object.state;
    } else {
      message.state = 0;
    }
    if (object.balance !== undefined && object.balance !== null) {
      message.balance = Coin.fromPartial(object.balance);
    } else {
      message.balance = undefined;
    }
    if (object.transferred !== undefined && object.transferred !== null) {
      message.transferred = Coin.fromPartial(object.transferred);
    } else {
      message.transferred = undefined;
    }
    if (object.settledAt !== undefined && object.settledAt !== null) {
      message.settledAt = object.settledAt;
    } else {
      message.settledAt = 0;
    }
    return message;
  },
};

const basePayment: object = { paymentId: "", owner: "", state: 0 };

export const Payment = {
  encode(message: Payment, writer: Writer = Writer.create()): Writer {
    if (message.accountId !== undefined) {
      AccountID.encode(message.accountId, writer.uint32(10).fork()).ldelim();
    }
    if (message.paymentId !== "") {
      writer.uint32(18).string(message.paymentId);
    }
    if (message.owner !== "") {
      writer.uint32(26).string(message.owner);
    }
    if (message.state !== 0) {
      writer.uint32(32).int32(message.state);
    }
    if (message.rate !== undefined) {
      Coin.encode(message.rate, writer.uint32(42).fork()).ldelim();
    }
    if (message.balance !== undefined) {
      Coin.encode(message.balance, writer.uint32(50).fork()).ldelim();
    }
    if (message.withdrawn !== undefined) {
      Coin.encode(message.withdrawn, writer.uint32(58).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Payment {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...basePayment } as Payment;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.accountId = AccountID.decode(reader, reader.uint32());
          break;
        case 2:
          message.paymentId = reader.string();
          break;
        case 3:
          message.owner = reader.string();
          break;
        case 4:
          message.state = reader.int32() as any;
          break;
        case 5:
          message.rate = Coin.decode(reader, reader.uint32());
          break;
        case 6:
          message.balance = Coin.decode(reader, reader.uint32());
          break;
        case 7:
          message.withdrawn = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Payment {
    const message = { ...basePayment } as Payment;
    if (object.accountId !== undefined && object.accountId !== null) {
      message.accountId = AccountID.fromJSON(object.accountId);
    } else {
      message.accountId = undefined;
    }
    if (object.paymentId !== undefined && object.paymentId !== null) {
      message.paymentId = String(object.paymentId);
    } else {
      message.paymentId = "";
    }
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = String(object.owner);
    } else {
      message.owner = "";
    }
    if (object.state !== undefined && object.state !== null) {
      message.state = payment_StateFromJSON(object.state);
    } else {
      message.state = 0;
    }
    if (object.rate !== undefined && object.rate !== null) {
      message.rate = Coin.fromJSON(object.rate);
    } else {
      message.rate = undefined;
    }
    if (object.balance !== undefined && object.balance !== null) {
      message.balance = Coin.fromJSON(object.balance);
    } else {
      message.balance = undefined;
    }
    if (object.withdrawn !== undefined && object.withdrawn !== null) {
      message.withdrawn = Coin.fromJSON(object.withdrawn);
    } else {
      message.withdrawn = undefined;
    }
    return message;
  },

  toJSON(message: Payment): unknown {
    const obj: any = {};
    message.accountId !== undefined &&
      (obj.accountId = message.accountId
        ? AccountID.toJSON(message.accountId)
        : undefined);
    message.paymentId !== undefined && (obj.paymentId = message.paymentId);
    message.owner !== undefined && (obj.owner = message.owner);
    message.state !== undefined &&
      (obj.state = payment_StateToJSON(message.state));
    message.rate !== undefined &&
      (obj.rate = message.rate ? Coin.toJSON(message.rate) : undefined);
    message.balance !== undefined &&
      (obj.balance = message.balance
        ? Coin.toJSON(message.balance)
        : undefined);
    message.withdrawn !== undefined &&
      (obj.withdrawn = message.withdrawn
        ? Coin.toJSON(message.withdrawn)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<Payment>): Payment {
    const message = { ...basePayment } as Payment;
    if (object.accountId !== undefined && object.accountId !== null) {
      message.accountId = AccountID.fromPartial(object.accountId);
    } else {
      message.accountId = undefined;
    }
    if (object.paymentId !== undefined && object.paymentId !== null) {
      message.paymentId = object.paymentId;
    } else {
      message.paymentId = "";
    }
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    } else {
      message.owner = "";
    }
    if (object.state !== undefined && object.state !== null) {
      message.state = object.state;
    } else {
      message.state = 0;
    }
    if (object.rate !== undefined && object.rate !== null) {
      message.rate = Coin.fromPartial(object.rate);
    } else {
      message.rate = undefined;
    }
    if (object.balance !== undefined && object.balance !== null) {
      message.balance = Coin.fromPartial(object.balance);
    } else {
      message.balance = undefined;
    }
    if (object.withdrawn !== undefined && object.withdrawn !== null) {
      message.withdrawn = Coin.fromPartial(object.withdrawn);
    } else {
      message.withdrawn = undefined;
    }
    return message;
  },
};

declare var self: any | undefined;
declare var window: any | undefined;
var globalThis: any = (() => {
  if (typeof globalThis !== "undefined") return globalThis;
  if (typeof self !== "undefined") return self;
  if (typeof window !== "undefined") return window;
  if (typeof global !== "undefined") return global;
  throw "Unable to locate global object";
})();

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
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}
