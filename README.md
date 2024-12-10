# akashjs

![build:main](https://github.com/ovrclk/akashjs/actions/workflows/release.yml/badge.svg?branch=main)

Connect and communicate with the Akash Network. Pure JS library can be used in browser for unsigned transactions, and with node.js for full compatibility.

## Packages

This repository is the home of `akashjs`, a library designed to facilitate interaction with the Akash Network. However, for full functionality, users will need to integrate several additional libraries. The Akash Network is built using the Cosmos SDK and utilizes the Stargate client for transaction signing and broadcasting. These packages are specifically tailored to enhance interaction with the Akash Network.

| Package | Description |
| ------- | ----------- |
| [@akashnetwork/akashjs](src) | Main library for interacting with the Akash Network |
| [@akashnetwork/akash-api](https://github.com/akash-network/akash-api/tree/main/ts) | Akash API generated from [Akash API](https://github.com/akash-network/akash-api) for interacting with the Akash Network. Documentation is available for [node](https://github.com/akash-network/akash-api/blob/main/docs/proto/node.md) and [provider](https://github.com/akash-network/akash-api/blob/main/docs/proto/provider.md). |
| [@cosmjs/stargate](https://github.com/cosmos/cosmjs/tree/main/packages/stargate) | A client library for the Cosmos SDK 0.40+ (Stargate). |
| [@cosmjs/proto-signing](https://github.com/cosmos/cosmjs/tree/main/packages/proto-signing) | A library for signing and broadcasting transactions using the Cosmos SDK. |

## Compatibility

Compatible with modern browsers, nodejs 14+ and Webpack 5

## Installation

To install the library, run the following command:

```sh
npm install @akashnetwork/akashjs
```

Or use the UMD bundle (the object returned is `Window.akjs`):

```html
<script type="text/javascript" src="https://unpkg.com/@akashnetwork/akashjs@0.10.0/umd/akashjs.js" ></script>
```

## Getting Started

The following example demonstrates how to fetch the state of the network.

```js
import { getMetadata } from "@akashnetwork/akashjs/build/network/index.js";

console.log(JSON.stringify(await getMetadata("mainnet"), null, 2))
```

More elborate examples can be found in the [examples](examples) directory.

## Contributing

### Project Stack

This repository is primarily written in TypeScript and uses Node.js version 18. We use Webpack 5 for UMD bundling. These tools ensure that our development environment is consistent and our builds are stable.

### Development Setup

1. **Prerequisites**
   - Node.js 18 or higher
   - npm or yarn
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

