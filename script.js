// Red Button
var generateBtn = document.querySelector("#generate");

// functions
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
function generatePassword() {
  console.log();

  return "";
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
