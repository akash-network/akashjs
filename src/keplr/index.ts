import { getAkashTypeRegistry } from "../stargate";
import { defaultRegistryTypes, SigningStargateClient } from "@cosmjs/stargate";
import { OfflineDirectSigner, OfflineSigner, Registry } from "@cosmjs/proto-signing";
import { AminoTypes } from "@cosmjs/stargate";
import { Certificate } from "@akashnetwork/akash-api/akash/cert/v1beta2";
import { MsgCreateCertificate } from "../protobuf/akash/cert/v1beta1/cert";

interface Chain {
  id: string;
}

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

export function getSigner(chain: Chain) {
  return window.getOfflineSignerAuto(chain.id);
}

export async function get(chain: Chain, signer: OfflineSigner | OfflineDirectSigner, endPoint: string) {
  const customAminoTypes = new AminoTypes({
    "/akash.cert.v1beta2.MsgCreateCertificate": {
      aminoType: "cert/cert-create-certificate",
      toAmino: ({ cert, pubkey }: MsgCreateCertificate) => {
        const buf = Certificate.encode(
          Certificate.fromPartial({
            cert,
            pubkey
          })
        ).finish();
        const encoded = Buffer.from(buf);
        return encoded.toString("base64");
      },
      fromAmino: ({ cert, pubkey }: MsgCreateCertificate) => {
        return Certificate.fromPartial({
          cert,
          pubkey
        });
      }
    }
  });

  const myRegistry = new Registry([...defaultRegistryTypes, ...getAkashTypeRegistry()]);

  return await SigningStargateClient.connectWithSigner(endPoint, signer, {
    registry: myRegistry,
    aminoTypes: customAminoTypes
  });
}
