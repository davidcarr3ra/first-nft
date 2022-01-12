async function main() {
   // Grab the contract factory 
   const FirstNFT = await ethers.getContractFactory("firstNFT");

   // Start deployment, returning a promise that resolves to a contract object
   const firstNFT = await FirstNFT.deploy(); // Instance of the contract 
   console.log("Contract deployed to address:", firstNFT.address);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
