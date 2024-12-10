/**
 * SDL (Stack Definition Language) module exports
 * Provides functionality for parsing and validating Akash deployment manifests
 * 
 * @example
 * ```ts
 * import { SDL } from './sdl';
 * 
 * const yaml = `
 * version: "2.0"
 * services:
 *   web:
 *     image: nginx
 *     expose:
 *       - port: 80
 *         as: 80
 *         to:
 *           - global: true
 * `;
 * 
 * const sdl = SDL.fromString(yaml);
 * const manifest = sdl.manifest();
 * ```
 */
export * from "./SDL/SDL";
