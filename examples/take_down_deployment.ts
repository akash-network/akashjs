import { DirectSecp256k1HdWallet, Registry } from "@cosmjs/proto-signing";
import { SigningStargateClient } from "@cosmjs/stargate";
import { getAkashTypeRegistry, getTypeUrl } from "@akashnetwork/akashjs/build/stargate";
import { MsgCloseDeployment } from "@akashnetwork/akash-api/akash/deployment/v1beta3";

async function main() {
  const mnemonic = "your wallet mnemonic";
  const wallet = await DirectSecp256k1HdWallet.fromMnemonic(mnemonic, { prefix: "akash" });

  // get first account
  const [account] = await wallet.getAccounts();

  // Use the encode method for the message to wrap the data
  const message = MsgCloseDeployment.fromPartial({
    id: {
      dseq: "555555",
      owner: account.address
    }
  });

  // Set the appropriate typeUrl and attach the encoded message as the value
  const msgAny = {
    typeUrl: getTypeUrl(MsgCloseDeployment),
    value: message
  };

  // You can use your own RPC node, or get a list of public nodes from akashjs
  const rpcEndpoint = "http://my.rpc.node";

  const myRegistry = new Registry(getAkashTypeRegistry());

  const client = await SigningStargateClient.connectWithSigner(rpcEndpoint, wallet, {
    registry: myRegistry
  });

  const fee = {
    amount: [
      {
        denom: "uakt",
        amount: "20000"
      }
    ],
    gas: "800000"
  };

  await client.signAndBroadcast(account.address, [msgAny], fee, "take down deployment");
}

main();
