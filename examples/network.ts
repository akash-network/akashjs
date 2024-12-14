import { 
    getEndpointHealthStatus, 
    getEndpointsSorted, 
    getMetadata,
    getEndpoints
} from "@akashnetwork/akashjs/build/network";

async function fetchMetadata() {
    try {
        console.log("Fetching metadata...");
        const metadata = await getMetadata("mainnet");
        console.log(JSON.stringify(metadata, null, 2));
    } catch (error) {
        console.error("Error fetching metadata:", error);
    }
}

async function fetchEndpoints() {
    try {
        const endpoints = await getEndpoints("mainnet", "rpc");
        console.log(JSON.stringify(endpoints, null, 2));
    } catch (error) {
        console.error("Error fetching endpoints:", error);
    }
}


async function checkEndpointHealth() {
    try {
        const endpoints = await getEndpoints("mainnet", "rpc");
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