var modal = document.getElementById('myModal');
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName('close')[0];
var btn_send = document.getElementById('sendBtn');
var btn_create = document.getElementById('createBtn');
var btn_json = document.getElementById('jsonBtn');

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


  if(typeof web3 !== 'undefined'){
    window.web3 = new Web3(web3.currentProvider);

    var data = {
      "jsonrpc":"2.0",
      "method":"web3.clientversion",
      "params":[],
      "id":67
    };
    var version = JSON.parse(data);

    alert("hello");
  }
}
