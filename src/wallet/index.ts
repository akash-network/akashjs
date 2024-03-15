import { Secp256k1HdWallet } from "@cosmjs/launchpad";
import keytar from "keytar";

let wallet: any;

export async function createAccount(password: string) {
  wallet = await Secp256k1HdWallet.generate(undefined, { prefix: "akash" });
  const [{ address }] = await wallet.getAccounts();
  keytar.setPassword("AkashNetwork", address, wallet.mnemonic);
  return {
    mnemonic: wallet.mnemonic,
    address
  };
}

export async function importAccount(mnemonic: string) {
  wallet = await Secp256k1HdWallet.fromMnemonic(mnemonic);
  const accounts = await wallet.getAccounts();
  return accounts;
}

export async function getAccount(address: string) {
  const mnemonic: any = await keytar.getPassword("AkashNetwork", address);
  return importAccount(mnemonic);
}

export async function getLastLoaded() {
  return wallet;
}
