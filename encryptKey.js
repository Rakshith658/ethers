const ethers = require("ethers");
const fs = require("fs");
require("dotenv").config();

const main = async () => {
  const wallet = new ethers.Wallet(process.env.WALLLET_ID);
  console.log(process.env.PRAVATE_KEY_PASSWORD);
  const encryptKey = await wallet.encrypt(
    process.env.WALLLET_ID,
    process.env.PRAVATE_KEY_PASSWORD
  );
  console.log(encryptKey);
  fs.writeFileSync("./.encryptKey.json", encryptKey);
};

main()
  .then(() => process.exit(0))
  .catch((e) => console.log(e));
