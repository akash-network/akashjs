/**
 * @module generate509
 * Provides functionality to generate X.509 certificates for client authentication
 */

import { arrayBufferToString, toBase64 } from "pvutils";
import * as asn1js from "asn1js";

global.crypto = require("node:crypto");

const {
  getCrypto,
  getAlgorithmParameters,
  AttributeTypeAndValue,
  Certificate,
  BasicConstraints,
  Extension,
  ExtKeyUsage
  // eslint-disable-next-line @typescript-eslint/no-var-requires
} = require("pkijs/build");

const HASH_ALG = "SHA-256";
const SIGN_ALG = "ECDSA";

/**
 * Interface representing the PEM-formatted certificate components
 * @interface
 */
export interface pems {
  /** The Certificate Signing Request (CSR) in PEM format */
  csr: string;
  /** The public key in PEM format */
  publicKey: string;
  /** The private key in PEM format */
  privateKey: string;
}

/**
 * Creates a new X.509 certificate for the given address
 * @param {string} address - The address to create the certificate for
 * @returns {Promise<pems>} Object containing the PEM-formatted certificate components
 * @example
 * const address = "exampleAddress";
 * create(address).then(cert => {
 *   console.log(cert.csr); // Outputs the CSR in PEM format
 *   console.log(cert.publicKey); // Outputs the public key in PEM format
 *   console.log(cert.privateKey); // Outputs the private key in PEM format
 * });
 */
export async function create(address: string): Promise<pems> {
  // Get the crypto handler for key generation
  const crypto = getCrypto();

  // Get algorithm parameters for key generation
  const algo = getAlgorithmParameters(SIGN_ALG, "generatekey");

  // Generate a key pair using the specified algorithm
  const keyPair = await crypto.generateKey(algo.algorithm, true, algo.usages);

  // Create a Certificate Signing Request (CSR) with the generated key pair
  const cert = await createCSR(keyPair, HASH_ALG, {
    commonName: address
  });

  // Set the validity period of the certificate to 365 days from today
  setValidityPeriod(cert, new Date(), 365);

  // Convert the certificate to BER format
  const certBER = cert.toSchema(true).toBER(false);

  // Export the public key in SPKI format
  const spki = await crypto.exportKey("spki", keyPair.privateKey);

  // Export the private key in PKCS#8 format
  const pkcs8 = await crypto.exportKey("pkcs8", keyPair.privateKey);

  // Return the PEM-formatted certificate components
  return {
    csr: `-----BEGIN CERTIFICATE-----\n${formatPEM(toBase64(arrayBufferToString(certBER)))}\n-----END CERTIFICATE-----`,
    privateKey: `-----BEGIN PRIVATE KEY-----\n${formatPEM(toBase64(arrayBufferToString(pkcs8)))}\n-----END PRIVATE KEY-----`,
    publicKey: `-----BEGIN EC PUBLIC KEY-----\n${formatPEM(toBase64(arrayBufferToString(spki)))}\n-----END EC PUBLIC KEY-----`
  };
}

/**
 * Creates a Certificate Signing Request (CSR) with the given parameters
 * @param {Object} keyPair - The public/private key pair
 * @param {string} keyPair.privateKey - The private key
 * @param {string} keyPair.publicKey - The public key
 * @param {string} hashAlg - The hashing algorithm to use
 * @param {Object} params - Certificate parameters
 * @param {string} params.commonName - The common name for the certificate
 * @returns {Promise<Certificate>} The generated certificate
 * @private
 * @example
 * const keyPair = { privateKey: "privateKey", publicKey: "publicKey" };
 * const hashAlg = "SHA-256";
 * const params = { commonName: "example.com" };
 * createCSR(keyPair, hashAlg, params).then(cert => {
 *   console.log(cert); // Outputs the generated certificate
 * });
 */
