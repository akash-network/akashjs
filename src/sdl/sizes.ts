const prefixes = "kmgtpe".split("");

/**
 * Converts resource strings like "1k", "5gi", "10m" to their numeric values
 * @example
 * ```ts
 * convertResourceString("1k") // Returns 1000
 * convertResourceString("5gi") // Returns 5368709120
 * convertResourceString("10m") // Returns 10000000
 * ```
 */
export function convertResourceString(resourceStr: string): number {
  const [value, prefix, unit] = parseSizeString(resourceStr.toLowerCase());
  const power = prefixes.indexOf(prefix);
  const base = unit === "i" ? 1024 : 1000;

  return power !== -1 ? value * Math.pow(base, power + 1) : value;
}

/**
 * Converts CPU resource strings to their millicpu values
 * @example
 * ```ts
 * convertCpuResourceString("1") // Returns 1000
 * convertCpuResourceString("500m") // Returns 500
 * ```
 */
export function convertCpuResourceString(resourceStr: string): number {
  const [value, unit] = parseCpuResourceString(resourceStr.toLowerCase());

  if (unit === "m") {
    return value;
  }

  return value * 1000;
}

/**
 * Parses a size string into value and unit components
 * @internal
 */
function parseSizeString(size: string): [number, string, string] {
  const regex = /^([\d.]+)([a-zA-Z])([a-zA-Z]*)$/;
  const match = size.match(regex);

  if (match) {
    const [, value, unit1, unit2] = match;
    return [parseFloat(value), unit1.toLowerCase(), unit2.toLowerCase()];
  }

  throw new Error(`Invalid size string: ${size}`);
}

/**
 * Parses a CPU resource string into value and unit components
 * @internal
 */
function parseCpuResourceString(size: string): [number, string] {
  const regex = /^([\d.]+)([a-zA-Z]*)$/;
  const match = size.match(regex);

  if (match) {
    const [, value, unit1] = match;
    return [parseFloat(value), unit1.toLowerCase()];
  }

  throw new Error(`Invalid size string: ${size}`);
}
