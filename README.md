# akashjs

![build:main](https://github.com/ovrclk/akashjs/actions/workflows/release.yml/badge.svg?branch=main)

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
  src="https://unpkg.com/@akashnetwork/akashjs@0.10.0/umd/akashjs.js"
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

## Contribution Guidelines

### Project Stack

This repository is primarily written in TypeScript and uses Node.js version 18. We use Webpack 5 for UMD bundling. These tools ensure that our development environment is consistent and our builds are stable.

### Automated CI Checks and Releases

Our project enforces high standards of code quality and consistency to ensure that all contributions adhere to our guidelines and maintain a high level of reliability. Here's what you should be aware of when contributing to our repository:

- **Code Linting**: We use ESLint to analyze the code for potential errors and coding style issues. This ensures that all contributions maintain a consistent style and follow best practices.

- **Code Formatting**: Prettier is configured to format code automatically. This helps keep our codebase clean and readable without requiring manual adjustments for styling.

- **Commit Linting**: All commit messages must adhere to the Conventional Commits specification. This is enforced through automated linting of commits, helping us keep our project history clear and easy to navigate. See [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) for more information. [commitizen](https://commitizen-tools.github.io/commitizen/) is a great tool to get started with.

- **Automated Testing**: Upon creating a pull request, automated tests are run to verify that the new code does not break any existing functionality and meets all testing standards.

- **Semantic Release**: When changes are merged into the `main` branch, a semantic release process is triggered. This process automatically determines version numbers and generates changelogs based on the commit messages, streamlining the release process and ensuring consistent versioning.

- **Continuous Integration**: Our CI workflows are designed to validate pull requests and manage releases. They perform multiple checks including commit validation, linting, and testing code coverage before merging changes.

To better follow the above guidelines, we recommend using git hooks that would run the necessary checks before pushing your code. To do so after dependencies are installed, run the following command:

```bash
npm run setup-git-hooks
```

### Contributing

PRs are welcome! By adhering to these guidelines and leveraging our automated systems, we can maintain a high-quality codebase and streamline our development processes. We appreciate your contributions to making this project even better!

