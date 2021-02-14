var xmlhttp = new XMLHttpRequest();
var url = "https://api.github.com/users";

xmlhttp.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    var myArr = JSON.parse(this.responseText);
    myFunction(myArr);
  }
};
xmlhttp.open("GET", url, true);
xmlhttp.send();
var ulist = [];
function myFunction(arr) {
  var i;
  for (i = 0; i < arr.length; i++) {
    ulist[i] = arr[i].login;
  }
}

function func() {
  console.log("func");
  var ul = document.getElementById("myUL");
  ul.innerHTML = "";
}

// function searchUser() {
//   console.log(ulist);

//   var input, filter, li, ul, i, txtValue;
//   input = document.getElementById("selectname");
//   // console.log(input.value + " = val" + (input.value === null) + (input.value === ""));
//   ul = document.getElementById("myUL");
//   ul.innerHTML = "";
//   filter = input.value.toUpperCase();

//   for (i = 0; i < ulist.length; i++) {
//     txtValue = ulist[i];
//     if (txtValue.toUpperCase().indexOf(filter) > -1) {
//       var li = document.createElement("li");
//       li.appendChild(document.createTextNode(ulist[i]));
//       li.setAttribute('id',ulist[i]);
//       li.addEventListener("click", function() {
//         console.log(ulist[i]);
//         document.getElementById("selectname").style.display=ulist[i];

//       });

//       ul.appendChild(li);
//     }
//     //  else {
//     // //   // var li = document.getElementById(ulist[i]);
//     // //   // console.log(li);
//     // //   // ul.removeChild(li);
//     // //   // document.getElementById(ulist[i]).innerHTML = "";
//     //  }
//   }
//   if (input.value === ""){
//     console.log("yo");
//     func();

//   }
// }
var tok;
locfunc();

function locfunc() {
  var xmlhttp = new XMLHttpRequest();
  var url = "https://www.universal-tutorial.com/api/getaccesstoken";

  xmlhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      var myArr = JSON.parse(this.responseText);
      console.log(myArr);
      tok = myArr.auth_token;
      changeFunc(0, "country");

      console.log(tok);
    }
  };
  xmlhttp.open("GET", url, true);

  xmlhttp.setRequestHeader(
    "api-token",
    "uILUP-BR9kPhMpoOfE-JVeSDBX7qcR7ly51oeDotYI9hrrsd3rvJKCCuH2iox2Ee8pQ"
  );

  xmlhttp.setRequestHeader("Accept", "application/json");

  xmlhttp.setRequestHeader("user-email", "rishabhprashr@gmail.com");
  xmlhttp.send();
}

// function selectli(l){
//   console.log("onclick");
//   var input = document.getElementById("selectname");
//   input.style.display=l;
//   document.getElementById("selectname").value = l;
// }

function changeFunc($i, $p) {
  // console.log($p);
  var req = new XMLHttpRequest();
  if ($p === "country") {
    var url = "https://www.universal-tutorial.com/api/countries/";
  } else if ($p === "state") {
    var url =
      "https://www.universal-tutorial.com/api/" + $p + "s" + "/" + $i + "/";
  } else {
    var url = "https://www.universal-tutorial.com/api/" + $p + "/" + $i + "/";
  }

  req.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      var myArr = JSON.parse(this.responseText);
      myFunction1(myArr);
    }
  };
  req.open("GET", url, true);
  let temp = "Bearer " + tok;
  console.log(tok);
  if (tok != undefined) {
    req.setRequestHeader("Authorization", temp);
  }

  req.setRequestHeader("Accept", "application/json");
  req.send();

  function myFunction1(arr) {
    var i;
    for (i = 0; i < arr.length; i++) {
      // console.log(arr[i]);
      var select = document.getElementById($p);
      var option = document.createElement("option");
      temp = $p + "_name";
      // console.log("print"+temp);
      option.text = arr[i][temp];
      // console.log(arr[i]);
      option.value = arr[i][temp];
      select.add(option);
    }
  }
}

function autocomplete(inp, arr) {
  var currentFocus;
  inp.addEventListener("input", function (e) {
    var a,
      b,
      i,
      val = this.value;
    closeAllLists();
    if (!val) {
      return false;
    }
    currentFocus = -1;
    a = document.createElement("DIV");
    a.setAttribute("id", this.id + "autocomplete-list");
    a.setAttribute("class", "autocomplete-items");
    this.parentNode.appendChild(a);
    for (i = 0; i < arr.length; i++) {
      if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
        b = document.createElement("DIV");

        b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
        b.innerHTML += arr[i].substr(val.length);

        b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";

        b.addEventListener("click", function (e) {
          inp.value = this.getElementsByTagName("input")[0].value;

          closeAllLists();
        });
        a.appendChild(b);
      }
    }
  });
  /*execute a function presses a key on the keyboard:*/
  inp.addEventListener("keydown", function (e) {
    var x = document.getElementById(this.id + "autocomplete-list");
    if (x) x = x.getElementsByTagName("div");
    if (e.keyCode == 40) {
      /*If the arrow DOWN key is pressed,
        increase the currentFocus variable:*/
      currentFocus++;
      /*and and make the current item more visible:*/
      addActive(x);
    } else if (e.keyCode == 38) {
      //up
      /*If the arrow UP key is pressed,
        decrease the currentFocus variable:*/
      currentFocus--;
      /*and and make the current item more visible:*/
      addActive(x);
    } else if (e.keyCode == 13) {
      /*If the ENTER key is pressed, prevent the form from being submitted,*/
      e.preventDefault();
      if (currentFocus > -1) {
        /*and simulate a click on the "active" item:*/
        if (x) x[currentFocus].click();
      }
    }
  });
  function addActive(x) {
    /*a function to classify an item as "active":*/
    if (!x) return false;
    /*start by removing the "active" class on all items:*/
    removeActive(x);
    if (currentFocus >= x.length) currentFocus = 0;
    if (currentFocus < 0) currentFocus = x.length - 1;
    /*add class "autocomplete-active":*/
    x[currentFocus].classList.add("autocomplete-active");
  }
  function removeActive(x) {
    /*a function to remove the "active" class from all autocomplete items:*/
    for (var i = 0; i < x.length; i++) {
      x[i].classList.remove("autocomplete-active");
    }
  }
  function closeAllLists(elmnt) {
    /*close all autocomplete lists in the document,
    except the one passed as an argument:*/
    var x = document.getElementsByClassName("autocomplete-items");
    for (var i = 0; i < x.length; i++) {
      if (elmnt != x[i] && elmnt != inp) {
        x[i].parentNode.removeChild(x[i]);
      }
    }
  }
  /*execute a function when someone clicks in the document:*/
  document.addEventListener("click", function (e) {
    closeAllLists(e.target);
  });
}
autocomplete(document.getElementById("selectname"), ulist);


