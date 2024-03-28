/**
 * @type import('hardhat/config').HardhatUserConfig
 */
require("@nomiclabs/hardhat-etherscan");
require('@nomiclabs/hardhat-ethers');
require('dotenv').config();

const {PROVIDER_KEY, WALLET_PRIVATE_KEY, ETHERSCAN_API_KEY, BSC_SCAN_API_KEY, AVAX_SCAN_API_KEY, POLYGON_SCAN_API_KEY} = process.env;

module.exports = {
   defaultNetwork: 'hardhat',
   networks: {
    localhost: {
      url: "http://127.0.0.1:8545"
    },
    hardhat: {
      allowUnlimitedContractSize: false
    },
    mainnet: {
      url: `https://mainnet.infura.io/v3/${PROVIDER_KEY}`,
      accounts: [`0x${WALLET_PRIVATE_KEY}`]
    },
    polygon: {
      url: `https://polygon-mainnet.infura.io/v3/${process.env.PROVIDER_KEY}`,
      accounts: [`0x${WALLET_PRIVATE_KEY}`]
    },
    avalancheMain: {
      url: 'https://api.avax.network/ext/bc/C/rpc',
      gasPrice: 225000000000,
      chainId: 43114,
      accounts: [`0x${WALLET_PRIVATE_KEY}`]
    },
    fantom: {
      url: 'https://rpcapi.fantom.network',
      accounts: [`0x${WALLET_PRIVATE_KEY}`],
      chainId: 250
    },

    ropsten: {
      url: `https://ropsten.infura.io/v3/${PROVIDER_KEY}`,
      accounts: [`0x${WALLET_PRIVATE_KEY}`]
    },
    rinkeby: {
      url: `https://rinkeby.infura.io/v3/${PROVIDER_KEY}`,
      accounts: [`0x${WALLET_PRIVATE_KEY}`],
      gas: 6000000
    },
    goerli: {
      url: `https://goerli.infura.io/v3/${PROVIDER_KEY}`,
      accounts: [`0x${WALLET_PRIVATE_KEY}`]
    },
    kovan: {
      url: `https://kovan.infura.io/v3/${PROVIDER_KEY}`,
      accounts: [`0x${WALLET_PRIVATE_KEY}`]
    },
    mumbai: {
      url: 'https://matic-mumbai.chainstacklabs.com',
      accounts: [`0x${WALLET_PRIVATE_KEY}`],
      chainId: 80001,
      gas: 6000000
    },
    avalancheTest: {
        url: 'https://api.avax-test.network/ext/bc/C/rpc',
        gasPrice: 225000000000,
        chainId: 43113,
        accounts: [`0x${WALLET_PRIVATE_KEY}`]
    },
    bnbTest: {
      url: 'https://data-seed-prebsc-1-s1.binance.org:8545/',
      gas: 6000000,
      chainId: 97,
      accounts: [`0x${WALLET_PRIVATE_KEY}`]
    },
    ftmTest: {
      url: 'https://rpc.testnet.fantom.network',
      gasPrice: 225000000000,
      chainId: 4002,
      accounts: [`0x${WALLET_PRIVATE_KEY}`]
    }
  },
   solidity: {
      compilers: [
         {
            version: '0.5.16',
            settings: {
               optimizer: {
                  enabled: true,
                  runs: 200
               }
            }
         },
         {
            version: '0.6.6',
            settings: {
               optimizer: {
                  enabled: true,
                  runs: 200
               }
            }
         }
      ]
   },
   paths: {
      sources: './contracts',
      cache: './cache',
      artifacts: './artifacts',
   },
   mocha: {
      timeout: 20000
   },
   etherscan: {
    // apiKey: ETHERSCAN_API_KEY
    // apiKey: BSC_SCAN_API_KEY
    apiKey: AVAX_SCAN_API_KEY
    // apiKey: POLYGON_SCAN_API_KEY
    // apiKey: FTM_SCAN_API_KEY
  }
};
