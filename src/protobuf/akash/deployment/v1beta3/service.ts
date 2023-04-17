/* eslint-disable */
import _m0 from "protobufjs/minimal";
import {
  MsgCloseDeployment,
  MsgCloseDeploymentResponse,
  MsgCreateDeployment,
  MsgCreateDeploymentResponse,
  MsgDepositDeployment,
  MsgDepositDeploymentResponse,
  MsgUpdateDeployment,
  MsgUpdateDeploymentResponse,
} from "./deploymentmsg";
import {
  MsgCloseGroup,
  MsgCloseGroupResponse,
  MsgPauseGroup,
  MsgPauseGroupResponse,
  MsgStartGroup,
  MsgStartGroupResponse,
} from "./groupmsg";

export const protobufPackage = "akash.deployment.v1beta3";

/** Msg defines the deployment Msg service. */
export interface Msg {
  /** CreateDeployment defines a method to create new deployment given proper inputs. */
  CreateDeployment(request: MsgCreateDeployment): Promise<MsgCreateDeploymentResponse>;
  /** DepositDeployment deposits more funds into the deployment account */
  DepositDeployment(request: MsgDepositDeployment): Promise<MsgDepositDeploymentResponse>;
  /** UpdateDeployment defines a method to update a deployment given proper inputs. */
  UpdateDeployment(request: MsgUpdateDeployment): Promise<MsgUpdateDeploymentResponse>;
  /** CloseDeployment defines a method to close a deployment given proper inputs. */
  CloseDeployment(request: MsgCloseDeployment): Promise<MsgCloseDeploymentResponse>;
  /** CloseGroup defines a method to close a group of a deployment given proper inputs. */
  CloseGroup(request: MsgCloseGroup): Promise<MsgCloseGroupResponse>;
  /** PauseGroup defines a method to close a group of a deployment given proper inputs. */
  PauseGroup(request: MsgPauseGroup): Promise<MsgPauseGroupResponse>;
  /** StartGroup defines a method to close a group of a deployment given proper inputs. */
  StartGroup(request: MsgStartGroup): Promise<MsgStartGroupResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || "akash.deployment.v1beta3.Msg";
    this.rpc = rpc;
    this.CreateDeployment = this.CreateDeployment.bind(this);
    this.DepositDeployment = this.DepositDeployment.bind(this);
    this.UpdateDeployment = this.UpdateDeployment.bind(this);
    this.CloseDeployment = this.CloseDeployment.bind(this);
    this.CloseGroup = this.CloseGroup.bind(this);
    this.PauseGroup = this.PauseGroup.bind(this);
    this.StartGroup = this.StartGroup.bind(this);
  }
  CreateDeployment(request: MsgCreateDeployment): Promise<MsgCreateDeploymentResponse> {
    const data = MsgCreateDeployment.encode(request).finish();
    const promise = this.rpc.request(this.service, "CreateDeployment", data);
    return promise.then((data) => MsgCreateDeploymentResponse.decode(_m0.Reader.create(data)));
  }

  DepositDeployment(request: MsgDepositDeployment): Promise<MsgDepositDeploymentResponse> {
    const data = MsgDepositDeployment.encode(request).finish();
    const promise = this.rpc.request(this.service, "DepositDeployment", data);
    return promise.then((data) => MsgDepositDeploymentResponse.decode(_m0.Reader.create(data)));
  }

  UpdateDeployment(request: MsgUpdateDeployment): Promise<MsgUpdateDeploymentResponse> {
    const data = MsgUpdateDeployment.encode(request).finish();
    const promise = this.rpc.request(this.service, "UpdateDeployment", data);
    return promise.then((data) => MsgUpdateDeploymentResponse.decode(_m0.Reader.create(data)));
  }

  CloseDeployment(request: MsgCloseDeployment): Promise<MsgCloseDeploymentResponse> {
    const data = MsgCloseDeployment.encode(request).finish();
    const promise = this.rpc.request(this.service, "CloseDeployment", data);
    return promise.then((data) => MsgCloseDeploymentResponse.decode(_m0.Reader.create(data)));
  }

  CloseGroup(request: MsgCloseGroup): Promise<MsgCloseGroupResponse> {
    const data = MsgCloseGroup.encode(request).finish();
    const promise = this.rpc.request(this.service, "CloseGroup", data);
    return promise.then((data) => MsgCloseGroupResponse.decode(_m0.Reader.create(data)));
  }

  PauseGroup(request: MsgPauseGroup): Promise<MsgPauseGroupResponse> {
    const data = MsgPauseGroup.encode(request).finish();
    const promise = this.rpc.request(this.service, "PauseGroup", data);
    return promise.then((data) => MsgPauseGroupResponse.decode(_m0.Reader.create(data)));
  }

  StartGroup(request: MsgStartGroup): Promise<MsgStartGroupResponse> {
    const data = MsgStartGroup.encode(request).finish();
    const promise = this.rpc.request(this.service, "StartGroup", data);
    return promise.then((data) => MsgStartGroupResponse.decode(_m0.Reader.create(data)));
  }
}

interface Rpc {
  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
