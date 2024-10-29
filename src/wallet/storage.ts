import pino from 'pino';

const logger = pino();

/**
 * This file fills keytar in browser, to use localStorage in place.
 */

export async function getPassword() {
  logger.info("keytar fill");
  return "click harvest range include miss vessel permit kiss clarify now grocery assist";
}

export async function setPassword() {}

export default {
  getPassword,
  setPassword
};
