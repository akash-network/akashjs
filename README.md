# akashjs

Connect and communicate with the Akash Network using keplr wallet for signed transactions, and direct RPC for unsigned. Pure JS library for modern browser compatibility. NodeJS support, and a slick min CLI to reduce complexity.

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

install globally to use `akjs` cli

```bash
➜ npm i -g @akashnetwork/akashjs
➜ akjs
version: 0.0.7
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

## contributing

This repository uses node 16, and yarn 1.2+, webpack 5 for umd bundling and is written in typescript. PRs are welcome.
