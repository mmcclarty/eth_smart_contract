var Migrations = artifacts.require("./Migrations.sol");
var FirstSolidityContract = artifacts.require('./FirstSolidityContract.sol');

module.exports = function(deployer) {
  deployer.deploy(Migrations);
  deployer.deploy(FirstSolidityContract);
};
