var savedAddress = "";
var savedBalances = 0;

setInterval(function(){
var contractAddress = '0xd6F47022d4A19c5F7FD411804Ea46E627B90100F';
var abi = [{"constant":false,"inputs":[],"name":"checkGoalReached","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"withdrawalOwner","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"transferableToken","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"deadline","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"fundingEth","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"fundingEthReached","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"currentSwapRate","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"fundersProperty","outputs":[{"name":"paymentEther","type":"uint256"},{"name":"reservedToken","type":"uint256"},{"name":"withdrawed","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"soldToken","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"isOpened","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"tokenReward","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"startTime","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"TokenPerEther","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"price","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getNow","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getEth","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"withdrawal","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getRemainingTimeEthToken","outputs":[{"name":"min","type":"uint256"},{"name":"shortage","type":"uint256"},{"name":"remainToken","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_new","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getSoldToken","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[{"name":"_addressOfTokenUsedAsReward","type":"address"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":false,"name":"fundingEth","type":"uint256"},{"indexed":false,"name":"deadline","type":"uint256"},{"indexed":false,"name":"transferableToken","type":"uint256"},{"indexed":false,"name":"beneficiary","type":"address"}],"name":"CrowdsaleStart","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"backer","type":"address"},{"indexed":false,"name":"amount","type":"uint256"},{"indexed":false,"name":"token","type":"uint256"}],"name":"ReservedToken","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"beneficiary","type":"address"},{"indexed":false,"name":"fundingEth","type":"uint256"},{"indexed":false,"name":"amountRaised","type":"uint256"},{"indexed":false,"name":"reached","type":"bool"},{"indexed":false,"name":"raisedToken","type":"uint256"}],"name":"CheckGoalReached","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"addr","type":"address"},{"indexed":false,"name":"amount","type":"uint256"},{"indexed":false,"name":"result","type":"bool"}],"name":"WithdrawalToken","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"addr","type":"address"},{"indexed":false,"name":"amount","type":"uint256"},{"indexed":false,"name":"result","type":"bool"}],"name":"WithdrawalEther","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"oldaddr","type":"address"},{"indexed":false,"name":"newaddr","type":"address"}],"name":"TransferOwnership","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"burnAddress","type":"address"},{"indexed":false,"name":"amountOfTokens","type":"uint256"}],"name":"TokenBurned","type":"event"}];
var declaration;
var startingBlock;
var explorer = "https://etherscan.io";


  if(typeof web3 !== 'undefined'){
    window.web3 = new Web3(web3.currentProvider);

    declaration = web3.eth.contract(abi).at(contractAddress);

    startApp();


  }


}, 1000);

function startApp(){

  web3.eth.getCoinbase(function(e, address){
    web3.eth.getBalance(address, function(e, balance){

      document.getElementById("accountAddr").innerHTML = address;
      document.getElementById("accountBal").innerHTML = Number(web3.fromWei(Number(balance), 'ether')).toFixed(2)+" ETH";

      savedAddress = address;
      savedBalances = balance;

    });

  });

}
