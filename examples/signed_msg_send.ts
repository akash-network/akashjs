import { coins, DirectSecp256k1HdWallet, Registry } from "@cosmjs/proto-signing";
import { defaultRegistryTypes, SigningStargateClient } from "@cosmjs/stargate";

async function main() {

    const mnemonic = "your wallet mnemonic";
    const wallet = await DirectSecp256k1HdWallet.fromMnemonic(mnemonic, { prefix: "akash" });

    // get first account
    const [account] = await wallet.getAccounts();

    // Setup a send message
    const message = {
        fromAddress: account.address,
        toAddress: "akash123...",
        amount: coins(10, "akt"),
    };

    // Set the appropriate typeUrl and attach the encoded message as the value
    const msgAny = {
        typeUrl: '/cosmos.bank.v1beta1.MsgSend',
        value: message
    };

    // You can use your own RPC node, or get a list of public nodes from akashjs
    const rpcEndpoint = "http://your.rpc.node";

    const myRegistry = new Registry(
        defaultRegistryTypes
    );

    const client = await SigningStargateClient.connectWithSigner(
        rpcEndpoint,
        wallet,
        {
            registry: myRegistry
        }
    );

    const fee = {
        amount: [
            {
                denom: "uakt",
                amount: "5000",
            },
        ],
        gas: "800000",
    };

    const msg = await client.sign(
        account.address,
        [msgAny],
        fee,
        "take down deployment"
    );

    console.log(msg);
}

main();
