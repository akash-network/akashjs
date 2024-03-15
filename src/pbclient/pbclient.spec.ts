import { faker } from "@faker-js/faker";

import { createAminoMessage } from "./pbclient";
import { messages } from "../stargate";

describe("createAminoMessage", () => {
  it("creates an amino message", () => {
    const message = faker.helpers.arrayElement(Object.values(messages));
    const messageBody = "messageBody";
    const result = createAminoMessage(message, messageBody);
    expect(result).toEqual({
      typeUrl: message,
      value: messageBody
    });
  });
});
