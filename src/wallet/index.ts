import { Secp256k1HdWallet } from "@cosmjs/launchpad";
import keytar from "keytar";

let wallet: any;

export async function createAccount(password: string) {
  wallet = await Secp256k1HdWallet.generate(undefined, { prefix: "akash" });
  const [{ address }] = await wallet.getAccounts();
  keytar.setPassword("AkashNetwork", address, wallet.mnemonic);
  return {
    mnemonic: wallet.mnemonic,
    address,
  };
}

export async function getAccount(address: string) {
  const mnemonic: any = await keytar.getPassword("AkashNetwork", address);
  wallet = await Secp256k1HdWallet.fromMnemonic(mnemonic);
  return wallet;
}

export async function getLastLoaded() {
  return wallet;
}
