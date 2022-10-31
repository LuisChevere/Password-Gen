// Assignment Code
var generateBtn = document.querySelector("#generate");
//variables for possible characters
var specialCharacter = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "~", "`", "_", "-", "+", "=", "<", ">", "/", "?"];
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "l", "m", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

//design a function that takes in the user prompt (TA asssistance)
function promptPasswordOptions() {

  //get desired password line from user
  var length = parseInt(prompt("How long would you like your password to be?"))
  console.log(length)
  console.log(typeof (length))
  // make a conditional to handle for user for "NAN"
  if (Number.isNaN(length)) {
    alert("Not a number")
    return null;
  }

  // make conditional that handles if a number is less than 8, larger than 128.
  // research partsInt & promp, make variable with these
  if (length < 8 || length > 128) {
    alert("characters must be betwwen 8-128")
    return null;
  }






  // make 4 variables for each confirm statements
  // example var selectionOfCharacters = confirm(
  // 'Click OK to confirm including selection of characters.'); 
  var isUppercase = confirm("would you like an uppercase?");
  var isLowercase = confirm("Would you like a lowercase?");
  var isNumber = confirm("Would you like numbers?");
  var isSpecialCharacter = confirm("would you like special characters?");

  if (isUppercase === false && isLowercase === false && isNumber === false && isSpecialCharacter === false) {
    alert("Must choose at least one character type")
    return null;
  }

  //creating an object to store or take in user inputs
  var userInfo = {
    length: length,
    isUppercase: isUppercase,
    isLowercase: isLowercase,
    isNumber: isNumber,
    isSpecialCharacter: isSpecialCharacter,
  };
  return userInfo;

}
function callRandom(arr){
  var randomIndex = Math.floor(Math.random() *  arr.length)
  console.log(callRandom)
  var randomChar = arr[randomIndex]

  return randomChar;
}

function generatePassword() {
  var userOptions = promptPasswordOptions();
  // declare 3 empty arrays, if statement for the confirms. if useroptions.isnumber. if true, call array
  

  if(userOptions.isUppercase){
    possibleChar = possibleChar.concat(uppercase)
    console.log(possibleChar)
  guaranteeChar.push(callRandom(uppercase))
    console.log(guaranteeChar)
  }
  
  //for loops x 2
}

//make a conditional statement that handles if someone cancels all confirms

//make an object that will take into account the user input (this will be a variable)
// var arr = [4];

//return statement to return the user input

// }


//==========================================================

// Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }
// function generatePassword() {
//   var numberCharacters = prompt("How many characters would you like password to be?")
//   numberCharacters = parseInt(numberCharacters)
//   console.log(numberCharacters)
//   console.log(typeof numberCharacters)

// if(numberCharacters < 8 || numberCharacters >128) {
//   alert ("Number must be between 8-128")
//   return
// }

//     var isuppercase = confirm("should this include an uppercase?")

// if(uppercase) {
//   confirm("Should this include an upppercase?")
//   }

// if(lowercase) {
//   confirm("Should this include a lowercase?")
// }


// if(specialCharacter) {
//   confirm("should this include special characters?")
// }



// Add event listener to generate button
//document.getElementById("password").value = password;
generateBtn.addEventListener("click", promptPasswordOptions);

// function copyPassword() {
//   var copyText = document.getElementById("#generate");
//   copyText.select();
//   document.confirm("copy");
//}