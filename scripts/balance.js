const hre = require("hardhat");
const tokenContractJSON = require("../artifacts/contracts/mylili.sol/mylili.json");

const tokenAddress = "0xa0B68e4A2d91FEee686663B4ad2c7b2dBe0f42B7"; // place your erc20 contract address here
const tokenABI = tokenContractJSON.abi;
const walletAddress = "0x97385f5156384FA4430a0a335A9DcED02B6D043D"; // place your public address for your wallet here

async function main() {

    const token = await hre.ethers.getContractAt(tokenABI, tokenAddress);

    console.log("You now have: " + await token.balanceOf(walletAddress) + " tokens");
  }
  
  // We recommend this pattern to be able to use async/await everywhere
  // and properly handle errors.
  main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });
