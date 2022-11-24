import YAML from 'js-yaml';
import Long from 'long';

export class SDL {

    data: any;

    constructor() {
        this.data = {};
    }

    static fromString(yaml: string) {
        const sdl = new SDL();
        sdl.data = YAML.load(yaml) as object;
        return sdl;
    }

    endpoints() {
        return [];
    }

    resource() {
        return {};
    }

    services() {
        if (this.data) {
            return this.data.services
        }

        return {};
    }

    deployments() {
        if (this.data) {
            this.data.deployments;
        }

        return {};
    }

    placements() {
        const placements = this.data
            ? this.data.profiles.placement
            : [];

        return placements;
    }

    computeEndpointSequenceNumbers() {
        return [];
    }

    serviceNames() {
        const names = this.data
            ? Object.keys(this.data.services)
            : [];

        // TODO: sort these
        return names;
    }

    toManifestResources(res: any) {
        return [];
    }

    deploymentsByPlacement(placement: string) {
        const deployments = this.data
            ? this.data.deployment
            : [];

        return Object.entries(deployments as object)
            .filter(([name, deployment]) => deployment.hasOwnProperty(placement));
    }

    resourceUnit(val: number) {
        return { val: "1000" };
    }

    serviceResourceCpu(service: any) {
        return {
            units: this.resourceUnit(1000)
        };
    }

    serviceResourceMemory(service: any) {
        return {
            units: this.resourceUnit(1000)
        };
    }

    serviceResourceStorage(service: any) {
        return {
            units: this.resourceUnit(1000)
        };
    }

    serviceResourceEndpoints(service: any) {
        return {
            units: this.resourceUnit(1000)
        };
    }

    serviceResources(service: any) {
        return {
            cpu: this.serviceResourceCpu(service),
            memory: this.serviceResourceMemory(service),
            storage: this.serviceResourceStorage(service),
            endpoints: this.serviceResourceEndpoints(service),
        }
    }

    parseServiceProto(proto?: string) {
        const raw = proto?.toUpperCase();
        let result = "TCP";

        switch (raw) {
            case "TCP":
            case "":
            case undefined:
                result = "TCP";
                break;
            case "UDP":
                result = "UDP";
                break;
            default:
                throw new Error("ErrUnsupportedServiceProtocol");
        }

        return result;
    }

    manifestExpose(service: any) {
        return service.expose.map((expose: any) => ({
            Port: expose.port,
            ExternalPort: expose.as || 0,
            Proto: this.parseServiceProto(expose.proto),
            Service: this.manifestExposeService(expose),
            // Global: true,
            // Hosts: null,
            // HTTPOptions: {
            //     "MaxBodySize": 1048576,
            //     "ReadTimeout": 60000,
            //     "SendTimeout": 60000,
            //     "NextTries": 3,
            //     "NextTimeout": 0,
            //     "NextCases": [
            //         "error",
            //         "timeout",
            //     ],
            // },
            // IP: "",
            // EndpointSequenceNumber: 0,
        }));
    }

    manifestService(name: string, deployment: string) {
        const service = this.data.services[name];

        return {
            Name: name,
            Image: service.image,
            Command: null,
            Args: null,
            Env: null,
            Resources: this.serviceResources(service),
            Count: 1,
            Expose: this.manifestExpose(service),
        }
    }

    manifest() {
        return Object.entries(this.placements())
            .map(([name]) => ({
                Name: name,
                Services: this.deploymentsByPlacement(name)
                    .map(([name, deployment]) => this.manifestService(name, deployment))
            }));
    }
}