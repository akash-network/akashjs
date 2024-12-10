/**
 * Wallet management functionality for Akash Network
 * @module wallet
 */

import { Secp256k1HdWallet } from "@cosmjs/launchpad";
import keytar from "keytar";

let wallet: any;

/**
 * Creates a new wallet account
 * @returns {Promise<{mnemonic: string, address: string}>} The newly created wallet's mnemonic and address
 */
export async function createAccount() {
  wallet = await Secp256k1HdWallet.generate(undefined, { prefix: "akash" });
  const [{ address }] = await wallet.getAccounts();
  keytar.setPassword("AkashNetwork", address, wallet.mnemonic);
  return {
    mnemonic: wallet.mnemonic,
    address
  };
}

/**
 * Imports an existing wallet using a mnemonic phrase
 * @param {string} mnemonic - The mnemonic phrase to import
 * @returns {Promise<Array>} The imported wallet accounts
 */
export async function importAccount(mnemonic: string) {
  wallet = await Secp256k1HdWallet.fromMnemonic(mnemonic);
  const accounts = await wallet.getAccounts();
  return accounts;
}

/**
 * Retrieves a wallet account by address
 * @param {string} address - The address of the account to retrieve
 * @returns {Promise<Array>} The wallet accounts
 */
export async function getAccount(address: string) {
  const mnemonic: any = await keytar.getPassword("AkashNetwork", address);
  return importAccount(mnemonic);
}

/**
 * Gets the most recently loaded wallet
 * @returns {Promise<any>} The last loaded wallet instance
 */
export async function getLastLoaded() {
  return wallet;
}
