import { MessageType, messageTypeRegistry, UnknownMessage } from "@akashnetwork/akash-api/typeRegistry";
import * as v1 from "@akashnetwork/chain-sdk/private-types/akash.v1";
import * as v1beta4 from "@akashnetwork/chain-sdk/private-types/akash.v1beta4";
import * as v1beta5 from "@akashnetwork/chain-sdk/private-types/akash.v1beta5";
import * as cosmosv1 from "@akashnetwork/chain-sdk/private-types/cosmos.v1";
import * as cosmosv1alpha1 from "@akashnetwork/chain-sdk/private-types/cosmos.v1alpha1";
import * as cosmosv1beta1 from "@akashnetwork/chain-sdk/private-types/cosmos.v1beta1";
import * as cosmosv2alpha1 from "@akashnetwork/chain-sdk/private-types/cosmos.v2alpha1";

const AKASH_TYPES: ReadonlyArray<[string, MessageType<UnknownMessage>]> = [
  ...Object.values(v1),
  ...Object.values(v1beta4),
  ...Object.values(v1beta5),
  ...Object.values(cosmosv1),
  ...Object.values(cosmosv1beta1),
  ...Object.values(cosmosv1alpha1),
  ...Object.values(cosmosv2alpha1)
]
  .filter(x => x && "$type" in x)
  .map(x => [`/${x.$type}`, x as unknown as MessageType<UnknownMessage>]);

/**
 * Retrieves the Akash type registry.
 * @returns An array of tuples containing the type URL and the corresponding message type.
 */
export const getAkashTypeRegistry: () => [string, MessageType<UnknownMessage>][] = () =>
  Array.from(messageTypeRegistry).map(([path, type]) => [`/${path}`, type]).concat(AKASH_TYPES) as [string, MessageType<UnknownMessage>][];

/**
 * Gets the type URL for a given message type.
 * @param type - The message type for which to get the URL.
 * @returns The URL string for the specified message type.
 */
export const getTypeUrl: (type: { $type: string }) => string = type => `/${type.$type}`;

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
  MsgCreateDeployment = "/akash.deployment.v1beta4.MsgCreateDeployment",
  /** Message type for closing a deployment. */
  MsgCloseDeployment = "/akash.deployment.v1beta4.MsgCloseDeployment",
  /** Message type for depositing into a deployment. */
  MsgDepositDeployment = "/akash.deployment.v1beta4.MsgDepositDeployment",
  /** Message type for updating a deployment. */
  MsgUpdateDeployment = "/akash.deployment.v1beta4.MsgUpdateDeployment",
  /** Message type for closing a group. */
  MsgCloseGroup = "/akash.deployment.v1beta4.MsgCloseGroup",
  /** Message type for pausing a group. */
  MsgPauseGroup = "/akash.deployment.v1beta4.MsgPauseGroup",
  /** Message type for starting a group. */
  MsgStartGroup = "/akash.deployment.v1beta4.MsgStartGroup",
  /** Message type for creating a lease. */
  MsgCreateLease = "/akash.market.v1beta5.MsgCreateLease"
}
