// Captcha

var code = "";
var str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$";
var btnvalue;
var getCode = "";

function generateCode() {
  for (let i = 1; i <= 8; i++) {
    var char = Math.random() * str.length;
    code += str.charAt(char);
  }

  return code;
}

document.getElementById("codes").innerHTML = generateCode();

// Form Validation

function checkFirstName(value) {
  if (value.trim() == "") {
    var tag = document.createElement("p");
    var text = document.createTextNode("Please enter your first name");
    tag.appendChild(text);
    var element = document.getElementById("errorname");
    element.appendChild(tag);
  }
}

function checkLastName(value) {
  if (value.trim() == "") {
    var tag = document.createElement("p");
    var text = document.createTextNode("Please enter your last name");
    tag.appendChild(text);
    var element = document.getElementById("errorname");
    element.appendChild(tag);
  }
}

function checkStreet(value) {
  if (value.trim() == "") {
    document.getElementById("errorname").innerHTML = "Please enter your street";
  }
}

function checkCity(value) {
  if (value.trim() == "") {
    document.getElementById("errorname").innerHTML = "Please enter your city";
  }
}

function checkState(value) {
  if (value.trim() == "") {
    document.getElementById("errorname").innerHTML = "Please enter your state";
  }
}

function checkCountry(value) {
  if (value.trim() == "") {
    document.getElementById("errorname").innerHTML =
      "Please enter your country";
  }
}

function checkZip(value) {
  if (value.trim() == "" && value.length != 5) {
    document.getElementById("errorname").innerHTML =
      "Please enter a valid zip code";
  }
}

function checkPhone(value) {
  if (value.trim() == "" && value.length != 10) {
    document.getElementById("errorname").innerHTML =
      "Please enter a valid phone number";
  }
}

function checkEmail(value) {
  if (value.trim() == "") {
    document.getElementById("errorname").innerHTML = "Please enter your email";
  }
}

function checkRandomCode(value) {
  var charset1 = value.trim();
  var charset2 = code.trim();

  if (charset1 != charset2) {
    document.getElementById("errorname").innerHTML =
      "Please enter correct code as seen";
  }
  if (value.trim() == "") {
    document.getElementById("errorname").innerHTML =
      "Please enter code as seen";
  }
}