async function createCSR(keyPair: { privateKey: string; publicKey: string }, hashAlg: string, { commonName }: { commonName: string }) {
  const cert = new Certificate();
  cert.version = 2; // Set certificate version to v3

  // Set a unique serial number for the certificate
  cert.serialNumber = new asn1js.Integer({ value: Date.now() });

  // Set the issuer's common name
  cert.issuer.typesAndValues.push(
    new AttributeTypeAndValue({
      type: "2.5.4.3", // Common name
      value: new asn1js.PrintableString({
        value: commonName
      })
    })
  );

  // Set the subject's common name
  cert.subject.typesAndValues.push(
    new AttributeTypeAndValue({
      type: "2.5.4.3", // Common name
      value: new asn1js.PrintableString({
        value: commonName
      })
    })
  );

  cert.attributes = []; // Initialize attributes array
  cert.extensions = []; // Initialize extensions array

  //region "KeyUsage" extension
  const bitArray = new ArrayBuffer(1);
  const bitView = new Uint8Array(bitArray);

  bitView[0] |= 0x10; // Enable data encipherment
  bitView[0] |= 0x20; // Enable key encipherment

  const keyUsage = new asn1js.BitString({ valueHex: bitArray });

  cert.extensions.push(
    new Extension({
      extnID: "2.5.29.15",
      critical: true,
      extnValue: keyUsage.toBER(false),
      parsedValue: keyUsage // Parsed value for well-known extensions
    })
  );
  //endregion

  //region Extended Key Usage
  const extKeyUsage = new ExtKeyUsage({
    keyPurposes: [
      "1.3.6.1.5.5.7.3.2" // id-kp-clientAuth
    ]
  });

  cert.extensions.push(
    new Extension({
      extnID: "2.5.29.37",
      extnValue: extKeyUsage.toSchema().toBER(false),
      parsedValue: extKeyUsage // Parsed value for well-known extensions
    })
  );
  //endregion

  //region "BasicConstraints" extension
  const basicConstr = new BasicConstraints({
    cA: false // Indicate that this is not a CA certificate
  });

  cert.extensions.push(
    new Extension({
      extnID: "2.5.29.19",
      critical: true,
      extnValue: basicConstr.toSchema().toBER(false),
      parsedValue: basicConstr // Parsed value for well-known extensions
    })
  );
  //endregion

  // Import the public key into the certificate
  await cert.subjectPublicKeyInfo.importKey(keyPair.publicKey);

  // Sign the certificate with the private key
  await cert.sign(keyPair.privateKey, hashAlg);

  return cert; // Return the generated certificate
}

/**
 * Formats a PEM string by adding line breaks every 64 characters
 * @param {string} pemString - The PEM string to format
 * @returns {string} The formatted PEM string
 * @private
 * @example
 * const pemString = "MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA...";
 * const formattedPEM = formatPEM(pemString);
 * console.log(formattedPEM); // Outputs the PEM string with line breaks
 */
function formatPEM(pemString: string) {
  return pemString.replace(/(.{64})/g, "$1\n"); // Insert line breaks every 64 characters
}

/**
 * Sets the validity period for a certificate
 * @param {Object} cert - The certificate object
 * @param {Date} startDate - The start date of the validity period
 * @param {number} durationInDays - The duration in days for which the certificate should be valid
 * @private
 * @example
 * const cert = { notBefore: { value: new Date() }, notAfter: { value: new Date() } };
 * const startDate = new Date();
 * const durationInDays = 365;
 * setValidityPeriod(cert, startDate, durationInDays);
 * console.log(cert.notBefore.value); // Outputs the start date
 * console.log(cert.notAfter.value); // Outputs the end date
 */
function setValidityPeriod(cert: { notBefore: { value: Date }; notAfter: { value: Date } }, startDate: Date, durationInDays: number) {
  // Normalize start date to midnight
  const start = new Date(startDate);
  start.setHours(0);
  start.setMinutes(0);
  start.setSeconds(0);

  // Calculate end date based on duration
  const end = new Date(start.getTime() + durationInDays * 24 * 60 * 60 * 1000);

  // Set the validity period on the certificate
  cert.notBefore.value = start;
  cert.notAfter.value = end;
}
