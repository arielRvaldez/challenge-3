// Red Button
var generateBtn = document.querySelector("#generate");
// event listener 
generateBtn.addEventListener("click", writePassword)

var characterLength = 8;
var choiceArr = [];
var password = "";

var specialCharArr = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '+', '=', '~', '{', '}', '[', ']'];
var lowerCassArr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upperCaseArr = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var numberArr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// functions
function writePassword() {
  password = ""
  var correctPrompts = getPrompts();
  var passwordText = document.querySelector("#password");

  if (correctPrompts) {
    generatePassword();
  }
    
  passwordText.value = password;
}
//pop up boxes
function getPrompts() {
  choiceArr = [];
  characterLength = parseInt(prompt("Choose a password length between 8 to 128 characters"));
// if user enters not a number.
  if (isNaN(characterLength) || characterLength < 8 || characterLength > 128) {
    alert("Please enter a number between 8 to 128. Please try again.");
    return false;
  }

  if (confirm("Would you like lowercase letters included in your password?")) {
    choiceArr = choiceArr.concat(lowerCassArr);
  // ensures if choosen a character will appear. 
    password += getRandomCharacter(lowerCassArr)
  }

  if (confirm("Would you like uppercase letters included in your password?")) {
    choiceArr = choiceArr.concat(upperCaseArr);
    // " ".
    password += getRandomCharacter(upperCaseArr)
  }

  if (confirm("Would you like special characters included in your password?")) {
    choiceArr = choiceArr.concat(specialCharArr);
    // " ".
    password += getRandomCharacter(specialCharArr);
  }

  if (confirm("Would you like numbers included in your password?")) {
    choiceArr = choiceArr.concat(numberArr);
    // " ".
    password += getRandomCharacter(numberArr);
  }

  if (choiceArr.length === 0) {
    // if user doesn't select a character type at all, will return to beginning.
    alert("Please choose at least 1 charcter type.");
    return false;
  }
  return true;
}
// will add characters if password is less than characterlength of 8.
function generatePassword() {
  while (password.length < characterLength) {
    password += getRandomCharacter(choiceArr);
  }
}
//arr is array. math.floor is random x array length. 
function getRandomCharacter(arr){
  var randomIndex = Math.floor(Math.random() * arr.length)
// aka return password
  return arr[randomIndex];
}