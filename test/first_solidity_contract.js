var FirstSolidityContract = artifacts.require('./FirstSolidityContract.sol');

contract('FirstSolidityContract', function(accounts) {
  it("should return a correct string", function(done) {
    var first_solidity_contract = FirstSolidityContract.deployed();

    first_solidity_contract.then(function(contract){
      return contract.GetMessage.call(); // **IMPORtANT
    }).then(function(result){
  
      assert.isTrue(result === 'First message deployed!');
      done();
    })
  });
});
