import { faker } from "@faker-js/faker";

import { CertificateManager } from "./CertificateManager";

describe("CertificateManager", () => {
  let certificateManager: CertificateManager;
  let address: string;

  beforeEach(() => {
    certificateManager = new CertificateManager();
    address = `akash1${faker.string.alpha({ length: 38 })}`;
  });

  describe("prototype.generateCertificate", () => {
    it("should generate certificate PEMs with the default validity range", () => {
      const now = new Date();
      now.setMilliseconds(0);
      const inOneYear = getTime1yearFrom(now);
      const pem = certificateManager.generatePEM(address);
      const meta = certificateManager.parsePem(pem.certKey);

      expect(pem).toMatchObject({
        certKey: expect.stringMatching(/^-----BEGIN CERTIFICATE-----[\s\S]*-----END CERTIFICATE-----\r\n$/),
        publicKey: expect.stringMatching(/^-----BEGIN EC PUBLIC KEY-----[\s\S]*-----END EC PUBLIC KEY-----\r\n$/),
        privateKey: expect.stringMatching(/^-----BEGIN PRIVATE KEY-----[\s\S]*-----END PRIVATE KEY-----\r\n$/)
      });
      expect(new Date(meta.issuedOn).getTime()).toBeGreaterThanOrEqual(now.getTime());
      expect(new Date(meta.issuedOn).getTime()).toBeLessThan(new Date().getTime());
      expect(new Date(meta.expiresOn).getTime()).toBeGreaterThanOrEqual(inOneYear);
      expect(new Date(meta.issuedOn).getTime()).toBeLessThan(getTime1yearFrom(new Date()));
    });
  });

  it("should generate certificate PEMs with the provided validity range", () => {
    const now = new Date();
    const MONTH = 1000 * 60 * 60 * 24 * 30;
    const inOneMonth = new Date(now.getTime() + MONTH);
    const inTwoMonths = new Date(now.getTime() + MONTH * 2);
    const pem = certificateManager.generatePEM(address, {
      validFrom: inOneMonth,
      validTo: inTwoMonths
    });
    const meta = certificateManager.parsePem(pem.certKey);

    expect(pem).toMatchObject({
      certKey: expect.stringMatching(/^-----BEGIN CERTIFICATE-----[\s\S]*-----END CERTIFICATE-----\r\n$/),
      publicKey: expect.stringMatching(/^-----BEGIN EC PUBLIC KEY-----[\s\S]*-----END EC PUBLIC KEY-----\r\n$/),
      privateKey: expect.stringMatching(/^-----BEGIN PRIVATE KEY-----[\s\S]*-----END PRIVATE KEY-----\r\n$/)
    });

    inOneMonth.setMilliseconds(0);
    inTwoMonths.setMilliseconds(0);
    expect(new Date(meta.issuedOn).getTime()).toBe(inOneMonth.getTime());
    expect(new Date(meta.expiresOn).getTime()).toBe(inTwoMonths.getTime());
  });

  describe("prototype.parsePem", () => {
    it("should extract certificate data", () => {
      const cert = certificateManager.parsePem(certificateManager.generatePEM(address).certKey);

      expect(cert).toMatchObject({
        hSerial: expect.any(String),
        sIssuer: expect.any(String),
        sSubject: expect.any(String),
        sNotBefore: expect.any(String),
        sNotAfter: expect.any(String),
        issuedOn: expect.any(Date),
        expiresOn: expect.any(Date)
      });
    });
  });

  describe("prototype.strToDate", () => {
    it("should convert string to date", () => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      const date = certificateManager.strToDate("240507122350Z");

      expect(date).toBeInstanceOf(Date);
      expect(date.toISOString()).toBe("2024-05-07T12:23:50.000Z");
    });
  });

  describe("prototype.dateToStr", () => {
    it("should convert date to string", () => {
      const date = new Date("2024-05-07T12:23:50.000Z");
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      const str = certificateManager.dateToStr(date);

      expect(str).toBe("240507122350Z");
    });
  });
});

function getTime1yearFrom(date = new Date()): number {
  const clone = new Date(date);
  const inOneYear = new Date(date);
  inOneYear.setFullYear(clone.getFullYear() + 1);
  return inOneYear.getTime();
}
