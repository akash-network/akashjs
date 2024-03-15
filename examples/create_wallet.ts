import { Secp256k1HdWallet } from "@cosmjs/launchpad";

async function main() {
  const wallet = await Secp256k1HdWallet.generate(undefined, { prefix: "akash" });
  await wallet.getAccounts();
}

main();
