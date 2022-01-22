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


function generatePassword() {
  var length = prompt("Please enter your desired password length", "8-128 characters");
  var useUpper = confirm("Would you like to include upper case letters?");
  var useLower = confirm("Would you like to include lower case letters?");
  var useNumbers = confirm("Would you like to include numbers");
  var useSpecial = confirm("Would you like to use special characters");
  var letterSetLower = "abcdefghijklmnopqrstuvwxyz";
  var letterSetUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numberSet = "0123456789";
  var specialSet = "~!@#$%^&*";
  var allLetter = letterSetLower.concat(letterSetUpper);
  var allChar = allLetter.concat(numberSet, specialSet);
  var noSpecial = allLetter.concat(numberSet);
  var noNumber = allLetter.concat(specialSet);
  var noUpper = letterSetLower.concat(numberSet, specialSet);
  var noLower = letterSetUpper.concat(numberSet, specialSet);
  var password = "";

if (useUpper === true && useLower === true && useNumbers === true && useSpecial === true) {
  for (var i = 0, n =allChar.length; i < length; i++) {
    password += allChar.charAt(Math.random() * n);
}

    return password;
} else if (useUpper === false && useLower === true && useNumbers === true && useSpecial === true) {
  for (var i = 0, n =noUpper.length; i < length; i++) {
    password += noUpper.charAt(Math.random() * n);
}

  return password;
} else if (useUpper === true && useLower === false && useNumbers === true && useSpecial === true) {
  for (var i = 0, n =noLower.length; i < length; i++) {
    password += noLower.charAt(Math.random() * n);
}

  return password;
}








}

  // if(){

  // }

//     for (var i = 0, n = letterSet.length; i < length; i++) {
//     password += letterSet.charAt(Math.random() * n);
 
//    }
//    console.log(password)

//    return password;