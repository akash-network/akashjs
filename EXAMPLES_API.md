### Broadcast a Deploy Certificate to the Chain

```typescript
import { certificate as akashCertificate, keplr } from "@akashnetwork/akashjs";

const chain = keplr.getChains().testnet;
const signer = await keplr.getSigner(chain);
const client = await keplr.get(chain, signer);
const accounts = await signer.getAccounts();

try {
  const myAddress = accounts[0].address;

  const pems: akashCertificate.pems = await akashCertificate.createCertifcate(
    myAddress
  );

  akashCertificate.broadcastCertificate(
    { csr: pems.csr, publicKey: pems.publicKey },
    myAddress,
    client
  );
} catch (error) {
  console.log(`Akash Transport : ${error.message}`);
}
```
