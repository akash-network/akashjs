import { getAkashTypeRegistry } from "../stargate";
import { defaultRegistryTypes, SigningStargateClient } from "@cosmjs/stargate";
import { Registry } from "@cosmjs/proto-signing";
import { AminoTypes } from "@cosmjs/stargate";
import { Certificate } from "@akashnetwork/akash-api/akash/cert/v1beta2";

export function getChains() {
  return {
    mainnet: {
      id: "akashnet-2",
      name: "Akash Mainnet",
      messagePath: "v1beta2"
    },
    testnet: { id: "testnet-1", name: "Akash Testnet", messagePath: "v1beta2" }
  };
}

export function getSigner(chain: any) {
  return (window as any).getOfflineSignerAuto(chain.id);
}

export async function get(chain: any, signer: any, endPoint: string) {
  const customAminoTypes: any = new AminoTypes({
    "/akash.cert.v1beta2.MsgCreateCertificate": {
      aminoType: "cert/cert-create-certificate",
      toAmino: ({ owner, cert, pubkey }: any) => {
        const buf: any = Certificate.encode(
          Certificate.fromPartial({
            owner,
            cert,
            pubkey
          } as any)
        ).finish();
        const encoded = Buffer.from(buf);
        return encoded.toString("base64");
      },
      fromAmino: ({ owner, cert, pubkey }: any) => {
        return Certificate.fromPartial({
          owner,
          cert,
          pubkey
        } as any);
      }
    }
  } as any);

  const myRegistry = new Registry([...defaultRegistryTypes, ...getAkashTypeRegistry()]);

  return await SigningStargateClient.connectWithSigner(endPoint, signer, {
    bip44: {
      coinType: "118"
    },
    registry: myRegistry,
    aminoTypes: customAminoTypes
  } as any);
}
function bufferToHex(buffer: any) {
  return [...new Uint8Array(buffer)].map(b => b.toString(16).padStart(2, "0")).join("");
}
