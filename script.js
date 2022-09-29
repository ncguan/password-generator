var passLength = prompt("How many characters is your password? Pick a number from 8 to 128.");
while (passLength <8 || passLength>128 || isNaN(passLength)==true){
  passLength = prompt("How many characters is your password? Pick a number from 8 to 128.")
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

