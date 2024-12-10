/**
 * Browser storage implementation to replace keytar functionality
 * @module wallet/storage
 */

/**
 * Gets a stored password/mnemonic
 * @returns {Promise<string>} The stored test mnemonic
 */
export async function getPassword() {
  console.log("keytar fill");
  return "click harvest range include miss vessel permit kiss clarify now grocery assist";
}

/**
 * Sets a password/mnemonic in storage
 * @returns {Promise<void>}
 */
export async function setPassword() {}

export default {
  getPassword,
  setPassword
};
