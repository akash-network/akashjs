import YAML from 'js-yaml';
import { Manifest, Service, ServiceExpose, ServiceExposeHttpOptions, v2ComputeResources, v2Expose, v2ExposeTo, v2HTTPOptions, v2ProfileCompute, v2ResourceCPU, v2ResourceMemory, v2ResourceStorage, v2ResourceStorageArray, v2Sdl, v2Service } from './types';
import { convertResourceString } from './sizes';
import { default as stableStringify } from "json-stable-stringify";
import crypto from "node:crypto";

const Endpoint_SHARED_HTTP = 0;
const Endpoint_RANDOM_PORT = 1;
const Endpoint_LEASED_IP = 2;

function isArray<T>(obj: any): obj is Array<T> {
    return obj && obj.map !== undefined;
}

function isString(str: any): str is string {
    return typeof str === 'string';
}

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

    resourceUnit(val: string, asString: boolean) {
        return asString
            ? { val: `${convertResourceString(val)}` }
            : { val: convertResourceString(val) }
    }

    resourceValue(value: { toString: () => string } | null, asString: boolean) {
        if (value === null) {
            return value;
        }

        const strVal = value.toString();
        const encoder = new TextEncoder();

        return asString
            ? strVal
            : encoder.encode(strVal);
    }

    serviceResourceCpu(resource: v2ResourceCPU) {
        const units = isString(resource.units)
            ? convertResourceString(resource.units)
            : resource.units;

        return {
            units: {
                val: `${units * 1000}`
            }
        };
    }

    serviceResourceMemory(resource: v2ResourceMemory, asString: boolean) {
        const key = asString ? "quantity" : "size";

        return {
            [key]: this.resourceUnit(resource.size, asString)
        };
    }

    serviceResourceStorage(resource: v2ResourceStorageArray | v2ResourceStorage, asString: boolean) {
        const key = asString ? "quantity" : "size";
        const storage = isArray(resource)
            ? resource
            : [resource];

        return storage.map(storage => ({
            name: storage.name || "default",
            [key]: this.resourceUnit(storage.size, asString)
        }));
    }

    serviceResourceEndpoints() {
        return null;
    }

    serviceResources(profile: v2ProfileCompute, asString: boolean = false) {
        return {
            cpu: this.serviceResourceCpu(profile.resources.cpu),
            memory: this.serviceResourceMemory(profile.resources.memory, asString),
            storage: this.serviceResourceStorage(profile.resources.storage, asString),
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

    manifestExposeGlobal(to: v2ExposeTo) {
        return to.global || false;
    }

    manifestExposeHosts(expose: v2Expose) {
        return expose.accept || null;
    }

    httpOptions(http_options: v2HTTPOptions | undefined) {
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

        if (!http_options) {
            return { ...defaults };
        }

        return {
            MaxBodySize: http_options.max_body_size || defaults.MaxBodySize,
            ReadTimeout: http_options.read_timeout || defaults.ReadTimeout,
            SendTimeout: http_options.send_timeout || defaults.SendTimeout,
            NextTries: http_options.next_tries || defaults.NextTries,
            NextTimeout: http_options.next_timeout || defaults.NextTimeout,
            NextCases: http_options.next_cases || defaults.NextCases,
        };
    }

    manifestExposeHttpOptions(expose: v2Expose): ServiceExposeHttpOptions {
        return this.httpOptions(expose.http_options);
    }

    manifestExpose(service: v2Service): ServiceExpose[] {
        return service.expose.flatMap((expose) => expose.to
            ? expose.to.map((to) => ({
                Port: expose.port,
                ExternalPort: expose.as || 0,
                Proto: this.parseServiceProto(expose.proto),
                Service: this.manifestExposeService(expose),
                Global: this.manifestExposeGlobal(to),
                Hosts: this.manifestExposeHosts(expose),
                HTTPOptions: this.manifestExposeHttpOptions(expose),
                IP: "",
                EndpointSequenceNumber: 0,
            }))
            : []
        );
    }

    manifestService(placement: string, name: string, asString: boolean): Service {
        const service = this.data.services[name];
        const profile = this.data.profiles.compute[name];
        const deployment = this.data.deployment[name];

        return {
            Name: name,
            Image: service.image,
            Command: service.command || null,
            Args: service.args || null,
            Env: service.env || null,
            Resources: this.serviceResources(profile, asString),
            Count: deployment[placement].count,
            Expose: this.manifestExpose(service),
        }
    }

    manifest(asString: boolean = false): Manifest {
        return Object.keys(this.placements()).map(name => ({
            Name: name,
            Services: this.deploymentsByPlacement(name)
                .map(([service]) => this.manifestService(name, service, asString))
        }));
    }

    computeEndpointSequenceNumbers(sdl: v2Sdl) {
        return Object.fromEntries(
            Object.values(sdl.services).flatMap((service) => (
                service.expose.map((expose) => (
                    expose.to
                        ? expose.to
                            .filter((to) => to.global && to.ip?.length > 0)
                            .map((to) => to.ip)
                            .sort()
                            .map((ip, index) => [ip, index + 1])
                        : []
                ))
            ))
        )
    }

    resourceUnitCpu(computeResources: v2ComputeResources, asString: boolean) {
        const attributes = computeResources.cpu.attributes;
        const cpu =
            isString(computeResources.cpu.units)
                ? convertResourceString(computeResources.cpu.units)
                : (computeResources.cpu.units * 1000);

        return {
            units: { val: this.resourceValue(cpu, asString) },
            attributes:
                attributes &&
                Object.entries(attributes)
                    .sort(([k0,], [k1,]) => k0.localeCompare(k1))
                    .map(([key, value]) => ({
                        key: key,
                        value: this.resourceValue(value, asString)
                    }))
        };
    }

    resourceUnitMemory(computeResources: v2ComputeResources, asString: boolean) {
        const attributes = computeResources.memory.attributes;

        return {
            quantity: { val: this.resourceValue(convertResourceString(computeResources.memory.size), asString) },
            attributes:
                attributes &&
                Object.entries(attributes)
                    .sort(([k0,], [k1,]) => k0.localeCompare(k1))
                    .map(([key, value]) => ({
                        key: key,
                        value: this.resourceValue(value, asString)
                    }))
        };
    }

    resourceUnitStorage(computeResources: v2ComputeResources, asString: boolean) {
        const storages = isArray(computeResources.storage)
            ? computeResources.storage
            : [computeResources.storage];

        return storages.map((storage) => ({
            name: storage.name || "default",
            quantity: { val: this.resourceValue(convertResourceString(storage.size), asString) },
            attributes:
                storage.attributes &&
                Object.entries(storage.attributes)
                    .sort(([k0,], [k1,]) => k0.localeCompare(k1))
                    .map(([key, value]) => ({
                        key: key,
                        value: this.resourceValue(value, asString)
                    }))
        }));
    }

    groupResourceUnits(resource: v2ComputeResources | undefined, asString: boolean) {
        if (!resource) return {};

        let units = {
            endpoints: null
        } as any;

        if (resource.cpu) {
            units.cpu = this.resourceUnitCpu(resource, asString);
        }

        if (resource.memory) {
            units.memory = this.resourceUnitMemory(resource, asString);
        }

        if (resource.storage) {
            units.storage = this.resourceUnitStorage(resource, asString);
        }

        return units;
    }

    exposeShouldBeIngress(expose: { proto: string, global: boolean, externalPort: number, port: number }) {
        const externalPort = expose.externalPort === 0
            ? expose.port
            : expose.externalPort

        return expose.global
            && expose.proto === "TCP"
            && externalPort === 80;
    }

    groups() {
        const sdl = this;
        const yamlJson = this.data;
        const ipEndpointNames = this.computeEndpointSequenceNumbers(yamlJson);

        let groups = {} as any;

        Object.keys(yamlJson.services).forEach((svcName) => {
            const svc = yamlJson.services[svcName];
            const depl = yamlJson.deployment[svcName];

            Object.keys(depl).forEach((placementName) => {
                const svcdepl = depl[placementName];
                const compute = yamlJson.profiles.compute[svcdepl.profile];
                const infra = yamlJson.profiles.placement[placementName];
                const pricing = infra.pricing[svcdepl.profile];
                const price = {
                    ...pricing,
                    amount: pricing.amount.toString()
                };

                let group = groups[placementName];

                if (!group) {
                    group = {
                        name: placementName,
                        requirements: {
                            attributes: infra.attributes
                                ? Object.entries(infra.attributes).map(([key, value]) => ({ key, value }))
                                : [],
                            signed_by: {
                                all_of: infra.signedBy?.allOf || [],
                                any_of: infra.signedBy?.anyOf || []
                            }
                        },
                        resources: []
                    };

                    if (group.requirements.attributes) {
                        group.requirements.attributes = group.requirements.attributes
                            .sort((a: any, b: any) => a.key < b.key);
                    }

                    groups[group.name] = group;
                }

                const resources = {
                    resources: this.groupResourceUnits(compute.resources, false), // Changed resources => unit
                    price: price,
                    count: svcdepl.count
                };

                let endpoints = [] as any[];
                svc?.expose?.forEach((expose) => {
                    expose?.to
                        ?.filter((to) => to.global)
                        .forEach((to) => {
                            const exposeSpec = {
                                port: expose.port,
                                externalPort: expose.as || 0,
                                proto: sdl.parseServiceProto(expose.proto),
                                global: !!to.global,
                            };

                            if (to.ip?.length > 0) {
                                const seqNo = ipEndpointNames[to.ip];
                                endpoints.push({ kind: Endpoint_LEASED_IP, sequence_number: seqNo });
                            }

                            const kind = sdl.exposeShouldBeIngress(exposeSpec)
                                ? Endpoint_SHARED_HTTP
                                : Endpoint_RANDOM_PORT;

                            endpoints.push({ kind: kind, sequence_number: 0 });
                        });
                });

                resources.resources.endpoints = endpoints;
                group.resources.push(resources);
            });
        });

        return Object.keys(groups)
            .sort((a, b) => a < b ? 1 : 0)
            .map((name) => groups[name]);
    }

    escapeHtml(raw: string) {
        return raw.replace(/</g, "\\u003c").replace(/>/g, "\\u003e").replace(/&/g, "\\u0026");
    }

    SortJSON(jsonStr: string) {
        return this.escapeHtml(stableStringify(JSON.parse(jsonStr)));
    }

    manifestSortedJSON() {
        const manifest = this.manifest(true);
        let jsonStr = JSON.stringify(manifest);

        if (jsonStr) {
            jsonStr = jsonStr
                .replaceAll('"quantity":{"val', '"size":{"val')
                .replaceAll('"mount":', '"readOnlyTmp":')
                .replaceAll('"readOnly":', '"mount":')
                .replaceAll('"readOnlyTmp":', '"readOnly":');
        }

        return this.SortJSON(jsonStr);
    }

    async manifestVersion() {
        const jsonStr = this.manifestSortedJSON();
        const enc = new TextEncoder();
        const sortedBytes = enc.encode(jsonStr);
        const sum = await crypto.subtle.digest("SHA-256", sortedBytes);

        return new Uint8Array(sum);
    }
}