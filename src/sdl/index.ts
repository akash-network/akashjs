import YAML from 'js-yaml';
import { Manifest, Service, ServiceExpose, ServiceExposeHttpOptions, v2Expose, v2ProfileCompute, v2ResourceCPU, v2ResourceMemory, v2ResourceStorageArray, v2Sdl, v2Service } from './types';
import { convertResourceString } from './sizes';
export class SDL {

    data: v2Sdl;

    constructor(data: v2Sdl) {
        this.data = data;
    }

    static fromString(yaml: string) {
        const data = YAML.load(yaml) as v2Sdl
        return new SDL(data);
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

    serviceNames() {
        const names = this.data
            ? Object.keys(this.data.services)
            : [];

        // TODO: sort these
        return names;
    }

    deploymentsByPlacement(placement: string) {
        const deployments = this.data
            ? this.data.deployment
            : [];

        return Object.entries(deployments as object)
            .filter(([name, deployment]) => deployment.hasOwnProperty(placement));
    }

    resourceUnit(val: string) {
        return { val: convertResourceString(val) };
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
            size: this.resourceUnit(resource.size)
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
        return expose.accept || null;
    }

    manifestExposeHttpOptions(expose: v2Expose): ServiceExposeHttpOptions {
        const defaults = {
            MaxBodySize: 1048576,
            ReadTimeout: 60000,
            SendTimeout: 60000,
            NextTries: 3,
            NextTimeout: 0,
            NextCases: [
                "error",
                "timeout",
            ],
        };

        return {
            MaxBodySize: expose.http_options?.max_body_size || defaults.MaxBodySize,
            ReadTimeout: expose.http_options?.read_timeout || defaults.ReadTimeout,
            SendTimeout: expose.http_options?.send_timeout || defaults.SendTimeout,
            NextTries: expose.http_options?.next_tries || defaults.NextTries,
            NextTimeout: expose.http_options?.next_timeout || defaults.NextTimeout,
            NextCases: expose.http_options?.next_cases || defaults.NextCases,
        };
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

    manifestService(placement: string, name: string): Service {
        const service = this.data.services[name];
        const profile = this.data.profiles.compute[name];
        const deployment = this.data.deployment[name];

        return {
            Name: name,
            Image: service.image,
            Command: service.command,
            Args: service.args,
            Env: service.env,
            Resources: this.serviceResources(service, profile),
            Count: deployment[placement].count,
            Expose: this.manifestExpose(service),
        }
    }

    manifest(): Manifest {
        return Object.keys(this.placements()).map(name => ({
            Name: name,
            Services: this.deploymentsByPlacement(name)
                .map(([service]) => this.manifestService(name, service))
        }));
    }
}