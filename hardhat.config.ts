import { HardhatUserConfig } from "hardhat/config";
import "solidity-coverage";
import "@nomicfoundation/hardhat-toolbox";

const config: HardhatUserConfig = {
  solidity: {
    version: "0.8.20",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
      viaIR: true,
    },
  },
  networks: {
    hardhat: {},
    taoevm: {
      url: "https://lite.chain.opentensor.ai",
      chainId: 964,
      accounts: [process.env.PRIVATE_KEY || ""],
    },
    taoevm_testnet: {
      url: "https://test.chain.opentensor.ai",
      chainId: 945,
      accounts: [process.env.PRIVATE_KEY || ""],
    },
  },
};

export default config;
