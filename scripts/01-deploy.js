const addresses = require('../addresses')

const main = async () => {
  const { network } = hre.hardhatArguments

  const faucetAddress = addresses[network]?.aaveFaucets
  const poolAddress = addresses[network]?.poolProvider

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
