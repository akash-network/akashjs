import { MessageType, messageTypeRegistry, UnknownMessage } from "../protobuf/typeRegistry";

export const getAkashTypeRegistry: () => ([string, MessageType<UnknownMessage>][])
  = () => Array.from(messageTypeRegistry).map(([path, type]) => [`/${path}`, type])

export const getTypeUrl: (type: MessageType) => string
  = (type) => `/${type.$type}`

export enum messages {
  MsgCreateCertificate = "/akash.cert.v1beta1.MsgCreateCertificate",
  MsgRevokeCertificate = "/akash.cert.v1beta1.MsgRevokeCertificate",
}