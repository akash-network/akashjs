/**
 * Represents a version 2 manifest consisting of multiple groups.
 */
export type v2Manifest = v2Group[];

/**
 * Represents a version 3 manifest consisting of multiple groups.
 */
export type v3Manifest = v3Group[];

/**
 * Represents a group in a version 3 manifest.
 */
export type v3Group = {
  /** The name of the group. */
  name: string;
  /** The services included in the group. */
  services: v3ManifestService[];
};

/**
 * Represents a group in a version 2 manifest.
 */
export type v2Group = {
  /** The name of the group. */
  Name: string;
  /** The services included in the group. */
  Services: v2ManifestService[];
};

/**
 * Represents a service in a version 2 manifest.
 */
export type v2ManifestService = {
  /** The name of the service. */
  Name: string;
  /** The image used by the service. */
  Image: string;
  /** The command to run the service. */
  Command: string[] | null;
  /** The arguments for the command. */
  Args: string[] | null;
  /** The environment variables for the service. */
  Env: string[] | null;
  /** The resources required by the service. */
  Resources: ResourceUnits;
  /** The number of instances of the service. */
  Count: number;
  /** The exposed ports and protocols. */
  Expose: v2ServiceExpose[];
  /** Optional parameters for the service. */
  params?: v2ManifestServiceParams;
};

/**
 * Represents a service in a version 3 manifest.
 */
export type v3ManifestService = {
  /** The name of the service. */
  name: string;
  /** The image used by the service. */
  image: string;
  /** The command to run the service. */
  command: string[] | null;
  /** The arguments for the command. */
  args: string[] | null;
  /** The environment variables for the service. */
  env: string[] | null;
  /** The resources required by the service. */
  resources: ResourceUnits;
  /** The number of instances of the service. */
  count: number;
  /** The exposed ports and protocols. */
  expose: v3ServiceExpose[];
  /** Optional parameters for the service. */
  params: v3ManifestServiceParams | null;
  /** Optional credentials for accessing the service image. */
  credentials: v2ServiceImageCredentials | null;
};

/**
 * HTTP options for exposing a service in version 2.
 */
export type v2ServiceExposeHttpOptions = {
  /** Maximum body size for HTTP requests. */
  MaxBodySize: number;
  /** Read timeout for HTTP requests. */
  ReadTimeout: number;
  /** Send timeout for HTTP requests. */
  SendTimeout: number;
  /** Number of retries for HTTP requests. */
  NextTries: number;
  /** Timeout between retries for HTTP requests. */
  NextTimeout: number;
  /** Cases for retrying HTTP requests. */
  NextCases: string[];
};

/**
 * HTTP options for exposing a service in version 3.
 */
export type v3ServiceExposeHttpOptions = {
  /** Maximum body size for HTTP requests. */
  maxBodySize: number;
  /** Read timeout for HTTP requests. */
  readTimeout: number;
  /** Send timeout for HTTP requests. */
  sendTimeout: number;
  /** Number of retries for HTTP requests. */
  nextTries: number;
  /** Timeout between retries for HTTP requests. */
  nextTimeout: number;
  /** Cases for retrying HTTP requests. */
  nextCases: string[];
};

/**
 * Represents resource units.
 */
export type ResourceUnits = Record<string, any>;

/**
 * Represents the exposure configuration for a service in version 2.
 */
export type v2ServiceExpose = {
  /** The port number. */
  Port: number;
  /** The external port number. */
  ExternalPort: number;
  /** The protocol used. */
  Proto: string;
  /** The service being exposed. */
  Service: any;
  /** Whether the service is globally accessible. */
  Global: boolean;
  /** The hosts for the service. */
  Hosts: any;
  /** HTTP options for the service. */
  HTTPOptions: v2ServiceExposeHttpOptions;
  /** The IP address for the service. */
  IP: string;
  /** The sequence number for the endpoint. */
  EndpointSequenceNumber: number;
};

/**
 * Represents the exposure configuration for a service in version 3.
 */
export type v3ServiceExpose = {
  /** The port number. */
  port: number;
  /** The external port number. */
  externalPort: number;
  /** The protocol used. */
  proto: string;
  /** The service being exposed. */
  service: any;
  /** Whether the service is globally accessible. */
  global: boolean;
  /** The hosts for the service. */
  hosts: any;
  /** HTTP options for the service. */
  httpOptions: v3ServiceExposeHttpOptions;
  /** The IP address for the service. */
  ip: string;
  /** The sequence number for the endpoint. */
  endpointSequenceNumber: number;
};

