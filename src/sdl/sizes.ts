const prefixes = "kmgtpe".split("");

function parseSizeString(size: string): [number, string, string] {
  const regex = /^([\d.]+)([a-zA-Z])([a-zA-Z]*)$/;
  const match = size.match(regex);

  if (match) {
    const [, value, unit1, unit2] = match;
    return [parseFloat(value), unit1.toLowerCase(), unit2.toLowerCase()];
  }

  throw new Error(`Invalid size string: ${size}`);
}

export function convertResourceString(resourceStr: string): number {
  const [value, prefix, unit] = parseSizeString(resourceStr.toLowerCase());
  const power = prefixes.indexOf(prefix);
  const base = unit === "i" ? 1024 : 1000;

  return power !== -1 ? value * Math.pow(base, power + 1) : value;
}

// checks to see if the resource string has an suffix, and extracts the
// value and suffix if it does, otherwise return the numerical value and
// an empty string
function parseCpuResourceString(size: string): [number, string] {
  const regex = /^([\d.]+)([a-zA-Z]*)$/;
  const match = size.match(regex);

  if (match) {
    const [, value, unit1] = match;
    return [parseFloat(value), unit1.toLowerCase()];
  }

  throw new Error(`Invalid size string: ${size}`);
}

export function convertCpuResourceString(resourceStr: string): number {
  const [value, unit] = parseCpuResourceString(resourceStr.toLowerCase());

  if (unit === "m") {
    return value;
  }

  return value * 1000;
}
