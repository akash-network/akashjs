# akashjs

![build:main](https://github.com/github/docs/actions/workflows/build.yml/badge.svg?branch=main)

Connect and communicate with the Akash Network. Pure JS library can be used in browser for unsigned transactions, and with node.js for full compatibility.

# compatibility

Compatible with modern browsers, nodejs 14+ and Webpack 5

# getting started

install from `npm` or `yarn`

```bash
npm i @akashnetwork/akashjs
yarn add @akashnetwork/akashjs
```

or use the umd bundle the object returned is `Window.akjs`

```html
<script
  type="text/javascript"
  src="https://unpkg.com/@akashnetwork/akashjs@0.0.6/umd/akashjs.js"
></script>
```
## stargate

While `akashjs` manages much under the hood, more control is available through all of the exported types, clients and protocols.

Import the registry for signing and broadcasting signed transactions, this is needed if you plan to use [Stargate](https://www.npmjs.com/package/@cosmjs/stargate)

```typescript
import { stargate as akashStargate } from "@akashnetwork/akashjs";
import { Registry } from "@cosmjs/proto-signing";

const myRegistry = new Registry([
  ...defaultRegistryTypes,
  ...akashStargate.registry,
]);

const client = await SigningStargateClient.connectWithSigner(
  `http://rpcUrl/`,
  offlineSigner,
  {
    registry: myRegistry,
  }
);
```

You can use the signer to create and sign requests. Below is an example of sending a deployment take-down message.

```ts
const mnemonic = "your wallet mnemonic";
const wallet = await DirectSecp256k1HdWallet.fromMnemonic(mnemonic, { prefix: "akash" });

// get first account
const [account] = await wallet.getAccounts();

// Use the encode method for the message to wrap the data
const message = MsgCloseDeployment.fromPartial({
    id: {
        dseq: "555555",
        owner: account.address,
    }
});

// Set the appropriate typeUrl and attach the encoded message as the value
const msgAny = {
    typeUrl: getTypeUrl(MsgCloseDeployment),
    value: message
};

// You can use your own RPC node, or get a list of public nodes from akashjs
const rpcEndpoint = "http://my.rpc.node";

const myRegistry = new Registry(
    getAkashTypeRegistry()
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

const signedMessage = await client.signAndBroadcast(
    account.address,
    [msgAny],
    fee,
    "take down deployment"
);
```

## examples

Additional examples can be found in the [examples directory]( https://github.com/ovrclk/akashjs/tree/main/)

## contributing

This repository uses node 16, and yarn 1.2+, webpack 5 for umd bundling and is written in typescript. PRs are welcome.
