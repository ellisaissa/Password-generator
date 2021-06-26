let Numbers = ['1','2','3','4','5','6','7','8','9','0'];
let upperCaseLetters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
let lowerCaseLetters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
let specialCharacters = ['!', '@', '#', '$', '%', '~', '=', '+', '?', '/', ':', ',', '{', '}', '[', ']'];

function getPasswords () {
  let length = parseInt(
    prompt ("How many characters?")
  );


  if (isNaN(length) === true) {
    alert('Length of password must be a number');
  }

  if (length < 8) {
    alert('Password must be more than 8 characters');
  }

  if (length > 128) {
    alert ("Password must be less that 129 characters");
  }

  let hasNumbers = confirm (
    "Click ok to include numbers"
  );

  let hasupperCaseLetters = confirm(
    "Click ok to confirm upper case letters"
  );

  let haslowerCaseLetters = confirm (
    "Click on to confirm lower case letters"
  ); 

  let hasspecialCharacters = confirm (
    "Click ok to confirm special characters"
  );

  if (
  hasNumbers === false&&
  haslowerCaseLetters === false &&
  hasupperCaseLetters === false &&
  hasspecialCharacters === false
  ) {
    alert ("Select at least one character type")
  }
  var passwordOptions = {
    length: length,
    hasspecialCharacters: hasspecialCharacters,
    hasNumbers: hasNumbers,
    haslowerCaseLetters: haslowerCaseLetters,
    hasupperCaseLetters: hasupperCaseLetters
  };

  return passwordOptions;
}

function getRandom(arr) {
  let randIndex = Math.floor(Math.random() * arr.length);
  let randElement = arr[randIndex];
  return randElement;
}
 
function generatePassword() {
  let options = getPasswords();
  let result = [];
  let possibleCharacters = [];
  let approvedCharacters = [];
  if (options.hasupperCaseLetters) {
    possibleCharacters = possibleCharacters.concat(upperCaseLetters);
    approvedCharacters.push(getRandom(upperCaseLetters));
  }
  if (options.hasNumbers) {
    possibleCharacters = possibleCharacters.concat(Numbers);
    approvedCharacters.push(getRandom(Numbers));
  }
  if (options.haslowerCaseLetters) {
    possibleCharacters = possibleCharacters.concat(lowerCaseLetters);
    approvedCharacters.push(getRandom(lowerCaseLetters));
  }
  if (options.hasspecialCharacters) {
    possibleCharacters = possibleCharacters.concat(specialCharacters);
    approvedCharacters.push(getRandom(specialCharacters));
  }



  for (var i = 0; i < options.length; i++) {
  let resultCharacters = getRandom(possibleCharacters);
  result.push(resultCharacters);
}

  for (var i = 0; i < approvedCharacters.length; i++) {
  result[i] = approvedCharacters[i];
  return result.join("");
}
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
