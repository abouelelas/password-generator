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
var chooseSpecialCharacters = "^!@#+_-&*";
var chooseUppercase = "ABCDEFGHIJKLMNOPQRSTUVWXZ";
var chooseLowercase = "abcdefghijklmnopqrstuvwxyz";
var chooseNumbers = "0123456789";
var passwordLength = false;

// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
// WHEN prompted for the length of the password
while (passwordLength < 8 || passwordLength > 128 || passwordLength == "") { //passwordValid is false
  passwordLength = prompt("Please choose a valid length: Choose a length between 8 and 128")

}
if (passwordLength < 128 || passwordLength > 8) {
  var chooseSpecialCharacters = confirm("Do you want special characters?");
  var chooseLowercase = confirm("Do you want lowercase letters?");
  var chooseUppercase = confirm("Do you want uppercase letters?");
  var chooseNumbers = confirm("Do you want numbers?");



}
//  I choose a length of at least 8 characters and no more than 128 characters
// User is prompted for character types to include in the password
// User chooses lowercase, uppercase, numeric, and/or special characters
// User answers each prompt (T/F)
// User input should be validated and at least one character type should be selected
// All prompts are answered
// Password is generated that matches the selected criteria

console.log(passwordLength);
var charCollection = "abcdefghijklmnopqrstuvwxxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*_-+0123456789";
var password = "";
for (var i = 0; i < passwordLength; i++) 
  password += charCollection[Math.floor(Math.random() * charCollection.length)];
  window.alert(password);

// The password is generated
// Password is displayed in an alert 
// Add event listener to generate button
// for

// generateBtn.addEventListener("click", writePassword);
