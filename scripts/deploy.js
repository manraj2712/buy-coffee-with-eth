const hre = require("hardhat");

async function main() {
  const coffee = await hre.ethers.getContractFactory("Coffee");
  const coffeeContract = await coffee.deploy();

  await coffeeContract.waitForDeployment();
  const coffeeContractAddress = await coffeeContract.getAddress();

  console.log("Coffee deployed to:", coffeeContractAddress);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
