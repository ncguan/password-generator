function getLength(){
  var passLength = prompt("How many characters is your password? Pick a number from 8 to 128.");
  while (passLength <8 || passLength>128 || isNaN(passLength)==true){
    passLength = prompt("How many characters is your password? Pick a number from 8 to 128.")
  }
}

function getTypes() {
  var charCheck = false
  while (charCheck==false){
    alert("Confirm at least one character type in your password.");
    var passLower = confirm("Click OK to confirm that your password includes lowercase characters.");
    var passUpper = confirm("Click OK to confirm that your password includes uppercase characters.");
    var passNum = confirm("Click OK to confirm that your password includes numeric characters.");
    var passSpecial = confirm("Click OK to confirm that your password includes special characters.");
    charType = [passLower, passUpper, passNum, passSpecial];
    charChecker();

    function charChecker(){
      if (charType.includes(true)){
        charCheck=true;
        return charCheck;
      }
      else{
        charCheck=false;
        return charCheck;
      }
    }
  }
}

var arrLower = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var arrUpper = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var arrNum = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9,];
var arrSpecial = [" ","!","\"","#","$","%","&","'","(",")","*","+",",","-",".","/",":",";","<","=",">","?","@","[","\\","]","^","_","`","{","|","}","~"];
var arrGenerate = [];
function useType() {
  if (charType[0] == true){
    arrGenerate.push(arrLower);
  }
  if (charType[1] == true){
    arrGenerate.push(arrLower);
  }
  if (charType[2] == true){
    arrGenerate.push(arrNum);
  }
  if (charType[3] == true){
    arrGenerate.push(arrSpecial);
  }
}

function generatePassword(){
  getLength();
  getTypes();
  useType();
  console.log(arrGenerate)
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

