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

/**
 * Creates an Amino message object.
 *
 * @param {Message} message - The type of the message.
 * @param {AminoMsg} messageBody - The body of the message.
 * @returns {object} The Amino message object.
 */
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

/**
 * Creates a Stargate message object with a fee.
 *
 * @template T
 * @param {T} message - The type of the message.
 * @param {MessageTypes[T]} messageBody - The body of the message.
 * @returns {object} The Stargate message object with a fee.
 */
export function createStarGateMessage<T extends keyof MessageTypes>(message: T, messageBody: MessageTypes[T]) {
  return {
    message: {
      typeUrl: message,
      value: messageBody
    },
    fee: FEE
  };
}
