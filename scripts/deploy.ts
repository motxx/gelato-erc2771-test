import "@nomiclabs/hardhat-ethers";
import "@nomiclabs/hardhat-waffle";
import { ethers } from "hardhat";

// Process Env Variables
import * as dotenv from "dotenv";
dotenv.config();

const TargetContract = "DemoERC20";
const InitialHolderAddr = process.env.INITIAL_HOLDER_ADDR!;
const ForwarderAddr = process.env.FORWARDER_ADDR!;

async function main() {
  const Contract = await ethers.getContractFactory(TargetContract);
  const contract = await Contract.deploy(InitialHolderAddr, ForwarderAddr);
  await contract.deployed();

  console.log(
    `${TargetContract}:\n` +
    `Deployed contract address => ${contract.address}`
  );
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
