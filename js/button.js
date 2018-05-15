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


$(document).ready(function(){
  $.ajax({
       crossOrigin: true,
       url: 'https://127.0.0.1:8545',
       type: 'POST',
       dataType: 'json',
       data: JSON.stringify({
           jsonrpc: "2.0",
           method: "eth_accounts",
           params: [],
           id: 1
       }),
       success: function(data) {
           console.log("hello");
       },
       error: function(err,status,thrown){
         alert("error");
       },
       complete: function(xhr, status){
         alert("Complete" + status);
         data = $.parseJSON(xhr, responseText);
         alert(data);
       }
   });
});



btn_json.onclick = function(){
  var web3;

        if (typeof web3 !== 'undefined') {
            web3 = new Web3(web3.currentProvider);
        } else {
            web3 = new Web3(new Web3.providers.HttpProvider("http://127.0.0.1:8545"));
        }
        if(!web3.isConnected()) {
            console.log('not-connected');
        } else {
           console.log('connected');
        }

}
