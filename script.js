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
if (length >= "8" && length <= "128") {


  // All True
if (useUpper === true && useLower === true && useNumbers === true && useSpecial === true) {
  for (var i = 0, n =allChar.length; i < length; i++) {
    password += allChar.charAt(Math.random() * n);
}

    return password;

  // No Upper Case, Rest True
} else if (useUpper === false && useLower === true && useNumbers === true && useSpecial === true) {
  for (var i = 0, n =noUpper.length; i < length; i++) {
    password += noUpper.charAt(Math.random() * n);
}

  return password;
  // No Lower Case, Rest True
} else if (useUpper === true && useLower === false && useNumbers === true && useSpecial === true) {
  for (var i = 0, n =noLower.length; i < length; i++) {
    password += noLower.charAt(Math.random() * n);
}

  return password;
  // No Numbers, Rest True
} else if (useUpper === true && useLower === true && useNumbers === false && useSpecial === true) {
  for (var i = 0, n =noNumber.length; i < length; i++) {
    password += noNumber.charAt(Math.random() * n);
}

  return password;
  // No Specials, Rest True
} else if (useUpper === true && useLower === true && useNumbers === true && useSpecial === false) {
  for (var i = 0, n =noSpecial.length; i < length; i++) {
    password += noSpecial.charAt(Math.random() * n);
}

  return password;
  // No Upper, No Numbers
} else if (useUpper === false && useLower === true && useNumbers === false && useSpecial === true) {
  for (var i = 0, n =letterSetLower.concat(specialSet).length; i < length; i++) {
    password += letterSetLower.concat(specialSet).charAt(Math.random() * n);
}

  return password;
  // No Upper, No Special
}else if (useUpper === false && useLower === true && useNumbers === true && useSpecial === false) {
  for (var i = 0, n =letterSetLower.concat(numberSet).length; i < length; i++) {
    password += letterSetLower.concat(numberSet).charAt(Math.random() * n);
}

  return password;
  // Only Lower
}else if (useUpper === false && useLower === true && useNumbers === false && useSpecial === false) {
  for (var i = 0, n =letterSetLower.length; i < length; i++) {
    password += letterSetLower.charAt(Math.random() * n);
}

  return password;
  // No Lower, No Number
}else if (useUpper === true && useLower === false && useNumbers === false && useSpecial === true) {
  for (var i = 0, n =letterSetUpper.concat(specialSet).length; i < length; i++) {
    password += letterSetUpper.concat(specialSet).charAt(Math.random() * n);
}

  return password;
  // No Lower, No Special
}else if (useUpper === true && useLower === false && useNumbers === true && useSpecial === false) {
  for (var i = 0, n =letterSetUpper.concat(numberSet).length; i < length; i++) {
    password += letterSetUpper.concat(numberSet).charAt(Math.random() * n);
}

  return password;
  // Only Upper
}else if (useUpper === true && useLower === false && useNumbers === false && useSpecial === false) {
  for (var i = 0, n =letterSetUpper.length; i < length; i++) {
    password += letterSetUpper.charAt(Math.random() * n);
}

  return password;
  // No Specials or Numbers
}else if (useUpper === true && useLower === true && useNumbers === false && useSpecial === false) {
  for (var i = 0, n =allLetter.length; i < length; i++) {
    password += allLetter.charAt(Math.random() * n);
}

  return password;
  // Close loop
} else {
  return "No valid selections made. Try again."
}
} else {
  alert("Please set your password length between 8-128 characters")
  return "Please set your password length between 8-128 characters"
}


}
// }
// Framework for if else statements in generatePassword function
  // if(){

  // }

//     for (var i = 0, n = letterSet.length; i < length; i++) {
//     password += letterSet.charAt(Math.random() * n);
 
//    }
//    console.log(password)

//    return password;