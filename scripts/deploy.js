const { ethers } = require('hardhat');
const ether = ethers.utils.parseEther;

// Deploy function
async function deploy() {
   ethers.getDefaultProvider();
   [account] = await ethers.getSigners();
   deployerAddress = account.address;
   console.log(`Deploying contracts using ${deployerAddress}`);

   //Deploy WETH
   const weth = await ethers.getContractFactory('WETH');
   const wethInstance = await weth.deploy();
   await wethInstance.deployed();

   console.log(`WETH deployed to : ${wethInstance.address}`);

   //Deploy Factory
   const factory = await ethers.getContractFactory('UniswapV2Factory');
   const factoryInstance = await factory.deploy(deployerAddress);
   await factoryInstance.deployed();

   console.log(`Factory deployed to : ${factoryInstance.address}`);

   //Deploy Router passing Factory Address and WETH Address
   const router = await ethers.getContractFactory('UniswapV2Router02');
   const routerInstance = await router.deploy(
      factoryInstance.address,
      wethInstance.address
   );
   await routerInstance.deployed();

   console.log(`Router V02 deployed to :  ${routerInstance.address}`);

   // Deploy a pair and add liquidity
    const Pair = await ethers.getContractFactory("UniswapV2Pair");
    const Token = await ethers.getContractFactory("Token"); // sends the trx

    const tokenA = await Token.deploy("Token A", "TKNA");
    await tokenA.deployed();
    console.log(`Token A deployed to : ${tokenA.address}`);

    const tokenB = await Token.deploy("Token B", "TKNB");
    await tokenB.deployed();
    console.log(`Token B deployed to : ${tokenB.address}`);

    await tokenA.approve(routerInstance.address, ether("1"));
    await tokenB.approve(routerInstance.address, ether("1"));
  // Creates pair since it doesn't exist
    await routerInstance.addLiquidity(
    tokenA.address,
    tokenB.address,
    ether("1"),
    ether("1"),
    ether("1"),
    ether("1"),
    account.address,
    9999999999 // don't expire
    );

   //Deploy Multicall (needed for Interface)
   const multicall = await ethers.getContractFactory('Multicall2');
   const multicallInstance = await multicall.deploy();
   await multicallInstance.deployed();
   console.log(`Multicall deployed to : ${multicallInstance.address}`);
}

deploy()
   .then(() => process.exit(0))
   .catch((error) => {
      console.error(error);
      process.exit(1);
   });
