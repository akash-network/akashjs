import { faker } from "@faker-js/faker";

import { createAminoMessage } from "./pbclient";
import { Message } from "../stargate";
import { AminoMsg } from "@cosmjs/amino";

describe("createAminoMessage", () => {
  it("creates an amino message", () => {
    const message = faker.helpers.arrayElement(Object.values(Message));
    const messageBody: AminoMsg = {
      type: faker.string.alpha(10),
      value: faker.string.alpha(10)
    };
    const result = createAminoMessage(message, messageBody);

    expect(result).toEqual({
      typeUrl: message,
      value: messageBody
    });
  });
});
