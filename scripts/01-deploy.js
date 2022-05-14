const config = require('../config')

const main = async () => {
  const { network } = hre.hardhatArguments

  const faucetAddress = config[network]?.aaveFaucets
  const poolAddress = config[network]?.poolProvider

  const Contract = await hre.ethers.getContractFactory('SimpleFlashLoanV3')
  const contract = await Contract.deploy(poolAddress, faucetAddress)
  contract.deployed()

  console.log(`SimpleFlashLoanV3 deployed to : ${contract.address}`)
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
