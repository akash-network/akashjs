/**
 * akashjs examples are working but deprecated.
 * PLEASE switch to chain-sdk which provides more developer-friendly API with IDE autocomplete support:
 * https://github.com/akash-network/chain-sdk/tree/main/ts
 */

import { Secp256k1HdWallet } from "@cosmjs/amino";

async function main() {
  const wallet = await Secp256k1HdWallet.generate(undefined, { prefix: "akash" });
  await wallet.getAccounts();
}

main();