/**
 * Optional parameters for a version 2 manifest service.
 */
export type v2ManifestServiceParams = {
  /** Storage parameters for the service. */
  Storage: v2ServiceStorageParams[];
};

/**
 * Optional parameters for a version 3 manifest service.
 */
export type v3ManifestServiceParams = {
  /** Storage parameters for the service. */
  storage: v2ServiceStorageParams[];
};

/**
 * Represents a version 2 SDL (Service Definition Language).
 */
export type v2Sdl = {
  /** The services defined in the SDL. */
  services: Record<string, v2Service>;
  /** The profiles defined in the SDL. */
  profiles: v2Profiles;
  /** The deployment configurations. */
  deployment: Record<string, v2Deployment>;
  /** The endpoints defined in the SDL. */
  endpoints: Record<string, v2Endpoint>;
};

/**
 * Represents a version 3 SDL (Service Definition Language).
 */
export type v3Sdl = {
  /** The services defined in the SDL. */
  services: Record<string, v2Service>;
  /** The profiles defined in the SDL. */
  profiles: v3Profiles;
  /** The deployment configurations. */
  deployment: Record<string, v2Deployment>;
  /** The endpoints defined in the SDL. */
  endpoints: Record<string, v2Endpoint>;
};

/**
 * Represents an endpoint in version 2.
 */
export type v2Endpoint = {
  /** The kind of endpoint. */
  kind: string;
};

/**
 * Represents the exposure configuration for a service in version 2.
 */
export type v2ExposeTo = {
  /** The service to expose to. */
  service?: string;
  /** Whether the service is globally accessible. */
  global?: boolean;
  /** HTTP options for the service. */
  http_options: v2HTTPOptions;
  /** The IP address for the service. */
  ip: string;
};

/**
 * HTTP options for a service in version 2.
 */
export type v2HTTPOptions = {
  /** Maximum body size for HTTP requests. */
  max_body_size: number;
  /** Read timeout for HTTP requests. */
  read_timeout: number;
  /** Send timeout for HTTP requests. */
  send_timeout: number;
  /** Number of retries for HTTP requests. */
  next_tries: number;
  /** Timeout between retries for HTTP requests. */
  next_timeout: number;
  /** Cases for retrying HTTP requests. */
  next_cases: string[];
};

/**
 * Represents accepted items for a service in version 2.
 */
export type v2Accept = {
  /** The items accepted by the service. */
  items?: string[];
};

/**
 * Represents the exposure configuration for a service in version 2.
 */
export type v2Expose = {
  /** The port number. */
  port: number;
  /** The alias for the port. */
  as: number;
  /** The protocol used. */
  proto?: string;
  /** The services to expose to. */
  to?: v2ExposeTo[];
  /** The accepted items for the service. */
  accept: v2Accept;
  /** HTTP options for the service. */
  http_options: v2HTTPOptions;
};

/**
 * Represents a dependency for a service in version 2.
 */
export type v2Dependency = {
  /** The service that is a dependency. */
  service: string;
};

/**
 * Represents storage parameters for a service in version 2.
 */
export type v2ServiceStorageParams = {
  /** The name of the storage. */
  name: string;
  /** The mount point for the storage. */
  mount: string;
  /** Whether the storage is read-only. */
  readOnly: boolean;
};

/**
 * Optional parameters for a service in version 2.
 */
export type v2ServiceParams = {
  /** Storage parameters for the service. */
  storage?: Record<string, v2ServiceStorageParams>;
};

/**
 * Represents image credentials for a service in version 2.
 */
export type v2ServiceImageCredentials = {
  /** The host for the image. */
  host: string;
  /** The email associated with the credentials. */
  email?: string;
  /** The username for the credentials. */
  username: string;
  /** The password for the credentials. */
  password: string;
};

/**
 * Represents a service in version 2.
 */
export type v2Service = {
  /** The image used by the service. */
  image: string;
  /** The command to run the service. */
  command: string[] | null;
  /** The arguments for the command. */
  args: string[] | null;
  /** The environment variables for the service. */
  env: string[] | null;
  /** The exposed ports and protocols. */
  expose: v2Expose[];
  /** The dependencies for the service. */
  dependencies?: v2Dependency[];
  /** Optional parameters for the service. */
  params?: v2ServiceParams;
  /** Optional credentials for accessing the service image. */
  credentials?: v2ServiceImageCredentials;
};

