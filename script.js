let numericCharacters = [ "0","1","2","3","4","5","6","7","8","9"];
let upperCasedCharacters = [ "A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
let lowerCasedCharacters = [ "a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
let specialCharacters = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "~", "{", "}", "[", "]", "_", "-", "<", ">", "?", "/", "."];

function getPasswordOptions () {
  let length = parseInt (
    prompt("Number of characters?")
  )
};

if (isNaN(length) = true) {
  alert("Password length must be a number");
  return;
}


if (length < 8) {
  alert("Must be longer than 8 characters");
  return;
}


if (length > 128) {
  alert ("Must be shorter than 129 characters");
  return;
}

let containsNumericCharacters = confirm (
  "OK to confirm contains numeric characters"
)
let containsUpperCasedCharacters = confirm (
  "OK to confirm contains upper cased characters"
)
let containsLowerCasedCharacters = confirm (
  "OK to confirm contains lower cased characters"
)
let containsSpecialCharacters = confirm (
  "OK to confirm contains special characters"
)

if (
  containsLowerCasedCharacters === false &&
  containsUpperCasedCharacters === false &&
  containsNumericCharacters === false &&
  containsSpecialCharacters === false
) {
  alert("Must have at least one character type");
  return;
}


// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
