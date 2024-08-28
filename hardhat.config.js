require("@nomicfoundation/hardhat-toolbox");
require("./task/deploy");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  networks: {
    ethereum: {
      url: process.env.ETHEREUM_RPC_URL,
      accounts: [process.env.DEPLOYER_PRIV_KEY],
    },
    gnosis: {
      url: process.env.GNOSIS_RPC_URL,
      accounts: [process.env.DEPLOYER_PRIV_KEY],
    },
    sepolia: {
      url: process.env.SEPOLIA_RPC_URL,
      accounts: [process.env.DEPLOYER_PRIV_KEY],
    },
    chiado: {
      url: "https://rpc.chiadochain.net",
      chainId: 10200,
      blockGasLimit: 60000000,
      accounts: [process.env.DEPLOYER_PRIV_KEY],
    },
  },
  etherscan: {
    apiKey: {
      sepolia: process.env.ETHERSCAN_API_KEY,
      chiado: process.env.CHIADO_BLOCKSCOUT_API_KEY,
      gnosis: process.env.GNOSISSCAN_API_KEY,
      ethereum: process.env.ETHERSCAN_API_KEY,
    },
    customChains: [
      {
        network: "chiado",
        chainId: 10200,
        urls: {
          apiURL: "https://gnosis-chiado.blockscout.com/api",
          browserURL: "https://gnosis-chiado.blockscout.com/",
        },
      },
    ],
  },

  solidity: "0.4.24",
};
