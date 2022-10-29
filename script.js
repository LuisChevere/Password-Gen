// Assignment Code
var generateBtn = document.querySelector("#generate");
//variables for possible characters
var specialCharacter = ["!","@","#","$","%","^","&","*","(",")","~","`","_","-","+","=","<",">","/","?"];
var uppercase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var lowercase = ["a","b","c","d","e","f","g","h","i","j","l","m","o","p","q","r","s","t","u","v","w","x","y","z"];
var numbers = ["0","1","2","3","4","5","6","7","8","9"];

//design a function that takes in the user prompt (TA asssistance)
function promptPasswordOptions() {

//get desired password line from user
  var characters = prompt("How long would you like your password to be?")
  

// research partsInt & promp, make variable with these
  characters = parseInt(characters)
    if(characters < 8 || characters > 128) {
      alert ("characters must be betwwen 8-128")
      return;
    }

// make a conditional to handle for user for "NAN"
// if(isNaN()){
//   return "Not a number"}
//   alert("Please enter a number")
//   return;
}


// make conditional that handles if a number is less than 8, larger than 128.

// if(characters < 8 || characters > 128) {
//   alert ("characters must be betwwen 8-128")
//   return;
// }

// make 4 variables for each confirm statements
  var uppercase;
  var lowercase;
  var numbers;
  var specialCharacter;

// example var selectionOfCharacters = confirm(
// 'Click OK to confirm including selection of characters.');
  uppercase = confirm("would you like an uppercase?");
  lowercase = confirm("Would you like a lowercase?");
  numbers = confirm("Would you like numbers?");
  specialCharacter = confirm("would you like special characters?");

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