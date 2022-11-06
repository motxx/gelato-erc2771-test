import { ethers } from "ethers";
import { GelatoRelaySDK } from "@gelatonetwork/relay-sdk";
import { DemoERC20__factory } from "../typechain/factories/contracts/DemoERC20__factory";

import * as dotenv from "dotenv";
dotenv.config();

const alchemyApiKey = process.env.ALCHEMY_ID!;
const contractAddr = process.env.DEPLOYED_ADDR!;
const signerPrivateKey = process.env.SIGNER_PK!;
const recipientAddr = process.env.RECIPIENT_ADDR!;
const sponsorApiKey = process.env.SPONSOR_API_KEY!;

// Set up on-chain variables, such as target address
const provider = new ethers.providers.AlchemyProvider("arbitrum", alchemyApiKey);
const signer = new ethers.Wallet(signerPrivateKey!, provider);
const user = await signer.getAddress();

// Generate the target payload
const contract = DemoERC20__factory.connect(contractAddr, signer);
const { data } = await contract.populateTransaction.transfer(recipientAddr, 1);

// Populate a relay request
const request = {
  chainId: provider.network.chainId,
  target: contractAddr,
  data: data!,
  user: user,
};

// Without a specific API key, the relay request will fail! 
// Reach out to us on Discord to discuss getting an API key.
// Send a relay request using GelatoRelaySDK!
const relayResponse = 
  await GelatoRelaySDK.relayWithSponsoredUserAuthCall(
    request,
    provider as unknown as ethers.providers.Web3Provider,
    sponsorApiKey
  );