require("@nomiclabs/hardhat-waffle");

const { privateKeys } = require('./secrets.json');

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.17",
  networks: {
    hardhat: {},
    testnet: {
      url: `https://data-seed-prebsc-1-s1.binance.org:8545`,
      chainId: 97,
      gasPrice: 20000000000,
      accounts: privateKeys,
    },
    mainnet: {
      url: `https://bsc-dataseed1.binance.org`,
      chainId: 56,
      gasPrice: 20000000000,
      accounts: privateKeys,
    }
  },
};
