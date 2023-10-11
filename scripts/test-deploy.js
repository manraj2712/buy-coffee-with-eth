const hre = require("hardhat");

async function getBalances(address) {
  const balanceBigInt = await hre.ethers.provider.getBalance(address);
  return hre.ethers.formatEther(balanceBigInt);
}

async function consoleBalances(addresses) {
  let counter = 0;
  for (const address of addresses) {
    console.log(
      `Address ${counter} (${address}): ${await getBalances(address)}`
    );
    counter++;
  }
}

async function consoleMemos(memos) {
  for (const memo of memos) {
    const timestamp = memo.timestamp;
    const name = memo.name;
    const message = memo.message;
    const address = memo.from;
    console.log(`Memo from ${name} (${address}) at ${timestamp}: ${message}`);
  }
}
async function main() {
  const [owner, from1, from2, from3] = await hre.ethers.getSigners();
  const coffee = await hre.ethers.getContractFactory("Coffee");
  const coffeeContract = await coffee.deploy();

  await coffeeContract.waitForDeployment();
  const coffeeContractAddress = await coffeeContract.getAddress();

  console.log("Coffee deployed to:", coffeeContractAddress);

  const addresses = [
    owner.address,
    from1.address,
    from2.address,
    from3.address,
  ];

  console.log("After buying chai");
  await consoleBalances(addresses);

  const amount = { value: hre.ethers.parseEther("1.0") };

  await coffeeContract
    .connect(from1)
    .buyMeACoffee("Manraj", "Hello World", amount);
  await coffeeContract
    .connect(from2)
    .buyMeACoffee("Manraj1", "Hello World1", amount);
  await coffeeContract
    .connect(from3)
    .buyMeACoffee("Manraj2", "Hello World2", amount);

  console.log("After buying coffee");
  await consoleBalances(addresses);

  const memos = await coffeeContract.getMemos();

  consoleMemos(memos);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
