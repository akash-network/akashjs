# akashjs

![build:main](https://github.com/ovrclk/akashjs/actions/workflows/release.yml/badge.svg?branch=main)

Connect and communicate with the Akash Network. Pure JS library can be used in browser for unsigned transactions, and with node.js for full compatibility.

## Compatibility

Compatible with modern browsers, nodejs 14+ and Webpack 5

## Installation

Install from `npm` or `yarn`:

```bash
npm i @akashnetwork/akashjs
yarn add @akashnetwork/akashjs
```

Or use the UMD bundle (the object returned is `Window.akjs`):

```html
<script
  type="text/javascript"
  src="https://unpkg.com/@akashnetwork/akashjs@0.10.0/umd/akashjs.js"
></script>
```

## Packages

This repository is the home of `akashjs`, a library designed to facilitate interaction with the Akash Network. However, for full functionality, users will need to integrate several additional libraries. The Akash Network is built using the Cosmos SDK and utilizes the Stargate client for transaction signing and broadcasting. These packages are specifically tailored to enhance interaction with the Akash Network.

| Package | Description |
| ------- | ----------- |
| [@akashnetwork/akashjs](src) | Main library for interacting with the Akash Network |
| [@akashnetwork/akash-api](https://github.com/akash-network/akash-api/tree/main/ts) | Akash API generated from [Akash API](https://github.com/akash-network/akash-api) for interacting with the Akash Network. Documentation is available for [node](https://github.com/akash-network/akash-api/blob/main/docs/proto/node.md) and [provider](https://github.com/akash-network/akash-api/blob/main/docs/proto/provider.md) |
| [@cosmjs/stargate](https://github.com/cosmos/cosmjs/tree/main/packages/stargate) | A client library for the Cosmos SDK 0.40+ (Stargate) |
| [@cosmjs/proto-signing](https://github.com/cosmos/cosmjs/tree/main/packages/proto-signing) | A library for signing and broadcasting transactions using the Cosmos SDK |


## Key Features

### Certificate Management

Generate, broadcast and manage certificates for the Akash Network:

```typescript
import { certificate } from "@akashnetwork/akashjs";

// Generate a new certificate
const cert = await certificate.createCertificate("akash1...");

// Broadcast the certificate
await certificate.broadcastCertificate(cert, "akash1...", client);

// Revoke a certificate
await certificate.revokeCertificate("akash1...", "serial123", client);

// Query certificates
const certs = await certificate.queryCertificates({
  owner: "akash1..."
});
```

### Network Interaction

Connect to and interact with the Akash Network:

```typescript
import { network, rpc } from "@akashnetwork/akashjs";

// Get sorted RPC endpoints for mainnet
const endpoints = await network.getEndpointsSorted("mainnet", "rpc");

// Get network metadata
const metadata = await network.getMetadata("mainnet");
```

### Wallet Integration

Integrate with Keplr wallet and handle transactions:

```typescript
import { keplr, wallet } from "@akashnetwork/akashjs";

// Get chains configuration
const chains = keplr.getChains();

// Get signer for a chain
const signer = keplr.getSigner(chains.mainnet);

// Connect to a chain
const client = await keplr.get(chains.mainnet, signer, endpoint);
```

### Stargate Client

For more control over transactions, use the Stargate client integration:

```typescript
import { stargate as akashStargate } from "@akashnetwork/akashjs";
import { Registry, DirectSecp256k1HdWallet } from "@cosmjs/proto-signing";
import { SigningStargateClient } from "@cosmjs/stargate";

// Setup registry
const myRegistry = new Registry([
  ...defaultRegistryTypes,
  ...akashStargate.registry,
]);

// Create client
const client = await SigningStargateClient.connectWithSigner(
  `http://rpcUrl/`,
  offlineSigner,
  {
    registry: myRegistry,
  }
);
```

### Transaction Example

Here's an example of sending a deployment take-down message:

```typescript
const mnemonic = "your wallet mnemonic";
const wallet = await DirectSecp256k1HdWallet.fromMnemonic(mnemonic, { prefix: "akash" });

// Get first account
const [account] = await wallet.getAccounts();

// Create the message
const message = MsgCloseDeployment.fromPartial({
    id: {
        dseq: "555555",
        owner: account.address,
    }
});

// Set the message type and value
const msgAny = {
    typeUrl: getTypeUrl(MsgCloseDeployment),
    value: message
};

// Setup client with registry
const myRegistry = new Registry(getAkashTypeRegistry());
const client = await SigningStargateClient.connectWithSigner(
    rpcEndpoint,
    wallet,
    { registry: myRegistry }
);

// Define transaction fee
const fee = {
    amount: [
        {
            denom: "uakt",
            amount: "5000",
        },
    ],
    gas: "800000",
};

// Sign and broadcast
const result = await client.signAndBroadcast(
    account.address,
    [msgAny],
    fee,
    "take down deployment"
);
```

## Examples

Additional examples can be found in the [examples directory](examples)

## Contributing

### Project Stack

This repository is primarily written in TypeScript and uses Node.js version 18. We use Webpack 5 for UMD bundling. These tools ensure that our development environment is consistent and our builds are stable.

### Development Setup

1. **Prerequisites**
   - Node.js 18 or higher
   - npm or yarn
   - Protocol Buffers Compiler (protoc) v3.15.0 or higher
     - **Installation Instructions:**
       - **macOS**: Use Homebrew to install protoc:
         ```bash
         brew install protobuf
         ```
       - **Linux**: Use your package manager, for example, on Ubuntu:
         ```bash
         sudo apt update
         sudo apt install -y protobuf-compiler
         ```
       - **Windows**: Download the precompiled binaries from the [official releases page](https://github.com/protocolbuffers/protobuf/releases) and add the `bin` directory to your system's PATH.
   - Go 1.19 or higher (for akash-api dependency)

2. **Installation**
```bash
# Clone the repository
git clone https://github.com/akash-network/akashjs
cd akashjs

# Install dependencies
npm install

# Setup git hooks
npm run setup-git-hooks
```

## Protobuf Generation (Optional)

Protobuf generation is only necessary when the protobuf definitions have changed. If you need to regenerate the protobuf files, follow these steps:

1. **Clone the akash-api repository** (required for proto files):
   ```bash
   git clone https://github.com/akash-network/akash-api.git ../akash-api
   ```

2. **Install gogoproto**: Ensure that the `gogoproto` library is available in your environment.
   ```bash
   # Clone the gogoproto repository
   git clone https://github.com/gogo/protobuf.git

   # Ensure the path to gogo.proto is included in your proto path
   export PROTO_PATH=./protobuf/protobuf
   ```

3. **Generate protobuf files**:
   ```bash
   # Use the following command to generate TypeScript definitions
   protoc -I=$PROTO_PATH -I=./path/to/akash-api --ts_out=./src/protobuf akash/discovery/v1/client_info.proto
   ```

The protobuf generation script will:
- Look for .proto files in the akash-api repository
- Generate TypeScript definitions in `src/protobuf`
- Use ts-proto for TypeScript code generation
- Include necessary Cosmos SDK proto definitions

If you encounter protobuf-related errors:
- Ensure `protoc` is installed correctly
- Verify the `akash-api` repository is at the correct path
- Check `protoc` version compatibility
- Look for detailed errors in `generate.log`

### Troubleshooting

If you encounter the error `Import "gogoproto/gogo.proto" was not found or had errors`, follow these steps:

1. **Ensure `gogoproto` is cloned**: Make sure the `gogoproto` repository is cloned and accessible.
2. **Update the Protobuf Generation Script**: Modify your script to include the path to `gogoproto` using the `-I` flag.
3. **Verify Paths**: Double-check that the paths to `gogo.proto` and other proto files are correct.
4. **Check Dependencies**: Ensure all dependencies are installed and up-to-date.
5. **Protoc Version**: Verify that your `protoc` version is compatible with the proto files.

By following these instructions, you should be able to resolve the `gogoproto/gogo.proto` error and successfully generate your protobuf files when necessary.

4. **Development Commands**
```bash
# Watch mode for development
npm run dev:watch

# Run tests
npm run test

# Run linting
npm run lint

# Fix linting issues
npm run lint:fix

# Format code
npm run format

# Build the project
npm run build
```

### Development Guidelines

1. **TypeScript**
   - Use strict TypeScript types
   - Avoid using `any` type where possible
   - Document complex types with JSDoc comments

2. **Testing**
   - Write unit tests for new features
   - Maintain test coverage
   - Run `npm test` before submitting PRs

3. **Code Style**
   - Follow the existing code style
   - Use Prettier for formatting
   - Follow ESLint rules

### Automated CI Checks and Releases

Our project enforces high standards of code quality and consistency through:

- **Code Linting**: ESLint analyzes code for potential errors and style issues
- **Code Formatting**: Prettier ensures consistent code formatting
- **Commit Linting**: Commits must follow [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) specification
- **Automated Testing**: Tests run automatically on pull requests
- **Semantic Release**: Automated versioning based on commit messages
- **Continuous Integration**: Validates PRs and manages releases

To enable git hooks for local development:

```bash
npm run setup-git-hooks
```

### Pull Request Process

1. Create a feature branch from `main`
2. Make your changes following our guidelines
3. Ensure all tests pass
4. Update documentation as needed
5. Submit a PR with a clear description of changes
6. Wait for review and address any feedback

### Debugging Tips

- Use the `dev:watch` command for live reloading during development
- Check the `examples` directory for implementation references
- Use Jest's debugging capabilities with `--inspect` flag
- Set `DEBUG=akashjs:*` environment variable for detailed logs

PRs are welcome! By adhering to these guidelines and leveraging our automated systems, we can maintain a high-quality codebase and streamline our development processes.

