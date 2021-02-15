document.getElementById("selectname").addEventListener("keyup", check);


function check($p) {
  var val = document.getElementById($p).value;
  if(!val || !val.length) {
    return;
  }
  
  
  if(val.length==0 || val=="") {
    document.getElementById($p).classList.remove("valid");
    document.getElementById($p).classList.add("invalid");
  } else {
    document.getElementById($p).classList.remove("invalid");
    document.getElementById($p).classList.add("valid");
  }
  
}