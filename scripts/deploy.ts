import { ethers } from "hardhat";

async function main() {
  // Get the contract factory
  const WTAO = await ethers.getContractFactory("WTAO");

  // Deploy the contract
  console.log("Deploying WTAO...");
  const wtao = await WTAO.deploy();
  await wtao.waitForDeployment();
  console.log("WTAO deployed to:", await wtao.getAddress());
}

// Handle errors
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
