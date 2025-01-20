import { DirectSecp256k1HdWallet, Registry } from "@cosmjs/proto-signing";
import { SigningStargateClient } from "@cosmjs/stargate";
import { MsgCloseDeployment } from "@akashnetwork/akash-api/akash/deployment/v1beta3";
import { getAkashTypeRegistry, getTypeUrl } from "@akashnetwork/akashjs/build/stargate";
import dotenv from "dotenv";

dotenv.config({ path: "../.env" });

async function main() {
  const mnemonic = process.env.MNEMONIC || "";
  if (!mnemonic) {
    throw new Error("MNEMONIC environment variable is not set. Please set the environment variable in the .env file. See .env.sample for more information.");
  }
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
  const rpcEndpoint = "http://rpc.akashnet.net";

  const myRegistry = new Registry(getAkashTypeRegistry());

  const client = await SigningStargateClient.connectWithSigner(rpcEndpoint, wallet, {
    registry: myRegistry
  });

  const gas = await client.simulate(account.address, [msgAny], "take down deployment");

  console.log(gas);
}

main();
