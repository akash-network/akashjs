/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { MsgCloseBid, MsgCloseBidResponse, MsgCreateBid, MsgCreateBidResponse } from "./bid";
import {
  MsgCloseLease,
  MsgCloseLeaseResponse,
  MsgCreateLease,
  MsgCreateLeaseResponse,
  MsgWithdrawLease,
  MsgWithdrawLeaseResponse,
} from "./lease";

export const protobufPackage = "akash.market.v1beta3";

/** Msg defines the market Msg service */
export interface Msg {
  /** CreateBid defines a method to create a bid given proper inputs. */
  CreateBid(request: MsgCreateBid): Promise<MsgCreateBidResponse>;
  /** CloseBid defines a method to close a bid given proper inputs. */
  CloseBid(request: MsgCloseBid): Promise<MsgCloseBidResponse>;
  /** WithdrawLease withdraws accrued funds from the lease payment */
  WithdrawLease(request: MsgWithdrawLease): Promise<MsgWithdrawLeaseResponse>;
  /** CreateLease creates a new lease */
  CreateLease(request: MsgCreateLease): Promise<MsgCreateLeaseResponse>;
  /** CloseLease defines a method to close an order given proper inputs. */
  CloseLease(request: MsgCloseLease): Promise<MsgCloseLeaseResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || "akash.market.v1beta3.Msg";
    this.rpc = rpc;
    this.CreateBid = this.CreateBid.bind(this);
    this.CloseBid = this.CloseBid.bind(this);
    this.WithdrawLease = this.WithdrawLease.bind(this);
    this.CreateLease = this.CreateLease.bind(this);
    this.CloseLease = this.CloseLease.bind(this);
  }
  CreateBid(request: MsgCreateBid): Promise<MsgCreateBidResponse> {
    const data = MsgCreateBid.encode(request).finish();
    const promise = this.rpc.request(this.service, "CreateBid", data);
    return promise.then((data) => MsgCreateBidResponse.decode(_m0.Reader.create(data)));
  }

  CloseBid(request: MsgCloseBid): Promise<MsgCloseBidResponse> {
    const data = MsgCloseBid.encode(request).finish();
    const promise = this.rpc.request(this.service, "CloseBid", data);
    return promise.then((data) => MsgCloseBidResponse.decode(_m0.Reader.create(data)));
  }

  WithdrawLease(request: MsgWithdrawLease): Promise<MsgWithdrawLeaseResponse> {
    const data = MsgWithdrawLease.encode(request).finish();
    const promise = this.rpc.request(this.service, "WithdrawLease", data);
    return promise.then((data) => MsgWithdrawLeaseResponse.decode(_m0.Reader.create(data)));
  }

  CreateLease(request: MsgCreateLease): Promise<MsgCreateLeaseResponse> {
    const data = MsgCreateLease.encode(request).finish();
    const promise = this.rpc.request(this.service, "CreateLease", data);
    return promise.then((data) => MsgCreateLeaseResponse.decode(_m0.Reader.create(data)));
  }

  CloseLease(request: MsgCloseLease): Promise<MsgCloseLeaseResponse> {
    const data = MsgCloseLease.encode(request).finish();
    const promise = this.rpc.request(this.service, "CloseLease", data);
    return promise.then((data) => MsgCloseLeaseResponse.decode(_m0.Reader.create(data)));
  }
}

interface Rpc {
  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
