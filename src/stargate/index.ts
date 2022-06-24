import {
  MessageType,
  messageTypeRegistry,
  UnknownMessage,
} from "../protobuf/typeRegistry";

export const getAkashTypeRegistry: () => [
  string,
  MessageType<UnknownMessage>
][] = () =>
  Array.from(messageTypeRegistry).map(([path, type]) => [`/${path}`, type]);

export const getTypeUrl: (type: MessageType) => string = (type) =>
  `/${type.$type}`;

export enum messages {
  MsgCreateCertificate = "/akash.cert.v1beta2.MsgCreateCertificate",
  MsgRevokeCertificate = "/akash.cert.v1beta2.MsgRevokeCertificate",
  MsgCreateDeployment = "/akash.deployment.v1beta2.MsgCreateDeployment",
  MsgCloseDeployment = "/akash.deployment.v1beta2.MsgCloseDeployment",
  MsgDepositDeployment = "/akash.deployment.v1beta2.MsgDepositDeployment",
  MsgUpdateDeployment = "/akash.deployment.v1beta2.MsgUpdateDeployment",
  MsgCloseGroup = "/akash.deployment.v1beta2.MsgCloseGroup",
  MsgPauseGroup = "/akash.deployment.v1beta2.MsgPauseGroup",
  MsgStartGroup = "/akash.deployment.v1beta2.MsgStartGroup",
  MsgCreateLease = "/akash.market.v1beta2.MsgCreateLease",
}
