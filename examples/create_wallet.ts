import { Secp256k1HdWallet } from "@cosmjs/launchpad";

async function main() {
    const wallet = await Secp256k1HdWallet
        .generate(undefined, { prefix: "akash" });

    const [account] = await wallet.getAccounts();

    // pull the address and pubKey from the first account
    const { address, pubkey } = account;
}

main();