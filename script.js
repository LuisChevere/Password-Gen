// Assignment Code
var generateBtn = document.querySelector("#generate");
var specialCharacter = "!@#$%^&*()"

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
function generatePassword() {
  var numberCharacters = prompt("How many characters would you like password to be?")
  numberCharacters = parseInt(numberCharacters)
  console.log(numberCharacters)
  console.log(typeof numberCharacters)
  if(isNaN(numberCharacters)) {
    alert ("Password must be a number")
  }
  if(numberCharacters < 8 || numberCharacters >128){
    alert ("Number must be between 18-128")
  }
  if(numberCharacters >8) { 
    confirm("should this include special characters?")
    if(true)
  }
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);