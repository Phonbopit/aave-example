const config = {
  fuji: {
    simpleFlash: '0xB2Ce51023e3dC68e0B91Ca5C80E1E0FC9dC2bD43',
    poolProvider: '0x1775ECC8362dB6CaB0c7A9C0957cF656A5276c29',
    aaveFaucets: '0x127277bF2F5fA186bfC6b3a0ca00baefB5472d3a',
    tokens: {
      usdc: {
        address: '0x3e937b4881cbd500d05eedab7ba203f2b7b3f74f',
        decimals: 6,
      },
      wbtc: {
        address: '0x09C85Ef96e93f0ae892561052B48AE9DB29F2458',
        decimals: 8,
      },
    },
  },
  rinkeby: {
    simpleFlash: '0x0ad4b70C6Ef7CDC564406baB70dF738D7147Dd9e',
    poolProvider: '0xBA6378f1c1D046e9EB0F538560BA7558546edF3C',
    aaveFaucets: '0x88138CA1e9E485A1E688b030F85Bb79d63f156BA',
    tokens: {
      usdc: {
        address: '0xb18d016cDD2d9439A19f15633005A6b2cd6Aa774',
        decimals: 6,
      },
      wbtc: {
        address: '0x124F70a8a3246F177b0067F435f5691Ee4e467DD',
        decimals: 8,
      },
    },
  },
}

module.exports = config
