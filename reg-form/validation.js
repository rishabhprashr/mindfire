document.getElementById("selectname").addEventListener("keyup", check);


function check($p) {
  var val = document.getElementById($p).value;
  if(!val || !val.length || val=="email") {
    return;
  }
  // var regex=/[@.:;]/gi;
  // if(regex.test(val) && (val.length!=0 || val!="")){
  //   document.getElementById($p).classList.remove("invalid");
  //   document.getElementById($p).classList.add("valid");

  // }else{
  //   document.getElementById($p).classList.remove("valid");
  //   document.getElementById($p).classList.add("invalid");

  // }
  
  
  if(val.length==0 || val=="" ) {
    document.getElementById($p).classList.remove("valid");
    document.getElementById($p).classList.add("invalid");
  } else {
    document.getElementById($p).classList.remove("invalid");
    document.getElementById($p).classList.add("valid");
  }
  
}

$(document).ready(function() {
  $('input').characterCounter();
});

const email = document.getElementById("email");

email.addEventListener("input", function (event) {
  if (email.validity.typeMismatch) {
    email.setCustomValidity("I am expecting an e-mail address!");
  } else {
    email.setCustomValidity("");
  }
});