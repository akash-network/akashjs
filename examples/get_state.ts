import { getMetadata } from "@akashnetwork/akashjs/build/network";

async function fetchMetadata() {
  try {
    console.log("Fetching metadata...");
    const metadata = await getMetadata("mainnet");
    console.log(JSON.stringify(metadata, null, 2));
  } catch (error) {
    console.error("Error fetching metadata:", error);
  }
}

fetchMetadata();
