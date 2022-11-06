import { HardhatUserConfig } from "hardhat/config";

import "@nomiclabs/hardhat-waffle";
import "@nomiclabs/hardhat-etherscan";
import "@nomiclabs/hardhat-ethers";
import "@typechain/hardhat";

import * as dotenv from "dotenv";
dotenv.config();

const DEPLOYER_PK = process.env.DEPLOYER_PK;
const ALCHEMY_ID = process.env.ALCHEMY_ID;
const ARBISCAN_API_KEY = process.env.ARBISCAN_API_KEY;

export const config: HardhatUserConfig & { etherscan: { apiKey?: string } } = {
  defaultNetwork: "hardhat",

  networks: {
    arbitrum: {
      accounts: DEPLOYER_PK ? [DEPLOYER_PK] : [],
      chainId: 42161,
      url: `https://arb-mainnet.g.alchemy.com/v2/${ALCHEMY_ID}`,
    },
    optimism: {
      url: `https://opt-mainnet.g.alchemy.com/v2/${ALCHEMY_ID}`,
      chainId: 10,
      accounts: DEPLOYER_PK ? [DEPLOYER_PK] : [],
    },
  },
  etherscan: {
    apiKey: ARBISCAN_API_KEY,
  },

  solidity: {
    compilers: [
      {
        version: "0.8.17",
        settings: {
          optimizer: { enabled: true, runs: 2000 },
        },
      },
    ],
  },

  typechain: {
    outDir: "typechain",
    target: "ethers-v5",
  },
};

export default config;
