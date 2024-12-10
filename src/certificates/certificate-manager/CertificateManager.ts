// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import rs from "jsrsasign";

/**
 * Represents the PEM encoded certificate, public key, and private key.
 */
export interface CertificatePem {
  cert: string;
  publicKey: string;
  privateKey: string;
}

/**
 * Represents the information extracted from a certificate.
 */
export interface CertificateInfo {
  hSerial: string;
  sIssuer: string;
  sSubject: string;
  sNotBefore: string;
  sNotAfter: string;
  issuedOn: Date;
  expiresOn: Date;
}

/**
 * Options for specifying the validity range of a certificate.
 */
export interface ValidityRangeOptions {
  validFrom?: Date;
  validTo?: Date;
}

/**
 * Manages the creation and parsing of certificates.
 */
export class CertificateManager {
  /**
   * Parses a PEM encoded certificate and extracts its information.
   * @param certPEM - The PEM encoded certificate string.
   * @returns An object containing the certificate information.
   * @example
   * const certificateManager = new CertificateManager();
   * const pem = certificateManager.generatePEM('exampleAddress');
   * const certInfo = certificateManager.parsePem(pem.cert);
   * console.log(certInfo);
   */
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

  /**
   * Generates a PEM encoded certificate, public key, and private key.
   * @param address - The address to be used as the certificate's subject and issuer.
   * @param options - Optional validity range for the certificate.
   * @returns An object containing the PEM encoded certificate, public key, and private key.
   * @example
   * const certificateManager = new CertificateManager();
   * const pem = certificateManager.generatePEM('exampleAddress');
   * console.log('Certificate:', pem.cert);
   * console.log('Public Key:', pem.publicKey);
   * console.log('Private Key:', pem.privateKey);
   */
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

  /**
   * Creates a validity range for a certificate.
   * @param options - Optional validity range options.
   * @returns An object containing the notBefore and notAfter date strings.
   */
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

  /**
   * Converts a Date object to a string in the format YYMMDDHHMMSSZ.
   * @param date - The date to convert.
   * @returns The formatted date string.
   * @example
   * const certificateManager = new CertificateManager();
   * const dateStr = certificateManager.dateToStr(new Date('2024-05-07T12:23:50.000Z'));
   * console.log(dateStr); // "240507122350Z"
   */
  private dateToStr(date: Date): string {
    const year = date.getUTCFullYear().toString().substring(2).padStart(2, "0");
    const month = (date.getUTCMonth() + 1).toString().padStart(2, "0");
    const day = date.getUTCDate().toString().padStart(2, "0");
    const hours = date.getUTCHours().toString().padStart(2, "0");
    const minutes = date.getUTCMinutes().toString().padStart(2, "0");
    const secs = date.getUTCSeconds().toString().padStart(2, "0");

    return `${year}${month}${day}${hours}${minutes}${secs}Z`;
  }

  /**
   * Converts a string in the format YYMMDDHHMMSSZ to a Date object.
   * @param str - The string to convert.
   * @returns The corresponding Date object.
   * @example
   * const certificateManager = new CertificateManager();
   * const date = certificateManager.strToDate("240507122350Z");
   * console.log(date.toISOString()); // "2024-05-07T12:23:50.000Z"
   */
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
