import { faker } from "@faker-js/faker";

import { create } from "./generate509";

describe("generate509", () => {
  it("should generate a CSR", async () => {
    const address = `akash1${faker.string.alpha({ length: 38 })}`;
    const cert = await create(address);

    expect(cert).toMatchObject({
      csr: expect.stringMatching(/^-----BEGIN CERTIFICATE-----[\s\S]*-----END CERTIFICATE-----$/),
      publicKey: expect.stringMatching(/^-----BEGIN EC PUBLIC KEY-----[\s\S]*-----END EC PUBLIC KEY-----$/),
      privateKey: expect.stringMatching(/^-----BEGIN PRIVATE KEY-----[\s\S]*-----END PRIVATE KEY-----$/)
    });
  });
});
