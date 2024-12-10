import { OfflineDirectSigner, OfflineSigner } from "@cosmjs/proto-signing";

export {};

declare global {
  /**
   * Extends the Window interface to include Keplr wallet integration methods.
   * @interface Window
   */
  interface Window {
    /**
     * Gets an offline signer for automatic signing of transactions.
     * This method is injected by the Keplr wallet extension.
     * 
     * @param {string} chainId - The chain ID of the network to connect to
     * @returns {Promise<OfflineSigner | OfflineDirectSigner>} A promise that resolves to either an OfflineSigner or OfflineDirectSigner
     * @throws {Error} If Keplr wallet is not installed or user rejects the connection
     * 
     * @example
     * const signer = await window.getOfflineSignerAuto("cosmoshub-4");
     */
    getOfflineSignerAuto: (chainId: string) => Promise<OfflineSigner | OfflineDirectSigner>;
  }
}
