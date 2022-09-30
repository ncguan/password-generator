//function to get length of password
function getLength(){
  var passLength = prompt("How many characters is your password? Pick a number from 8 to 128.");
  while (passLength <8 || passLength>128 || isNaN(passLength)==true){
  var passLength = prompt("How many characters is your password? Pick a number from 8 to 128.")
  }
  return passLength
}

var arrLower = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var arrUpper = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var arrNum = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9,];
var arrSpecial = [" ","!","\"","#","$","%","&","'","(",")","*","+",",","-",".","/",":",";","<","=",">","?","@","[","\\","]","^","_","`","{","|","}","~"];

//arrGenerate is an array of the character types
var arrGenerate = [];
//containType is used as a boolean array
var containType = [];
//function that gets user input of password character type criteria 
function getTypes() {
  var charCheck = false
  //repeats so that at least one character type is confirmed
  while (charCheck==false){
    alert("Confirm at least one character type in your password.");
    var passLower = confirm("Click OK to confirm that your password includes lowercase characters.");
    var passUpper = confirm("Click OK to confirm that your password includes uppercase characters.");
    var passNum = confirm("Click OK to confirm that your password includes numeric characters.");
    var passSpecial = confirm("Click OK to confirm that your password includes special characters.");
    var charType = [passLower, passUpper, passNum, passSpecial];
    charChecker();

    //function checks that there is at least one confirmed character type
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
  
  //if character type lowercase was confirmed, push array of lowercase charatcers into arrGenerate and containType[0]=true
  if (charType[0] == true){
    arrGenerate.push(arrLower);
    containType.push(passLower);
  }
  if (charType[0] == false){
    containType.push(passLower);
  }

  //if character type uppercase was confirmed, push array of uppercase charatcers into arrGenerate and containType[1]=true
  if (charType[1] == true){
    arrGenerate.push(arrUpper);
    containType.push(passUpper);
  }
  if (charType[1] == false){
    containType.push(passUpper);
  }

  //if character type numeric was confirmed, push array of numeric charatcers into arrGenerate and containType[2]=true
  if (charType[2] == true){
    arrGenerate.push(arrNum);
    containType.push(passNum);
  }
  if (charType[2] == false){
    containType.push(passNum);
  }

  //if character type special character was confirmed, push array of special charatcers into arrGenerate and containType[3]=true
  if (charType[3] == true){
    arrGenerate.push(arrSpecial);
    containType.push(passSpecial);
  }
  if (charType[3] == false){
    containType.push(passSpecial);
  }
}

var arrPassword = [];
var stringPassword;
function generatePassword(){
  var length = getLength();
  getTypes();
  //arrays of what index the character type appears in from the randomly generated password array
  var numLower = [];
  var numUpper = [];
  var numNum = [];
  var numSpecial = [];

  arrPassword.length = length;
  // for loop creates a password array
  for (var i = 0; i < arrPassword.length; i++){
    // random index to pick from array arrGenerate that contains array of character types
    var randGenIndex = Math.floor(Math.random() * arrGenerate.length);
    // array of a random character type from array arrGenerate
    var randArr = arrGenerate[randGenIndex];
    // if and else if statements to get random index from the random character type array
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
    //adds random character into array arrPassword at index i
    arrPassword[i]=arrGenerate[randGenIndex][charIndex];

    // if statements check to see which character type array arrPassword[i] is in and pushes i index from arrPassword into an array specific to the character type 
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

  //if user critera contains lowercase and the randomly generated password does not contain lowercase
  if (containType[0]==true && numLower.length==0){
    //if there is more than 1 uppercase in randomly generated password, randonly generate a lowercase charater to replace first index of uppercase which has index number of first appearance of uppercase in password array
    if (numUpper.length>1){
      var charIndex = Math.floor(Math.random() * arrLower.length);
      arrPassword[numUpper[0]]=arrLower[charIndex];
    }
    //if there is more than 1 numeric in randomly generated password, randonly generate a lowercase charater to replace first index of numeric which has index number of first appearance of numeric in password array
    else if (numNum.length>1){
      var charIndex = Math.floor(Math.random() * arrLower.length);
      arrPassword[numNum[0]]=arrLower[charIndex];
    }
    //if there is more than 1 special character in randomly generated password, randonly generate a lowercase charater to replace first index of special character which has index number of first appearance of special character in password array
    else if (numSpecial.length>1){
      var charIndex = Math.floor(Math.random() * arrLower.length);
      arrPassword[numSpecial[0]]=arrLower[charIndex];
    }
  }

  //if user critera contains uppercase and the randomly generated password does not contain uppercase
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

  //if user critera contains numeric charaters and the randomly generated password does not contain numeric characters
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

  //if user critera contains special charaters and the randomly generated password does not contain special characters
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
  //makes array password into a string
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