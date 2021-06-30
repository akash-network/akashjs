import { messages } from "../stargate";

// dynamically determine max gas
const fee = {
  amount: [
    {
      denom: "uakt",
      amount: "1000",
    },
  ],
  gas: "100000",
};

export function createStarGateMessage(message: messages, messageBody: any) {
  return {
    message: {
      typeUrl: message,
      value: messageBody,
    },
    fee: fee,
  };
}
