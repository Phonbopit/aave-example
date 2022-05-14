const main = async () => {
  const Contract = await hre.ethers.getContractFactory('SimpleFlashLoanV3')
  const contract = await Contract.deploy('Hello, Hardhat!')
  contract.deployed()

  console.log(`SimpleFlashLoanV3 deployed to : ${contract.address}`)
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
