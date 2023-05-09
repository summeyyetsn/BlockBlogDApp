const hre = require("hardhat");
const fs = require('fs')

async function main(){
    const BlockBlog = await hre.ethers.getContractFactory("BlockBlog");
    const blockblog = await BlockBlog.deploy();
    await blockblog.deployed();
    console.log("BlockBlog contract deployed to: ", blockblog.address);

    let config = `module.exports ={
        blockblogaddress : "${blockblog.address}"
    }
    `
    let data = JSON.stringify(config)
    fs.writeFileSync('config.js', JSON.parse(data))
}

main()
    .then(() => process.exit(0))
    .catch((error)=>{
        console.error(error);
        process.exit(1);
    });