export type v2Manifest = v2Group[];

export type v3Manifest = v3Group[];

export type v3Group = {
  name: string;
  services: v3ManifestService[];
};

export type v2Group = {
  Name: string;
  Services: v2ManifestService[];
};

export type v2ManifestService = {
  Name: string;
  Image: string;
  Command: string[] | null;
  Args: string[] | null;
  Env: string[] | null;
  Resources: ResourceUnits;
  Count: number;
  Expose: v2ServiceExpose[];
  params?: v2ManifestServiceParams;
};

export type v3ManifestService = {
  name: string;
  image: string;
  command: string[] | null;
  args: string[] | null;
  env: string[] | null;
  resources: ResourceUnits;
  count: number;
  expose: v3ServiceExpose[];
  params: v3ManifestServiceParams | null;
  credentials: v2ServiceImageCredentials | null;
};

export type v2ServiceExposeHttpOptions = {
  MaxBodySize: number;
  ReadTimeout: number;
  SendTimeout: number;
  NextTries: number;
  NextTimeout: number;
  NextCases: string[];
};

export type v3ServiceExposeHttpOptions = {
  maxBodySize: number;
  readTimeout: number;
  sendTimeout: number;
  nextTries: number;
  nextTimeout: number;
  nextCases: string[];
};

export type ResourceUnits = Record<string, any>;

export type v2ServiceExpose = {
  Port: number;
  ExternalPort: number;
  Proto: string;
  Service: any;
  Global: boolean;
  Hosts: any;
  HTTPOptions: v2ServiceExposeHttpOptions;
  IP: string;
  EndpointSequenceNumber: number;
};

export type v3ServiceExpose = {
  port: number;
  externalPort: number;
  proto: string;
  service: any;
  global: boolean;
  hosts: any;
  httpOptions: v3ServiceExposeHttpOptions;
  ip: string;
  endpointSequenceNumber: number;
};

export type v2ManifestServiceParams = {
  Storage: v2ServiceStorageParams[];
};

export type v3ManifestServiceParams = {
  storage: v2ServiceStorageParams[];
};

export type v2Sdl = {
  services: Record<string, v2Service>;
  profiles: v2Profiles;
  deployment: Record<string, v2Deployment>;
  endpoints: Record<string, v2Endpoint>;
};

export type v3Sdl = {
  services: Record<string, v2Service>;
  profiles: v3Profiles;
  deployment: Record<string, v2Deployment>;
  endpoints: Record<string, v2Endpoint>;
};

export type v2Endpoint = {
  kind: string;
};

export type v2ExposeTo = {
  service?: string;
  global?: boolean;
  http_options: v2HTTPOptions;
  ip: string;
};

export type v2HTTPOptions = {
  max_body_size: number;
  read_timeout: number;
  send_timeout: number;
  next_tries: number;
  next_timeout: number;
  next_cases: string[];
};

export type v2Accept = {
  items?: string[];
};

export type v2Expose = {
  port: number;
  as: number;
  proto?: string;
  to?: v2ExposeTo[];
  accept: v2Accept;
  http_options: v2HTTPOptions;
};

export type v2Dependency = {
  service: string;
};

export type v2ServiceStorageParams = {
  name: string;
  mount: string;
  readOnly: boolean;
};

export type v2ServiceParams = {
  storage?: Record<string, v2ServiceStorageParams>;
};

export type v2ServiceImageCredentials = {
  host: string;
  email?: string;
  username: string;
  password: string;
};

export type v2Service = {
  image: string;
  command: string[] | null;
  args: string[] | null;
  env: string[] | null;
  expose: v2Expose[];
  dependencies?: v2Dependency[];
  params?: v2ServiceParams;
  credentials?: v2ServiceImageCredentials;
};

export type v2ServiceDeployment = {
  profile: string;
  count: number;
};

export type v2Deployment = Record<string, v2ServiceDeployment>;

export type v2CPUAttributes = Record<string, any>;

export type v2ResourceCPU = {
  units: number | string;
  attributes?: v2CPUAttributes;
};

export type v2ResourceMemory = {
  size: string;
  attributes?: Record<string, any>;
};

export type v3GPUAttributes = {
  vendor: {
    [vendor: string]: Array<{ model: string; ram?: string; interface?: string }>;
  };
};

export type v3ResourceGPU = {
  units: number | string;
  attributes?: v3GPUAttributes;
};

export type v2StorageAttributes = Record<string, any>;

export type v2ResourceStorage = {
  name: string;
  size: string;
  attributes: v2StorageAttributes;
};

export type v2ResourceStorageArray = v2ResourceStorage[];

export type v2ComputeResources = {
  cpu: v2ResourceCPU;
  memory: v2ResourceMemory;
  storage: v2ResourceStorageArray | v2ResourceStorage;
};

export type v3ComputeResources = {
  cpu: v2ResourceCPU;
  memory: v2ResourceMemory;
  storage: v2ResourceStorageArray | v2ResourceStorage;
  gpu: v3ResourceGPU;
  id: number;
};

export type v2ProfileCompute = {
  resources: v2ComputeResources;
};

export type v3ProfileCompute = {
  resources: v3ComputeResources;
};

export type v2PlacementAttributes = Attributes;

export type v2Coin = {
  denom: string;
  value: number;
  amount: number;
};

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
