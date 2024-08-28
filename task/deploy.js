const { task } = require("hardhat/config");

require("dotenv").config();

task("deploy:AMBBridgeHelper")
  .addParam("homeAMB")
  .setAction(async (_taskArgs, hre) => {
    const [owner] = await hre.ethers.getSigners();
    let AMBBridgeHelperFactory = await hre.ethers.getContractFactory(
      "AMBBridgeHelper"
    );

    let AMBBridgeHelper = await AMBBridgeHelperFactory.deploy([
      taskArguments.homeAMB,
    ]);

    console.log(`AMB Bridge Helper deployed to ${AMBBridgeHelper.address}`);

    await hre.run("verify:verify", {
      address: AMBBridgeHelper.address,
      constructorArguments: [taskArguments.homeAMB],
    });
  });

task("deploy:xDAIBridgeHelper")
  .addParam("homexDAIBridge")
  .addParam("foreignxDAIBridge")
  .setAction(async (_taskArgs, hre) => {
    const [owner] = await hre.ethers.getSigners();
    let xDAIBridgeHelperFactory = await hre.ethers.getContractFactory(
      "Erc20ToNativeBridgeHelper"
    );
    let xDAIBridgeHelper = await xDAIBridgeHelperFactory.deploy([
      taskArguments.homexDAIBridge,
      taskArguments.foreignxDAIBridge,
    ]);
    console.log(`xDAI Bridge Helper deployed to ${xDAIBridgeHelper.address}`);

    await hre.run("verify:verify", {
      address: xDAIBridgeHelper.address,
      constructorArguments: [
        taskArguments.homexDAIBridge,
        taskArguments.foreignxDAIBridge,
      ],
    });
  });
