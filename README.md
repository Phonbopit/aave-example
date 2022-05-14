Aave Example
---

## Usage

1. Open `.env` and then add your `PRIVATE_KEY` and `RINKEBY_URL`
2. Deploy contract (fuji or rinkeby)

```
yarn deploy:fuji
yarn deploy:rinkeby
```

3. Open `config.js` file and update `simpleFlash` (Deployed address)
4. Run SimpleFlashLoan

```
yarn fl:fuji
yarn fl:rinkeby
```

Done 👻

---

Getting Started - [Developer v3 Docs](https://docs.aave.com/developers/getting-started/readme)

Block Explorer

- [Snowtrace Fuji](https://testnet.snowtrace.io/)
- [Etherscan Rinkeby](https://rinkeby.etherscan.io/)

## References

Hackmoney - Aave
- [Youtube - Aave Developers Guide to the Aave Protocol](https://github.com/defispartan/hackmoney-demo)
- [Source Code](https://github.com/defispartan/hackmoney-demo)

Aave v3 Smart Contract

- [@aave/core-v3](https://github.com/aave/aave-v3-core)
- [@aave/periphery-v3](https://github.com/aave/aave-v3-periphery)
- [@aave/interface](https://github.com/aave/interface)

Aaave Helpers
- [aave-utilities](https://github.com/aave/aave-utilities)
  - contract-helpers
  - math-utils
- [aave subgraph](https://github.com/aave/protocol-subgraphs)

Aave Addresses
- [V3 Testnet addresses](https://docs.aave.com/developers/deployed-contracts/v3-testnet-addresses)

Open Zeppeline Contarct

```
yarn add @openzeppelin/contracts
```
