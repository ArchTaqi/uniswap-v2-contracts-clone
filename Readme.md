# [Uniswap V2](https://github.com/Uniswap) Contracts

This is a Hardhat setup to deploy the necessary contracts of Uniswap.

## Get Started

## Deployment Steps

- [ ] Deploy Core Contract - UniSwap Factory
- [x] Deploy WETH Contract
- [x] Before moving to periphery get the `init code` from `UniswapV2Pair.sol` (in uniswap core repo). For that, compile it and copy the byte code (wihout 0x) and use this [service](https://emn178.github.io/online-tools/keccak_256.html) to get the init code, the input type should be "hex" insteed of "text". Change the init code in router with new value. Each time you update `UniswapV2Pair.sol` contract, you need to update the hex value in this line: `contracts/libraries/UniswapV2Library.sol#L25`
- [x] Deploy `UniswapV2Router02.sol`. Before deploying, change the original values to your own contract values. You may global search the contract addresses and replace it with your contract values.

> Uniswap V2 uses [CREATE2](https://www.evm.codes/#f5) opcode to deploy pair contracts. This opcode allows to generate contract addresses deterministically without depending on external state (deployer's nonce). Instead, it uses the hash of the deployed contract code and salt: `contracts/UniswapV2Factory.sol#L32`
> Each time you update the Pair contract (even when you change compiler version), its bytecode changes, which means the hash of the bytecode also changes.


### Deploy the contracts (Standalone)

 ```shell
$ yarn
$ yarn hardhat compile
$ yarn hardhat run scripts/deploy.js --network rinkeby 
$ yarn hardhat verify --network rinkeby 0xac5616b3a0e0b36De40804B6b313b4a739667068  '0xF30dA6E114A0e3C75ccDd1B193687213bA498C75'
$ yarn hardhat verify --network rinkeby <router-address>
 
$ yarn hardhat run scripts/deploy.js --network mumbai 
$ yarn hardhat verify --network rinkeby 0xac5616b3a0e0b36De40804B6b313b4a739667068  '0xF30dA6E114A0e3C75ccDd1B193687213bA498C75'
$ yarn hardhat verify --network rinkeby <router-address>

$ yarn hardhat run scripts/deploy.js --network avalancheTest 
$ yarn hardhat verify --network avalancheTest 0xe300C6adaf7F7D41E4FAE3f55f493E1B19a26FE1  '0xF30dA6E114A0e3C75ccDd1B193687213bA498C75'
$ yarn hardhat verify --network avalancheTest 0xB655d20ECA106e10C5823614764AE3B05B6AF32F 0xe300C6adaf7F7D41E4FAE3f55f493E1B19a26FE1 0xe2f6B676b27d93cd87F490649cA53B100c264553

$ yarn hardhat run scripts/deploy.js --network bnbTest 
$ yarn hardhat verify --network rinkeby 0xac5616b3a0e0b36De40804B6b313b4a739667068  '0xF30dA6E114A0e3C75ccDd1B193687213bA498C75'
$ yarn hardhat verify --network rinkeby <router-address>

$ yarn hardhat run scripts/deploy.js --network ftmTest 
$ yarn hardhat verify --network rinkeby 0xac5616b3a0e0b36De40804B6b313b4a739667068  '0xF30dA6E114A0e3C75ccDd1B193687213bA498C75'
$ yarn hardhat verify --network rinkeby <router-address>
 ```
