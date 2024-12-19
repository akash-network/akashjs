import { MessageType, messageTypeRegistry } from "@akashnetwork/akash-api/typeRegistry";

/**
 * Retrieves the Akash type registry.
 * @returns An array of tuples containing the type URL and the corresponding message type.
 */
export const getAkashTypeRegistry: () => [string, MessageType][] = () => Array.from(messageTypeRegistry).map(([path, type]) => [`/${path}`, type]);

/**
 * Gets the type URL for a given message type.
 * @param type - The message type for which to get the URL.
 * @returns The URL string for the specified message type.
 */
export const getTypeUrl: (type: MessageType) => string = type => `/${type.$type}`;

/**
 * Enum for Akash message types.
 * @enum {string}
 */
export enum Message {
  /** Message type for creating a certificate. */
  MsgCreateCertificate = "/akash.cert.v1.MsgCreateCertificate",
  /** Message type for revoking a certificate. */
  MsgRevokeCertificate = "/akash.cert.v1.MsgRevokeCertificate",
  /** Message type for creating a deployment. */
  MsgCreateDeployment = "/akash.deployment.v1.MsgCreateDeployment",
  /** Message type for closing a deployment. */
  MsgCloseDeployment = "/akash.deployment.v1.MsgCloseDeployment",
  /** Message type for depositing into a deployment. */
  MsgDepositDeployment = "/akash.deployment.v1.MsgDepositDeployment",
  /** Message type for updating a deployment. */
  MsgUpdateDeployment = "/akash.deployment.v1.MsgUpdateDeployment",
  /** Message type for closing a group. */
  MsgCloseGroup = "/akash.deployment.v1.MsgCloseGroup",
  /** Message type for pausing a group. */
  MsgPauseGroup = "/akash.deployment.v1.MsgPauseGroup",
  /** Message type for starting a group. */
  MsgStartGroup = "/akash.deployment.v1.MsgStartGroup",
  /** Message type for creating a lease. */
  MsgCreateLease = "/akash.market.v1.MsgCreateLease"
}
