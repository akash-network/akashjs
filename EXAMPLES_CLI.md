## CLI

### Getting Started

```bash
➜ npm i -g @akashnetwork/akashjs
➜ akjs
version: 0.0.7
```

### Setting up a Wallet

On NodeJS these keys are stored using `keytar`, which requires `libsecret` be installed on Linux.

```
Debian/Ubuntu: sudo apt-get install libsecret-1-dev
Red Hat-based: sudo yum install libsecret-devel
Arch Linux: sudo pacman -S libsecret
```

```bash
➜ akjs wallet create mypassword mypassword
{
  mnemonic: 'current advice giraffe sail employ surface lonely right learn moar illness dynamic',
  address: 'akash1xx6lpgznxuhfh7ymg64hqs27twuwj4x0wahu123'
}
```
