pragma solidity ^0.4.4;

contract FirstSolidityContract {
  string message = 'First message deployed!';

  function FirstSolidityContract() {
    // constructor
  }

  function GetMessage() returns (string) {
    return message;
  }
}
