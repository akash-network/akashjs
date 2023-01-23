const prefixes = "kmgtpe".split("");

function parseSizeString(size: string): [number, string, string] {
    const regex = /^([\d.]+)([a-zA-Z]+)([a-zA-Z]+)$/;
    const match = size.match(regex);

    if (match) {
        const [, value, unit1, unit2] = match;
        return [parseFloat(value), unit1.toLowerCase(), unit2.toLowerCase()];
    }

    throw new Error(`Invalid size string: ${size}`);
}

export function convertResourceString(resourceStr: string): number | null {
    const [value, prefix, unit] = parseSizeString(resourceStr.toLowerCase());
    const power = prefixes.indexOf(prefix);
    const base = unit === 'i' ? 1024 : 1000;

    return power !== -1
        ? value * Math.pow(base, (power + 1))
        : null;
}