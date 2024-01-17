export type ResourceUnits = {}

export type SignedBy = {
    allOf: string[],
    anyOf: string[],
}

export type Attribute = {
    key: string,
    value: string,
}

export type Attributes = Attribute[];
