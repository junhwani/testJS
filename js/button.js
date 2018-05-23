var modal = document.getElementById('myModal');
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName('close')[0];
var btn_send = document.getElementById('sendBtn');
var btn_create = document.getElementById('createBtn');
var btn_json = document.getElementById('jsonBtn');
var span1 = document.getElementById('body');
var span2 = document.getElementById('status');

btn.onclick = function(){
  modal.style.display = "block";
}

span.onclick = function(){
  modal.style.display = "none";
}

window.onclick = function(event){
  if(event.target == modal){
    modal.style.display = "none";
  }
}

btn_send.onclick = function(){
  var base;
  var address = document.getElementById('receive_address').value;
  var eth = document.getElementById('ethAmount').value;

  web3.eth.getCoinbase(function(e,r){
    base = r;
  });

  web3.eth.sendTransaction({
    from: base,
    to: address,
    value: eth*10000000000000000
  }, function(e, r){
    alert(r);
  });
}

btn_create.onclick = function(){
  web3.eth.accounts.create();
}


btn_json.onclick = function(){

  var abi = [{"constant":false,"inputs":[],"name":"checkGoalReached","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"withdrawalOwner","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"transferableToken","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"deadline","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"fundingEth","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"fundingEthReached","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"currentSwapRate","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"fundersProperty","outputs":[{"name":"paymentEther","type":"uint256"},{"name":"reservedToken","type":"uint256"},{"name":"withdrawed","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"soldToken","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"isOpened","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"tokenReward","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"startTime","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"TokenPerEther","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"price","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getNow","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getEth","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"withdrawal","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getRemainingTimeEthToken","outputs":[{"name":"min","type":"uint256"},{"name":"shortage","type":"uint256"},{"name":"remainToken","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_new","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getSoldToken","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[{"name":"_addressOfTokenUsedAsReward","type":"address"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":false,"name":"fundingEth","type":"uint256"},{"indexed":false,"name":"deadline","type":"uint256"},{"indexed":false,"name":"transferableToken","type":"uint256"},{"indexed":false,"name":"beneficiary","type":"address"}],"name":"CrowdsaleStart","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"backer","type":"address"},{"indexed":false,"name":"amount","type":"uint256"},{"indexed":false,"name":"token","type":"uint256"}],"name":"ReservedToken","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"beneficiary","type":"address"},{"indexed":false,"name":"fundingEth","type":"uint256"},{"indexed":false,"name":"amountRaised","type":"uint256"},{"indexed":false,"name":"reached","type":"bool"},{"indexed":false,"name":"raisedToken","type":"uint256"}],"name":"CheckGoalReached","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"addr","type":"address"},{"indexed":false,"name":"amount","type":"uint256"},{"indexed":false,"name":"result","type":"bool"}],"name":"WithdrawalToken","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"addr","type":"address"},{"indexed":false,"name":"amount","type":"uint256"},{"indexed":false,"name":"result","type":"bool"}],"name":"WithdrawalEther","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"oldaddr","type":"address"},{"indexed":false,"name":"newaddr","type":"address"}],"name":"TransferOwnership","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"burnAddress","type":"address"},{"indexed":false,"name":"amountOfTokens","type":"uint256"}],"name":"TokenBurned","type":"event"}];
  var contract = '0xd6F47022d4A19c5F7FD411804Ea46E627B90100F';.

  if(typeof web3 !== 'undefined'){
    window.web3 = new Web3(web3.currentProvider);

    var cont = web3.eth.contract(abi).at(contract);

    console.log(cont.call().getNumber());
  }

}