/**
 * Represents the deployment configuration for a service in version 2.
 */
export type v2ServiceDeployment = {
  /** The profile used for deployment. */
  profile: string;
  /** The number of instances to deploy. */
  count: number;
};

/**
 * Represents a deployment configuration in version 2.
 */
export type v2Deployment = Record<string, v2ServiceDeployment>;

/**
 * Represents CPU attributes in version 2.
 */
export type v2CPUAttributes = Record<string, any>;

/**
 * Represents CPU resources in version 2.
 */
export type v2ResourceCPU = {
  /** The units of CPU. */
  units: number | string;
  /** Optional attributes for the CPU. */
  attributes?: v2CPUAttributes;
};

/**
 * Represents memory resources in version 2.
 */
export type v2ResourceMemory = {
  /** The size of the memory. */
  size: string;
  /** Optional attributes for the memory. */
  attributes?: Record<string, any>;
};

/**
 * Represents GPU attributes in version 3.
 */
export type v3GPUAttributes = {
  /** The vendor-specific attributes for the GPU. */
  vendor: {
    [vendor: string]: Array<{ model: string; ram?: string; interface?: string }>;
  };
};

/**
 * Represents GPU resources in version 3.
 */
export type v3ResourceGPU = {
  /** The units of GPU. */
  units: number | string;
  /** Optional attributes for the GPU. */
  attributes?: v3GPUAttributes;
};

/**
 * Represents storage attributes in version 2.
 */
export type v2StorageAttributes = Record<string, any>;

/**
 * Represents storage resources in version 2.
 */
export type v2ResourceStorage = {
  /** The name of the storage. */
  name: string;
  /** The size of the storage. */
  size: string;
  /** The attributes for the storage. */
  attributes: v2StorageAttributes;
};

/**
 * Represents an array of storage resources in version 2.
 */
export type v2ResourceStorageArray = v2ResourceStorage[];

/**
 * Represents compute resources in version 2.
 */
export type v2ComputeResources = {
  /** The CPU resources. */
  cpu: v2ResourceCPU;
  /** The memory resources. */
  memory: v2ResourceMemory;
  /** The storage resources. */
  storage: v2ResourceStorageArray | v2ResourceStorage;
};

/**
 * Represents compute resources in version 3.
 */
export type v3ComputeResources = {
  /** The CPU resources. */
  cpu: v2ResourceCPU;
  /** The memory resources. */
  memory: v2ResourceMemory;
  /** The storage resources. */
  storage: v2ResourceStorageArray | v2ResourceStorage;
  /** The GPU resources. */
  gpu: v3ResourceGPU;
  /** The ID of the resource. */
  id: number;
};

/**
 * Represents a compute profile in version 2.
 */
export type v2ProfileCompute = {
  /** The resources for the compute profile. */
  resources: v2ComputeResources;
};

/**
 * Represents a compute profile in version 3.
 */
export type v3ProfileCompute = {
  /** The resources for the compute profile. */
  resources: v3ComputeResources;
};

/**
 * Represents placement attributes in version 2.
 */
export type v2PlacementAttributes = Attributes;

/**
 * Represents a coin in version 2.
 */
export type v2Coin = {
  /** The denomination of the coin. */
  denom: string;
  /** The value of the coin. */
  value: number;
  /** The amount of the coin. */
  amount: number;
};

/**
 * Represents placement pricing in version 2.
 */
export type v2PlacementPricing = Record<string, v2Coin>;

export type SignedBy = {
  allOf: string[];
  anyOf: string[];
};

export type v2ProfilePlacement = {
  attributes: v2PlacementAttributes;
  signedBy: SignedBy;
  pricing: v2PlacementPricing;
};

export type v2Profiles = {
  compute: Record<string, v2ProfileCompute>;
  placement: Record<string, v2ProfilePlacement>;
};

export type v3Profiles = {
  compute: Record<string, v3ProfileCompute>;
  placement: Record<string, v2ProfilePlacement>;
};

export type Attribute = {
  key: string;
  value: string;
};

export type v3DeploymentGroup = {
  name: string;
  resources: Array<{
    resource: v3ComputeResources;
    price: number;
    count: number;
    endpoints: Array<{ kind: number; sequence_number: number }>;
  }>;
  requirements: {
    attributes: Array<Attribute>;
    signedBy: {
      allOf: string[];
      anyOf: string[];
    };
  };
};

export type Attributes = Attribute[];
