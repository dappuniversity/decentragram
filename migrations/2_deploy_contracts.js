const Decentragram = artifacts.require("Decentragram");

module.exports = function(deployer) {
  // This file moves smart contracts from our computer to a blockchain.
  // It compiles them and turns them into machine readable code
  deployer.deploy(Decentragram)
};
