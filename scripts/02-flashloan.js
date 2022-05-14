const addresses = require('../addresses')

const ABI = require('../artifacts/contracts/SimpleFlashLoanV3.sol/SimpleFlashLoanV3.json')

const main = async () => {
  const { network } = hre.hardhatArguments

  const deployedAddress = addresses[network]?.simpleFlash
  const contract = await hre.ethers.getContractAt(ABI.abi, deployedAddress)

  // 10,000 USDC
  const usdc = addresses[network]?.tokens.usdc
  const amount = hre.ethers.utils.parseUnits('10000', usdc.decimals)

  const tx = await contract.executeFlashLoan(usdc.address, amount)
  await tx.wait(1)

  console.log(`Tx : ${tx.hash}`)
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
