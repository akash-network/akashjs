import {
  MessageType,
  messageTypeRegistry,
  UnknownMessage,
} from "../protobuf/typeRegistry";
import {protobufPackage as protobufPackageCert} from "../protobuf/akash/cert/v1beta3/query";
import {protobufPackage as protobufPackageDeployment} from "../protobuf/akash/deployment/v1beta3/query";
import {protobufPackage as protobufPackageMarket} from "../protobuf/akash/market/v1beta4/query";

export const getAkashTypeRegistry: () => [
  string,
  MessageType<UnknownMessage>
][] = () =>
    Array.from(messageTypeRegistry).map(([path, type]) => [`/${path}`, type]);

export const getTypeUrl: (type: MessageType) => string = (type) =>
  `/${type.$type}`;

export enum messages {
  MsgCreateCertificate = `/${protobufPackageCert}.MsgCreateCertificate`,
  MsgRevokeCertificate = `/${protobufPackageCert}.MsgRevokeCertificate`,
  MsgCreateDeployment = `/${protobufPackageDeployment}.MsgCreateDeployment`,
  MsgCloseDeployment = `/${protobufPackageDeployment}.MsgCloseDeployment`,
  MsgDepositDeployment = `/${protobufPackageDeployment}.MsgDepositDeployment`,
  MsgUpdateDeployment = `/${protobufPackageDeployment}.MsgUpdateDeployment`,
  MsgCloseGroup = `/${protobufPackageDeployment}.MsgCloseGroup`,
  MsgPauseGroup = `/${protobufPackageDeployment}.MsgPauseGroup`,
  MsgStartGroup = `/${protobufPackageDeployment}.MsgStartGroup`,
  MsgCreateLease = `/${protobufPackageMarket}.MsgCreateLease`,
}
