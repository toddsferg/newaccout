var database = {
  "userName" : "Todd",
  "passWord" : "b"
  }

function myFunction() {
  var y = document.getElementById("myName").value;
  var x = document.getElementById("myPsw").value;

  if(y === database.userName && x === database.passWord){
    document.getElementById("welcomeUser").innerHTML = "Welcome " + y;
    displayMain();
    firstQuestion(y);
  } else {document.getElementById("welcomeUser").innerHTML = "try again"};
};

function displayMain(){
  var mainAdd = document.querySelector(".main");
  mainAdd.setAttribute("id", "main");
}

function firstQuestion(name){
  var firstQ = document.getElementById("first");
  firstQ.innerHTML = name + ", please insert your address br/ Now put in your address";
}

  // var z = document.getElementById("addressButton");



function databasePush(add){
  var addressInput = document.getElementById("address").value;
  database.address = add;
  console.log(addressInput);
  console.log(database);
}

// z.onclick = databasePush();
