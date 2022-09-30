function getLength(){
  var passLength = prompt("How many characters is your password? Pick a number from 8 to 128.");
  while (passLength <8 || passLength>128 || isNaN(passLength)==true){
  var passLength = prompt("How many characters is your password? Pick a number from 8 to 128.")
  }
  return passLength
}

var arrGenerate = [];
var containType = [];
function getTypes() {
  var charCheck = false
  while (charCheck==false){
    alert("Confirm at least one character type in your password.");
    var passLower = confirm("Click OK to confirm that your password includes lowercase characters.");
    var passUpper = confirm("Click OK to confirm that your password includes uppercase characters.");
    var passNum = confirm("Click OK to confirm that your password includes numeric characters.");
    var passSpecial = confirm("Click OK to confirm that your password includes special characters.");
    var charType = [passLower, passUpper, passNum, passSpecial];
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
  
  if (charType[0] == true){
    arrGenerate.push(arrLower);
    containType.push(passLower);
  }
  if (charType[0] == false){
    containType.push(passLower);
  }

  if (charType[1] == true){
    arrGenerate.push(arrUpper);
    containType.push(passUpper);
  }
  if (charType[1] == false){
    containType.push(passUpper);
  }

  if (charType[2] == true){
    arrGenerate.push(arrNum);
    containType.push(passNum);
  }
  if (charType[2] == false){
    containType.push(passNum);
  }

  if (charType[3] == true){
    arrGenerate.push(arrSpecial);
    containType.push(passSpecial);
  }
  if (charType[3] == false){
    containType.push(passSpecial);
  }
}

var arrLower = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var arrUpper = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var arrNum = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9,];
var arrSpecial = [" ","!","\"","#","$","%","&","'","(",")","*","+",",","-",".","/",":",";","<","=",">","?","@","[","\\","]","^","_","`","{","|","}","~"];

var arrPassword = [];
var stringPassword;
function generatePassword(){
  var length = getLength();
  getTypes();
  var numLower = [];
  var numUpper = [];
  var numNum = [];
  var numSpecial = [];

  arrPassword.length = length;
  for (var i = 0; i < arrPassword.length; i++){
    var randGenIndex = Math.floor(Math.random() * arrGenerate.length);
    var randArr = arrGenerate[randGenIndex];
    if (randArr.includes("a")){
      var charIndex = Math.floor(Math.random() * arrLower.length);
    }
    else if (randArr.includes("A")){
      var charIndex = Math.floor(Math.random() * arrUpper.length);
    }
    else if (randArr.includes(0)){
      var charIndex = Math.floor(Math.random() * arrNum.length);
    }
    else if (randArr.includes(" ")){
      var charIndex = Math.floor(Math.random() * arrSpecial.length);
    }
    arrPassword[i]=arrGenerate[randGenIndex][charIndex];

    if (arrLower.includes(arrPassword[i])) {
      numLower.push(i);
    }
    if (arrUpper.includes(arrPassword[i])) {
      numUpper.push(i);
    }
    if (arrNum.includes(arrPassword[i])) {
      numNum.push(i);
    }
    if (arrSpecial.includes(arrPassword[i])) {
      numSpecial.push(i);
    }
  }

  if (containType[0]==true && numLower.length==0){
    if (numUpper.length>1){
      var charIndex = Math.floor(Math.random() * arrLower.length);
      arrPassword[numUpper[0]]=arrLower[charIndex];
    }
    else if (numNum.length>1){
      var charIndex = Math.floor(Math.random() * arrLower.length);
      arrPassword[numNum[0]]=arrLower[charIndex];
    }
    else if (numSpecial.length>1){
      var charIndex = Math.floor(Math.random() * arrLower.length);
      arrPassword[numSpecial[0]]=arrLower[charIndex];
    }
  }

  if (containType[1]==true && numUpper.length==0){
    if (numLower.length>1){
      var charIndex = Math.floor(Math.random() * arrUpper.length);
      arrPassword[numLower[0]]=arrUpper[charIndex];
    }
    else if (numNum.length>1){
      var charIndex = Math.floor(Math.random() * arrUpper.length);
      arrPassword[numNum[0]]=arrUpper[charIndex];
    }
    else if (numSpecial.length>1){
      var charIndex = Math.floor(Math.random() * arrUpper.length);
      arrPassword[numSpecial[0]]=arrUpper[charIndex];
    }
  }

  if (containType[2]==true && numNum.length==0){
    if (numUpper.length>1){
      var charIndex = Math.floor(Math.random() * arrNum.length);
      arrPassword[numUpper[0]]=arrNum[charIndex];
    }
    else if (numLower.length>1){
      var charIndex = Math.floor(Math.random() * arrNum.length);
      arrPassword[numLower[0]]=arrNum[charIndex];
    }
    else if (numSpecial.length>1){
      var charIndex = Math.floor(Math.random() * arrNum.length);
      arrPassword[numSpecial[0]]=arrNum[charIndex];
    }
  }

  if (containType[3]==true && numSpecial.length==0){
    if (numUpper.length>1){
      var charIndex = Math.floor(Math.random() * arrSpecial.length);
      arrPassword[numUpper[0]]=arrSpecial[charIndex];
    }
    else if (numNum.length>1){
      var charIndex = Math.floor(Math.random() * arrSpecial.length);
      arrPassword[numNum[0]]=arrSpecial[charIndex];
    }
    else if (numLower.length>1){
      var charIndex = Math.floor(Math.random() * arrSpecial.length);
      arrPassword[numLower[0]]=arrSpecial[charIndex];
    }
  }
  
  return stringPassword = arrPassword.join("");
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