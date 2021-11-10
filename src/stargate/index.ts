import { MsgCreateCertificate, MsgRevokeCertificate } from "../protobuf/cert";

// duplication here for now, could make this cleaner through run time enumeration
// one for stargate, one to make life easier for devs
export const registry = [
  ["/akash.cert.v1beta1.MsgCreateCertificate", MsgCreateCertificate],
  ["/akash.cert.v1beta1.MsgRevokeCertificate", MsgRevokeCertificate],
];

export enum messages {
  MsgCreateCertificate = "/akash.cert.v1beta1.MsgCreateCertificate",
  MsgRevokeCertificate = "/akash.cert.v1beta1.MsgRevokeCertificate",
}
