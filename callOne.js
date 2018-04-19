//your sol file
var str = "MyAdvancedToken"


const solc = require ('solc');
const Web3 = require ('web3');
const fs = require ('fs');
console.log('Reading abi');

const contractABI = fs.readFileSync("./"+str+".JSON");
console.log('Connecting');
const web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:5000"));

console.log('Creating contract instance');
const customContract = web3.okc.contract(JSON.parse(contractABI));

//此处0xe5790699fbe69c8cce29ca8a01ff7bf6b9fb8ce3 为部署合约的输出Contract address
var customContractInstance = customContract.at("0xe5790699fbe69c8cce29ca8a01ff7bf6b9fb8ce3");  


//****************function call***************************
console.log ('calling the contract locally');
console.log(customContractInstance.sayHi.call());
//********************************************************

