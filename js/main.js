var savedAddress = "";
var savedBalances = 0;

setInterval(function(){
var contractAddress = '0xdc7c743110Ec689d82f050302319AE27aF84f8fa';
var abi = [{"anonymous":false,"inputs":[{"indexed":true,"name":"sender","type":"address"},{"indexed":false,"name":"comment","type":"string"},{"indexed":false,"name":"timestamp","type":"uint256"},{"indexed":false,"name":"count","type":"uint256"}],"name":"Commented","type":"event"},{"constant":false,"inputs":[{"name":"comment","type":"string"}],"name":"makeComment","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"blockByCounter","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"content","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"numComments","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"}];
var declaration;
var startingBlock;
var explorer = "https://etherscan.io";


  if(typeof web3 !== 'undefined'){
    window.web3 = new Web3(web3.currentProvider);

    declaration = web3.eth.contract(abi).at(contractAddress);

    web3.eth.getCoinbase(function(e, address){
      web3.eth.getBalance(address, function(e, balance){

        document.getElementById("accountAddr").innerHTML = address;
        document.getElementById("accountBal").innerHTML = Number(web3.fromWei(Number(balance), 'ether')).toFixed(2)+" ETH";

        savedAddress = address;
        savedBalances = balance;

      });

    });
  }


}, 1000);

function startApp(){



}
