import YAML from 'js-yaml';
import { Manifest, Service, ServiceExpose, v2ComputeResources, v2Expose, v2ProfileCompute, v2ResourceCPU, v2ResourceMemory, v2ResourceStorageArray, v2Sdl, v2Service } from './types';

const unitMultipliers = {
    ki: 1024,
    mi: 1024 * 1024,
    gi: 1024 * 1024 * 1024,
    ti: 1024 * 1024 * 1024 * 1024,
    pi: 1024 * 1024 * 1024 * 1024 * 1024,
    ei: 1024 * 1024 * 1024 * 1024 * 1024 * 1024,
    k: 1000,
    m: 1000 * 1000,
    g: 1000 * 1000 * 1000,
    t: 1000 * 1000 * 1000 * 1000,
    p: 1000 * 1000 * 1000 * 1000 * 1000,
    e: 1000 * 1000 * 1000 * 1000 * 1000 * 1000,
    kb: 1000,
    mb: 1000 * 1000,
    gb: 1000 * 1000 * 1000,
    tb: 1000 * 1000 * 1000 * 1000,
    pb: 1000 * 1000 * 1000 * 1000 * 1000,
    eb: 1000 * 1000 * 1000 * 1000 * 1000 * 1000
};

export class SDL {

    data: v2Sdl;

    constructor(data: v2Sdl) {
        this.data = data;
    }

    static fromString(yaml: string) {
        const data = YAML.load(yaml) as v2Sdl
        return new SDL(data);
    }

    endpoints() {
        return [];
    }

    resource() {
        return {};
    }

    services() {
        if (this.data) {
            return this.data.services;
        }

        return {};
    }

    deployments() {
        if (this.data) {
            return this.data.deployment;
        }

        return {};
    }

    profiles() {
        if (this.data) {
            return this.data.profiles;
        }

        return {};
    }

    placements() {
        const { placement } = this.data.profiles;

        return placement || {};
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

    resourceAsNumber(resource: string): Number {
        const matchStr = resource.toLowerCase();
        const unit = Object.entries(unitMultipliers)
            .find(([unit, _]) => matchStr.endsWith(unit));

        if (unit) {
            const [suffix, multiplier] = unit;
            const numberStr = resource.substring(0, resource.length - suffix.length);
            return parseFloat(numberStr) * multiplier;
        } else {
            return parseFloat(resource);
        }
    }

    resourceUnit(val: string) {
        return { val: this.resourceAsNumber(val) };
    }

    memoryUnit(val: string) {
        return { val: this.resourceAsNumber(val) };
    }

    serviceResourceCpu(resource: v2ResourceCPU) {
        return {
            units: {
                val: `${resource.units * 1000}`
            }
        };
    }

    serviceResourceMemory(resource: v2ResourceMemory) {
        return {
            size: this.memoryUnit(resource.size)
        };
    }

    serviceResourceStorage(resource: v2ResourceStorageArray) {
        return resource.map(storage => ({
            name: storage.name || "default",
            size: this.resourceUnit(storage.size)
        }));
    }

    serviceResourceEndpoints() {
        return null;
    }

    serviceResources(service: v2Service, profile: v2ProfileCompute) {
        return {
            cpu: this.serviceResourceCpu(profile.resources.cpu),
            memory: this.serviceResourceMemory(profile.resources.memory),
            storage: this.serviceResourceStorage(profile.resources.storage),
            endpoints: this.serviceResourceEndpoints(),
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

    manifestExposeService(expose: v2Expose) {
        return "";
    }

    manifestExposeGlobal(expose: v2Expose) {
        return true;
    }

    manifestExposeHosts(expose: v2Expose) {
        return null;
    }

    manifestExposeHttpOptions(expose: any) {
        return {
            "MaxBodySize": 1048576,
            "ReadTimeout": 60000,
            "SendTimeout": 60000,
            "NextTries": 3,
            "NextTimeout": 0,
            "NextCases": [
                "error",
                "timeout",
            ],
        }
    }

    manifestExpose(service: v2Service): ServiceExpose[] {
        return service.expose.map((expose) => ({
            Port: expose.port,
            ExternalPort: expose.as || 0,
            Proto: this.parseServiceProto(expose.proto),
            Service: this.manifestExposeService(expose),
            Global: this.manifestExposeGlobal(expose),
            Hosts: this.manifestExposeHosts(expose),
            HTTPOptions: this.manifestExposeHttpOptions(expose),
            IP: "",
            EndpointSequenceNumber: 0,
        }));
    }

    manifestService(name: string, deployment: string): Service {
        const service = this.data.services[name];
        const profile = this.data.profiles.compute[name];

        return {
            Name: name,
            Image: service.image,
            Command: null,
            Args: null,
            Env: null,
            Resources: this.serviceResources(service, profile),
            Count: 1,
            Expose: this.manifestExpose(service),
        }
    }

    manifest(): Manifest {
        return Object.entries(this.placements()).map(([name, placement]) => ({
            Name: name,
            Services: this.deploymentsByPlacement(name)
                .map(([name, deployment]) => this.manifestService(name, deployment))
        }));
    }
}