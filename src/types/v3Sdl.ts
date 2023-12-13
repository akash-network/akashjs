import {
    Attribute,
    ResourceUnits,
    v2Deployment,
    v2Endpoint,
    v2ProfilePlacement,
    v2ResourceCPU,
    v2ResourceMemory,
    v2ResourceStorage,
    v2ResourceStorageArray,
    v2Service,
    v2ServiceStorageParams
} from "./index";

export type v3Manifest = v3Group[];

export type v3Group = {
    name: string,
    services: v3ManifestService[],
}

export type v3ManifestService = {
    name: string,
    image: string,
    command: string[] | null,
    args: string[] | null,
    env: string[] | null,
    resources: ResourceUnits,
    count: number
    expose: v3ServiceExpose[],
    params: v3ManifestServiceParams | null,
}

export type v3ServiceExposeHttpOptions = {
    maxBodySize: number,
    readTimeout: number,
    sendTimeout: number,
    nextTries: number,
    nextTimeout: number,
    nextCases: string[],
}

export type v3ServiceExpose = {
    port: number,
    externalPort: number,
    proto: string,
    service: any,
    global: boolean,
    hosts: any,
    httpOptions: v3ServiceExposeHttpOptions,
    ip: string,
    endpointSequenceNumber: number,
}

export type v3ManifestServiceParams = {
    storage: v3ServiceStorageParams[],
}

export type v3Sdl = {
    services: Record<string, v3Service>,
    profiles: v3Profiles,
    deployment: Record<string, v3Deployment>,
    endpoints: Record<string, v3Endpoint>,
}

export type v3GPUAttributes = {
    vendor: {
        [vendor: string]: Array<{ model: string }>
    }
}

export type v3ResourceGPU = {
    units: number | string,
    attributes?: v3GPUAttributes,
}

export type v3ComputeResources = {
    cpu: v3ResourceCPU,
    memory: v3ResourceMemory,
    storage: v3ResourceStorageArray | v3ResourceStorage,
    gpu: v3ResourceGPU,
    id: number,
}

export type v3ProfileCompute = {
    resources: v3ComputeResources,
}

export type v3Profiles = {
    compute: Record<string, v3ProfileCompute>,
    placement: Record<string, v3ProfilePlacement>,
}

export type v3DeploymentGroup = {
    name: string,
    resources: Array<{
        resource: v3ComputeResources,
        price: number,
        count: number,
        endpoints: Array<{ kind: number; sequence_number: number; }>,
    }>,
    requirements: {
        attributes: Array<Attribute>,
        signedBy: {
            allOf: string[],
            anyOf: string[],
        },
    },
};

/* wrappers */
export type v3ServiceStorageParams = v2ServiceStorageParams
export type v3Service = v2Service
export type v3Deployment = v2Deployment
export type v3Endpoint = v2Endpoint
export type v3ResourceCPU = v2ResourceCPU
export type v3ResourceMemory = v2ResourceMemory
export type v3ResourceStorageArray = v2ResourceStorageArray
export type v3ResourceStorage = v2ResourceStorage
export type v3ProfilePlacement = v2ProfilePlacement
