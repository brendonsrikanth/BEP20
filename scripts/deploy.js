async function main() {
  const XYZTOKEN = await ethers.getContractFactory("XYZTOKEN");
  const xyzToken = await XYZTOKEN.deploy();
  console.log("XYZTOKEN deployed to:", xyzToken.address);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
