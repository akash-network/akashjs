import { Secp256k1HdWallet, StdSignDoc } from "@cosmjs/launchpad";

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
