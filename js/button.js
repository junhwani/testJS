var modal = document.getElementById('myModal');
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName('close')[0];
var btn_send = document.getElementById('sendBtn');

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
