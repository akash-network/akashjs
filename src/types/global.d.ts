import { OfflineDirectSigner, OfflineSigner } from "@cosmjs/proto-signing";

export {};

declare global {
  interface Window {
    getOfflineSignerAuto: (chainId: string) => Promise<OfflineSigner | OfflineDirectSigner>;
  }
}
