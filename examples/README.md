# AkashJS Examples

This directory contains several examples of how to interact with the Akash networking using AkashJS and CosmJS.

## Setup

You can integrate the following examples in either a nodejs environment with self managed keys/wallet or in the browser using wallet extensions.

- [How to setup for node.js](#how-to-setup-for-nodejs)
- [How to setup for browser](#how-to-setup-for-browser)

Once you have a wallet setup, you need to fund it with $AKT tokens to pay for transactions fees and deployments.

- [Purchasing Akash Tokens](https://akash.network/docs/getting-started/token-and-wallets/#purchasing-akash-tokens)

Environment variable setup:

- Create an `.env` file at the root of the repo following the [.env.sample](../.env.sample)

## Code examples

Please follow the following examples to interact with the Akash Network:

- [Create wallet](./create_wallet.ts)
- [Create deployment](./create_deployment.ts)
- [Close deployment](./take_down_deployment.ts)
- [Estimate gas](./estimate_gas.ts)
- [Send tokens](./signed_msg_send.ts)
- [Amino signing](./signed_message.ts)

Querying examples:

- [Get deployments](./get_deployments.ts)
- [Get lease status](./get_lease_status.ts)
- [Get providers](./list_all_providers.ts)
- [Get single provider](./details_of_single_provider.ts)
- [Get network state](./get_state.ts)

## Running an example

To run an example, you need to make the required changes to the code and use typescript compiler. You can use the following command to run the example. E.g. to run the `create_deployment.ts` example:

```bash
npm run example create_deployment.ts
// or other examples
npm run example <name_of_the_example.ts>
```

## How to setup for nodejs

First you need a wallet. You can either [create one](#wallet-creation) with programatically cosmjs libraries or the **recommended** way is through an existing browser wallet extension where you can save the seed phrase (mnemonic) somewhere secure and use it to import the wallet like [this example](https://github.com/akash-network/akashjs/blob/main/examples/create_deployment.ts#L44).

## How to setup for browser

We strongly recommend to use [cosmos-kit](https://docs.cosmology.zone/cosmos-kit/get-started), which supports multiple wallet extensions and a lot of utility functions. Follow their get started guide to setup your React application to be able to interact with a wallet extension and broadcast transactions.

## Dependencies installation

Install the following dependencies for general usage and signing transactions with an existing wallet

```bash
npm i @akashnetwork/akash-api @akashnetwork/akashjs @cosmjs/stargate @cosmjs/proto-signing
```

If you want to create wallets

```bash
npm i @cosmjs/launchpad
```

For [amino encoding](https://docs.cosmos.network/main/learn/advanced/encoding#encoding-1)

```bash
npm i @cosmjs/amino
```

### Wallet Creation

The following code shows an example of the process for creating a new Akash wallet. The wallet can be used to access accounts which contain private/public key pairs and their associated addresses.

A new wallet can be initialized by calling `Secp256k1HdWallet.generate` from @cosmjs/launchpad, and passing `{ prefix: "akash" }`.

```ts
import { Secp256k1HdWallet } from "@cosmjs/launchpad";

// the first parameter for generate is the size of the mnemonic, default is 12
const wallet = await Secp256k1HdWallet.generate(undefined, { prefix: "akash" });
```

After the wallet is created, specific private/public key pairs are available via `getAccounts`.

```ts
import { Secp256k1HdWallet } from "@cosmjs/launchpad";

const wallet = await Secp256k1HdWallet.generate(undefined, { prefix: "akash" });

// gets the first account
const [account] = await wallet.getAccounts();
```

The account address, as well as its public key, are available as properties on this account object.

```ts
import { Secp256k1HdWallet } from "@cosmjs/launchpad";

const wallet = await Secp256k1HdWallet.generate(undefined, { prefix: "akash" });

const [account] = await wallet.getAccounts();

// pull the address and pubKey from the first account
const { address, pubkey } = account;
```

## Private Keys and Offline Signing

Cosmjs does not publicly expose the private key for accounts. Instead, messages are passed into the wallet for signing. This can be done directly, as shown below.

```ts
import { Secp256k1HdWallet, StdSignDoc } from "@cosmjs/launchpad";

function getMessage(): StdSignDoc {
  // implements custom message
}

const wallet = await Secp256k1HdWallet.generate(undefined, { prefix: "akash" });

const [account] = await wallet.getAccounts();
const msg = getMessage(); // your custom message

const signedMessage = await wallet.signAmino(account.address, msg);
```

## Signed Transactions

For transactions that require signing, requests must be passed through the signing client. [AkashJS](https://github.com/ovrclk/akashjs) provides cosmjs compatible implementations of the Akash message types.

To create the message, the appropriate _type_ can be imported from `akashjs`.

```ts
import { MsgCloseDeployment } from "@akashnetwork/akashjs/build/src/protobuf/akash/deployment/v1beta1/deployment";
```

This type contains the methods needed to construct a message that can then be passed into a Stargate client to be signed and broadcast.

```ts
// Import your wallet using your seed phrase/mnemonic
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
const rpcEndpoint = "http://rpc.akashnet.net";

// The akash types need to be registered with the client
const myRegistry = new Registry(getAkashTypeRegistry());

// Instantiate the signer client
const client = await SigningStargateClient.connectWithSigner(rpcEndpoint, wallet, {
  registry: myRegistry
});

// Create the fee object to pay for the transaction
const fee = {
  amount: [
    {
      denom: "uakt",
      amount: "5000"
    }
  ],
  gas: "800000"
};

// Sign and broadcast the transaction
const signedMessage = await client.signAndBroadcast(account.address, [msgAny], fee, "take down deployment");
```

## Signing MsgSend

Message types that are not part of Akash specifically may not have dedicated utility types, as used in the above example. For these message types, the objects can be created directly as long as they conform to the expected schema. Below is an example of doing this for the cosmos MsgSend message.

```ts
import { coins, DirectSecp256k1HdWallet, Registry } from "@cosmjs/proto-signing";
import { defaultRegistryTypes, SigningStargateClient } from "@cosmjs/stargate";

const mnemonic = "your wallet mnemonic";
const wallet = await DirectSecp256k1HdWallet.fromMnemonic(mnemonic, { prefix: "akash" });

// get first account
const [account] = await wallet.getAccounts();

// Setup a send message manually. See the appropriate repo (cosmjs in this case)
// for the specific shape of the message.
const message = {
  fromAddress: account.address,
  toAddress: "akash123...",
  amount: coins(10, "akt")
};

// Set the appropriate typeUrl and attach the encoded message as the value
const msgAny = {
  typeUrl: "/cosmos.bank.v1beta1.MsgSend",
  value: message
};

// You can use your own RPC node, or get a list of public nodes from akashjs
const rpcEndpoint = "http://your.rpc.node";

const myRegistry = new Registry(defaultRegistryTypes);

const client = await SigningStargateClient.connectWithSigner(rpcEndpoint, wallet, {
  registry: myRegistry
});

const fee = {
  amount: [
    {
      denom: "uakt",
      amount: "5000"
    }
  ],
  gas: "800000"
};

const msg = await client.sign(account.address, [msgAny], fee, "send some tokens");
```

## Estimating Gas

When sending transactions, it can be useful to get an estimate of the gas required for a given message. This can be done using the `simulate` method of the signing client which will send the passed in message to an RPC node which will return the estimated gas for that transaction. Before is an example of doing this for the same transaction as shown above.

```ts
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
const rpcEndpoint = "http://rpc.akashnet.net";

const myRegistry = new Registry(getAkashTypeRegistry());

const client = await SigningStargateClient.connectWithSigner(rpcEndpoint, wallet, {
  registry: myRegistry
});

const gas = await client.simulate(account.address, [msgAny], "take down deployment");

console.log(gas);
```

## Querying on chain data

Querying on-chain data can be done using the basic RPC capabilities build into `akashjs`.

For example, to query the list of deployments, an RPC request can be created as such.

```ts
import { QueryDeploymentsResponse, QueryDeploymentsRequest, QueryClientImpl } from "@akashnetwork/akashjs/build/protobuf/akash/deployment/v1beta1/query";
import { getRpc } from "@akashnetwork/akashjs/build/rpc";

const request = QueryDeploymentsRequest.fromJSON({
  filters: {
    owner: "akashSomeOwnerAddress"
  }
});
```

Once the request has been created, it can be passed to the appropriate <Service>ClientImpl method (`Deployments` in this case).

```ts
const client = new QueryClientImpl(await getRpc("https://rpc.akashnet.net")); // This can also be your own custom rpc node
const response = await client.Deployments(request);
const data = QueryDeploymentsResponse.toJSON(response);
```
