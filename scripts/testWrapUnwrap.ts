import { ethers } from "hardhat";

async function main() {
  // Get the contract factory
  const WTAO = await ethers.getContractFactory("WTAO");
  const provider = new ethers.JsonRpcProvider(
    "https://test.chain.opentensor.ai"
  );

  const wallet = new ethers.Wallet(process.env.PRIVATE_KEY!, provider);
  const wtao = WTAO.attach(process.env.WTAO_ADDRESS!).connect(wallet) as any;
  const tx = await wtao.deposit({ value: ethers.parseEther("1") });
  await tx.wait();
  console.log("Deposit successful");
  const balance = await wtao.balanceOf(wallet.address);
  console.log("Balance:", ethers.formatEther(balance));
  const tx2 = await wtao.withdraw(ethers.parseEther("1"));
  await tx2.wait();
  console.log("Withdraw successful");
}

// Handle errors
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
