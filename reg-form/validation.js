function ValidateEmail(mail) 
{
 if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(myForm.emailAddr.value))
  {
    return true;
  }
    return false;
} 


function formValidate(){
  console.log("1");

  
  if($("#selectname").value=="" && $("#email").value=="" && $("#mobno").value=="" &&
  $("#address").value=="" && $("#zip").value=="" && $("#yop12").value=="" && $("#board12").value==""
  && $("#percentage12").value==""){
    console.log("error");
    $(".helper-text").html("Error");
  }
}


$(document).ready(function(){
  $("#selectname").focusout(function(){
    var a=$(this).val();
    if(a==""){
      $(".helper-text").eq(0).html("<p>*Enter the name Correctly</p>");
    }else{
      $(".helper-text").eq(0).html("");
    }
  });
  $("#email").focusout(function(){
    var a=$(this).val();
    if(a==""){
      $(".helper-text").eq(1).html("<p>*Enter the email Correctly</p>");
    }
    else if (!ValidateEmail(a)){
      $(".helper-text").eq(1).html("<p>*Enter the email Correctly</p>");
    }
    else{
      
      $(".helper-text").eq(1).html("");
    }
  });
  $("#mobno").focusout(function(){
    
    var a=$(this).val();
    var phoneno = /^\d{10}$/;
    if( !a.match(phoneno)){
      $(".helper-text").eq(2).html("<p>*Enter the number Correctly</p>");
    }else{
      $(".helper-text").eq(2).html("");
    }
  });
  $("#dob").focusout(function(){
    var a=$(this).val();
    if(a==""){
      $(".helper-text").eq(3).html("<p>*Enter the dob Correctly</p>");
    }else{
      $(".helper-text").eq(3).html("");
    }
  });
  $("#address").focusout(function(){
    var a=$(this).val();
    if(a==""){
      $(".helper-text").eq(4).html("<p>*Enter the address Correctly</p>");
    }else{
      $(".helper-text").eq(4).html("");
    }
  });
  $("#country").focusout(function(){
    var a=$(this).val();
    if(a==""){
      $(".helper-text").eq(5).html("<p>*Enter the address Correctly</p>");
    }else{
      $(".helper-text").eq(5).html("");
    }
  });
  $("#zip").focusout(function(){
    var a=$(this).val();
    var zip = /^\d{6}$/;
    if( !a.match(zip)){
      $(".helper-text").eq(8).html("<p>*Enter the zip Correctly</p>");
    }else{
      $(".helper-text").eq(8).html("");
    }
  });
  $("#board12").focusout(function(){
    var a=$(this).val();
    if(a==""){
      $(".helper-text").eq(9).html("<p>*Enter the name of board.</p>");
    }else{
      $(".helper-text").eq(9).html("");
    }
  });
  $("#percentage12").focusout(function(){
    var a=$(this).val();
    if(a==""){
      $(".helper-text").eq(10).html("<p>*Enter the percentage correctly.</p>");
    }else{
      $(".helper-text").eq(10).html("");
    }
  });
  $("#yop12").focusout(function(){
    var a=$(this).val();
    if(a==""){
      $(".helper-text").eq(11).html("<p>*Enter the year correctly.</p>");
    }else{
      $(".helper-text").eq(11).html("");
    }
  });

  
});

