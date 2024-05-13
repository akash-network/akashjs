// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import rs from "jsrsasign";

export interface CertificatePem {
  cert: string;
  publicKey: string;
  privateKey: string;
}

export interface CertificateInfo {
  hSerial: string;
  sIssuer: string;
  sSubject: string;
  sNotBefore: string;
  sNotAfter: string;
  issuedOn: Date;
  expiresOn: Date;
}

export interface ValidityRangeOptions {
  validFrom?: Date;
  validTo?: Date;
}

export class CertificateManager {
  parsePem(certPEM: string): CertificateInfo {
    const certificate = new rs.X509();
    certificate.readCertPEM(certPEM);
    const hSerial: string = certificate.getSerialNumberHex();
    const sIssuer: string = certificate.getIssuerString();
    const sSubject: string = certificate.getSubjectString();
    const sNotBefore: string = certificate.getNotBefore();
    const sNotAfter: string = certificate.getNotAfter();

    return {
      hSerial,
      sIssuer,
      sSubject,
      sNotBefore,
      sNotAfter,
      issuedOn: this.strToDate(sNotBefore),
      expiresOn: this.strToDate(sNotAfter)
    };
  }

  generatePEM(address: string, options?: ValidityRangeOptions): CertificatePem {
    const { notBeforeStr, notAfterStr } = this.createValidityRange(options);
    const { prvKeyObj, pubKeyObj } = rs.KEYUTIL.generateKeypair("EC", "secp256r1");
    const cert = new rs.KJUR.asn1.x509.Certificate({
      version: 3,
      serial: { int: Math.floor(new Date().getTime() * 1000) },
      issuer: { str: "/CN=" + address },
      notbefore: notBeforeStr,
      notafter: notAfterStr,
      subject: { str: "/CN=" + address },
      sbjpubkey: pubKeyObj,
      ext: [
        { extname: "keyUsage", critical: true, names: ["keyEncipherment", "dataEncipherment"] },
        {
          extname: "extKeyUsage",
          array: [{ name: "clientAuth" }]
        },
        { extname: "basicConstraints", cA: true, critical: true }
      ],
      sigalg: "SHA256withECDSA",
      cakey: prvKeyObj
    });
    const publicKey: string = rs.KEYUTIL.getPEM(pubKeyObj, "PKCS8PUB").replaceAll("PUBLIC KEY", "EC PUBLIC KEY");
    const certPEM: string = cert.getPEM();

    return {
      cert: certPEM,
      publicKey,
      privateKey: rs.KEYUTIL.getPEM(prvKeyObj, "PKCS8PRV")
    };
  }

  private createValidityRange(options?: ValidityRangeOptions) {
    const notBefore = options?.validFrom || new Date();
    const notAfter = options?.validTo || new Date();

    if (!options?.validTo) {
      notAfter.setFullYear(notBefore.getFullYear() + 1);
    }

    const notBeforeStr = this.dateToStr(notBefore);
    const notAfterStr = this.dateToStr(notAfter);

    return { notBeforeStr, notAfterStr };
  }

  private dateToStr(date: Date): string {
    const year = date.getUTCFullYear().toString().substring(2).padStart(2, "0");
    const month = (date.getUTCMonth() + 1).toString().padStart(2, "0");
    const day = date.getUTCDate().toString().padStart(2, "0");
    const hours = date.getUTCHours().toString().padStart(2, "0");
    const minutes = date.getUTCMinutes().toString().padStart(2, "0");
    const secs = date.getUTCSeconds().toString().padStart(2, "0");

    return `${year}${month}${day}${hours}${minutes}${secs}Z`;
  }

  private strToDate(str: string): Date {
    const year = parseInt(`20${str.substring(0, 2)}`);
    const month = parseInt(str.substring(2, 4)) - 1;
    const day = parseInt(str.substring(4, 6));
    const hours = parseInt(str.substring(6, 8));
    const minutes = parseInt(str.substring(8, 10));
    const secs = parseInt(str.substring(10, 12));

    return new Date(Date.UTC(year, month, day, hours, minutes, secs));
  }
}
