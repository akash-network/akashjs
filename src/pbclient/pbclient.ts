import { Message } from "../stargate";
import { AminoMsg } from "@cosmjs/amino";
import { MsgCreateCertificate, MsgRevokeCertificate } from "@akashnetwork/akash-api/akash/cert/v1beta3";

const FEE = {
  amount: [
    {
      denom: "uakt",
      amount: "2500"
    }
  ],
  gas: "100000"
};

export function createAminoMessage(message: Message, messageBody: AminoMsg) {
  return {
    typeUrl: message,
    value: messageBody
  };
}

type WithoutType<T> = Omit<T, "$type">;
type MessageTypes = {
  [Message.MsgCreateCertificate]: WithoutType<MsgCreateCertificate>;
  [Message.MsgRevokeCertificate]: Omit<WithoutType<MsgRevokeCertificate>, "id"> & {
    id: WithoutType<MsgRevokeCertificate["id"]>;
  };
};

export function createStarGateMessage<T extends keyof MessageTypes>(message: T, messageBody: MessageTypes[T]) {
  return {
    message: {
      typeUrl: message,
      value: messageBody
    },
    fee: FEE
  };
}
