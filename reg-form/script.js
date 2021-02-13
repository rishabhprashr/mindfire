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

function myFunction(arr) {
  var i;
  for (i = 0; i < arr.length; i++) {
    var select = document.getElementById("selectname");
    var option = document.createElement("option");
    option.text = arr[i].login;
    option.value = arr[i].login;
    select.add(option);
  }
}

var req = new XMLHttpRequest();
var url = "https://www.universal-tutorial.com/api/countries/";

req.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    var myArr = JSON.parse(this.responseText);
    myFunction1(myArr);
  }
};
req.open("GET", url, true);
req.setRequestHeader(
  "Authorization",
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InVzZXJfZW1haWwiOiJyaXNoYWJocHJhc2hyQGdtYWlsLmNvbSIsImFwaV90b2tlbiI6InVJTFVQLUJSOWtQaE1wb09mRS1KVmVTREJYN3FjUjdseTUxb2VEb3RZSTlocnJzZDNydkpLQ0N1SDJpb3gyRWU4cFEifSwiZXhwIjoxNjEzMjEzNTIzfQ.6iM-dxnzGnGuaFt5nsLJ1O4NR_O6OzzZK7fMXNFQ1AU"
);
req.setRequestHeader("Accept", "application/json");
req.send();

function myFunction1(arr) {
  var i;
  for (i = 0; i < arr.length; i++) {
    console.log(arr[i]);
    var select = document.getElementById("country");
    var option = document.createElement("option");
    option.text = arr[i].country_name;
    option.value = arr[i].country_name;
    select.add(option);
  }
}

function changeFunc($i) {
  var req = new XMLHttpRequest();
  var url = "https://www.universal-tutorial.com/api/countries/" + $i + "/";

  req.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      var myArr = JSON.parse(this.responseText);
      myFunction1(myArr);
    }
  };
  req.open("GET", url, true);
  req.setRequestHeader(
    "Authorization",
    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InVzZXJfZW1haWwiOiJyaXNoYWJocHJhc2hyQGdtYWlsLmNvbSIsImFwaV90b2tlbiI6InVJTFVQLUJSOWtQaE1wb09mRS1KVmVTREJYN3FjUjdseTUxb2VEb3RZSTlocnJzZDNydkpLQ0N1SDJpb3gyRWU4cFEifSwiZXhwIjoxNjEzMjEzNTIzfQ.6iM-dxnzGnGuaFt5nsLJ1O4NR_O6OzzZK7fMXNFQ1AU"
  );
  req.setRequestHeader("Accept", "application/json");
  req.send();

  function myFunction1(arr) {
    var i;
    for (i = 0; i < arr.length; i++) {
      console.log(arr[i]);
      var select = document.getElementById("state");
      var option = document.createElement("option");
      option.text = arr[i].country_name;
      option.value = arr[i].country_name;
      select.add(option);
    }
  }
}
