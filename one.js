
//your sol file
var str = "MyAdvancedToken"


console.log('Setting up ...');

const fs = require('fs');
const solc = require('solc');
const Web3 = require('web3');
const web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:5000"));

console.log('Reading Contract...');
const input = fs.readFileSync(str+'.sol');

console.log('Compiling Contract...');
const output = solc.compile(input.toString(),1);
const bytecode = output.contracts[':'+str].bytecode;
const abi = output.contracts[':'+str].interface;

//Contract Object

var helloWorldContract = web3.okc.contract(JSON.parse(abi));

var account = web3.okc.accounts[0];

console.log("Deploying the contract");

console.log("unlock the account");
const helloWorldContractInstance = helloWorldContract.new({
    data: '0x' + bytecode,
    from: account,
    gas: 1000000
}, (err, res) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log(res.transactionHash);

    // If we have an address property, the contract was deployed
    if (res.address) {
        console.log('Contract address: ' + res.address);
    }
});;


fs.writeFile("./"+str+".JSON", abi, function(err) {
	if(err) {
	     return console.log(err);
	}
	console.log("ABI Saved");
});
