# akashjs

Connect and communicate with the akash network using keplr wallet for signed transactions, and direct RPC for unsigned. Pure JS library for modern browsers.

# compatibility

Compatible with modern browsers, nodejs 14+ and Webpack 5

# getting started

install from `npm`

```bash
npm i @akashnetwork/akashjs
```

or use the umd bundle

```html
<script
  type="text/javascript"
  src="https://unpkg.com/@akashnetwork/akashjs@0.0.6/umd/akashjs.js"
></script>
```

## api

### Generate x509 Certificate

```typescript
import { certificate as akashCertificate } from "@akashnetwork/akashjs";
const bech32Address = "akash123456abcdefg";
const pems: akashCertificate.pems = await akashCertificate.createCertifcate(
  bech32Address
);
```

## stargate

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
