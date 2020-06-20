// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
// GIVEN I need a new, secure password
// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria
generateBtn.addEventListener("click", writePassword);
function generatePassword() {
  var specialCharacters = ["^", "!", "@", "#", "+", "_", "-", "&", "*"];
  var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Z"];
  var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  var passwordLength = false;

  // WHEN prompted for password criteria
  // THEN I select which criteria to include in the password
  // WHEN prompted for the length of the password
  // function userOptions()
  // 

  while (passwordLength < 8 || passwordLength > 128 || passwordLength == "") { //passwordValid is false
    passwordLength = prompt("Please choose a valid length between 8 and 128")
  }
  if (passwordLength < 128 || passwordLength > 8) {
    var chooseSpecialCharacters = confirm("Do you want special characters in your password?");
    var chooseLowercase = confirm("Do you want lowercase in your password?");
    var chooseUppercase = confirm("Do you want uppercase in your password?");
    var chooseNumbers = confirm("Do you want numbers in your password?");
  }

  if (
    chooseSpecialCharacters === false &&
    chooseLowercase === false &&
    chooseUppercase === false &&
    chooseNumbers === false
  ) {
    alert("Must choose a special character")
    return
  }
  //  I choose a length of at least 8 characters and no more than 128 characters
  // User is prompted for character types to include in the password
  // User chooses lowercase, uppercase, numeric, and/or special characters
  // User answers each prompt (T/F)
  // User input should be validated and at least one character type should be selected
  // All prompts are answered
  // Password is generated that matches the selected criteria
  // function generatePassword(){
  // var userChoices = userOptions();

  var result = [];
  if (chooseSpecialCharacters === true) {
    result = result.concat(specialCharacters)
  }
  if (chooseUppercase === true) {
    result = result.concat(upperCase)
  }
  if (chooseLowercase === true) {
    result = result.concat(lowerCase)
  }
  if (chooseNumbers === true) {
    result = result.concat(numbers)
  }
  console.log(result);
  // array to store characters in  password
  // array to  store the chosen user characters
  console.log(passwordLength);
  var userPassword = "";
  for (var i = 0; i < passwordLength; i++){
    userPassword += result[Math.floor(Math.random() * result.length)];
  }
    //   The password is generated
  //   Password is displayed in an alert 
  //   Add event listener to generate button
  return userPassword;
  
}
