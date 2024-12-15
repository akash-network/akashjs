/**
 * Wallet management functionality for Akash Network
 * @module wallet
 */

import { Secp256k1HdWallet } from "@cosmjs/launchpad";
import keytar from "keytar";

// define default prefix for wallet
export const DEFAULT_ADDRESS_PREFIX = "akash";

// default password for wallet
export const DEFAULT_ACCOUNT_PASSWORD = "AkashNetwork";

let wallet: any;

/**
 * Creates a new wallet account with a randomly generated mnemonic and returns the mnemonic and address.
 * 
 * @returns {Promise<{mnemonic: string, address: string}>} The newly created wallet's mnemonic and address.
 * 
 * @example
 * // Example usage:
 * createAccount().then(({ mnemonic, address }) => {
 *   console.log(`Mnemonic: ${mnemonic}`);
 *   console.log(`Address: ${address}`);
 * });
 */
export async function createAccount() {
  wallet = await Secp256k1HdWallet.generate(undefined, { prefix: DEFAULT_ADDRESS_PREFIX });
  const [{ address }] = await wallet.getAccounts();
  keytar.setPassword(DEFAULT_ACCOUNT_PASSWORD, address, wallet.mnemonic);
  return {
    mnemonic: wallet.mnemonic,
    address
  };
}

/**
 * Imports an existing wallet using a mnemonic phrase and returns a promise with algo, pubkey, and address
 * 
 * @param {string} mnemonic - The mnemonic phrase to import
 * @returns {Promise<Array>} The imported wallet accounts
 * 
 * @example 
 * // Example usage:
 * importAccount("family maximum shoulder all reduce trash across beach gun law flame bird").then((accounts) => {
 *   console.log(accounts);
 * });
 */
export async function importAccount(mnemonic: string) {
  wallet = await Secp256k1HdWallet.fromMnemonic(mnemonic, { prefix: DEFAULT_ADDRESS_PREFIX });
  const accounts = await wallet.getAccounts();
  return accounts;
}

/**
 * Retrieves a wallet account by address.
 * 
 * This function fetches the mnemonic associated with the given address from local storage
 * and imports the account using that mnemonic.
 * 
 * @param {string} address - The address of the account to retrieve.
 * @returns {Promise<Array>} The wallet accounts associated with the given address.
 * 
 * @throws Will throw an error if the mnemonic for the given address is not found in local storage.
 * 
 * @example
 * // Example usage:
 * getAccount("akash1xyz...").then((accounts) => {
 *   console.log(accounts);
 * }).catch((error) => {
 *   console.error("Error retrieving account:", error);
 * });
 */
export async function getAccount(address: string) {
  const mnemonic: any = await keytar.getPassword(DEFAULT_ACCOUNT_PASSWORD, address);
  // if the mnemonic is not found, throw an error
  if (!mnemonic) {
    throw new Error("Unable to find mnemonic for the given address from the local storage");
  }
  return importAccount(mnemonic);
}

/**
 * Gets the most recently loaded wallet
 * @returns {Promise<any>} The last loaded wallet instance
 */
export async function getLastLoaded() {
  return wallet;
}
