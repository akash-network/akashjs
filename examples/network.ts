import { 
    getEndpointHealthStatus, 
    getEndpointsSorted, 
    getMetadata,
    getEndpoints,
    ENDPOINT_TYPE,
    NETWORK_TYPE
} from "../src/network";

// Example to fetch metadata about Akash Network
async function fetchMetadata() {
    try {
        console.log("Fetching metadata...");
        const metadata = await getMetadata(NETWORK_TYPE.MAINNET);
        console.log(JSON.stringify(metadata, null, 2));
    } catch (error) {
        console.error("Error fetching metadata:", error);
    }
}

// Example to fetch REST endpoints
async function fetchEndpoints() {
    try {
        const endpoints = await getEndpoints(NETWORK_TYPE.MAINNET, ENDPOINT_TYPE.REST);
        endpoints.forEach(endpoint => {
            console.log(endpoint.address);
        });
    } catch (error) {
        console.error("Error fetching endpoints:", error);
    }
}

// Example to check endpoint health
async function checkEndpointHealth() {
    try {
        const endpoints = await getEndpoints(NETWORK_TYPE.MAINNET, ENDPOINT_TYPE.REST);
        const healthStatusPromises = endpoints.map(getEndpointHealthStatus(800));
        const healthStatuses = await Promise.all(healthStatusPromises);

        console.log("Endpoint Health Statuses:");
        healthStatuses.forEach(status => {
            console.log(`Address: ${status.address}, Response Time: ${status.responseTime !== null ? status.responseTime + 'ms' : 'Unresponsive'}`);
        });
    } catch (error) {
        console.error("Error checking endpoint health:", error);
    }
}

fetchMetadata();
fetchEndpoints();
checkEndpointHealth();