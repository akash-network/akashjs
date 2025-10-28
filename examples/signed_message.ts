/**
 * akashjs examples are working but deprecated.
 * PLEASE switch to chain-sdk which provides more developer-friendly API with IDE autocomplete support:
 * https://github.com/akash-network/chain-sdk/tree/main/ts
 */

import { Secp256k1HdWallet, StdSignDoc } from "@cosmjs/amino";

function getMessage(): StdSignDoc {
  return { value: "test message" } as unknown as StdSignDoc;
}

async function main() {
  const wallet = await Secp256k1HdWallet.generate(undefined, { prefix: "akash" });

  const [account] = await wallet.getAccounts();
  const msg = getMessage();

  const signedMessage = await wallet.signAmino(account.address, msg);

  console.log(signedMessage);
}

main();
