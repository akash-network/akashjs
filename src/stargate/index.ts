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
  MsgCreateCertificate = "/akash.cert.v1beta3.MsgCreateCertificate",
  MsgRevokeCertificate = "/akash.cert.v1beta3.MsgRevokeCertificate",
  MsgCreateDeployment = "/akash.deployment.v1beta3.MsgCreateDeployment",
  MsgCloseDeployment = "/akash.deployment.v1beta3.MsgCloseDeployment",
  MsgDepositDeployment = "/akash.deployment.v1beta3.MsgDepositDeployment",
  MsgUpdateDeployment = "/akash.deployment.v1beta3.MsgUpdateDeployment",
  MsgCloseGroup = "/akash.deployment.v1beta3.MsgCloseGroup",
  MsgPauseGroup = "/akash.deployment.v1beta3.MsgPauseGroup",
  MsgStartGroup = "/akash.deployment.v1beta3.MsgStartGroup",
  MsgCreateLease = "/akash.market.v1beta3.MsgCreateLease",
}
