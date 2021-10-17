var generateBtn = document.querySelector("#generate");
var charUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var charLower = "abcdefghijklmnopqrstuvwxyz";
var charNumber = "123456789";
var charSymbol = "!@#$%^&*";
var passwordLetterPool = "";


// Write password to the #password input
function writePassword() {

  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}


function generatePassword() {
  //prompt for length
  var password = ""
  var passwordLength = prompt("How many characters do you want your password to be?")
  console.log(passwordLength);
  while (passwordLength < 8 || passwordLength > 128) {
    alert("Please choose between 8 and 128 characters")
    passwordLength = prompt("How many characters do you want your password to be?")
  }
  //prompt for uppercase, lowercase, number, symbol
  var passwordTextUpper = confirm("Do you want uppercase letters?")
  var passwordTextLower = confirm("Do you want lowercase letters?")
  var passwordTextNumber = confirm("Do you want numbers?")
  var passwordTextSymbol = confirm("Do you want symbols?")
  console.log(passwordTextUpper, passwordTextLower, passwordTextNumber, passwordTextSymbol);
  // if statements for letters/numbers/symbols selected
  if (passwordTextUpper) {
    passwordLetterPool += charUpper; 
  } 
  if (passwordTextLower) {
    passwordLetterPool += charLower;
  }  
  if (passwordTextNumber) {
    passwordLetterPool += charNumber;
  }  
  if (passwordTextSymbol) {
    passwordLetterPool += charSymbol;
  }
  console.log(passwordLetterPool)
  //logs password for the length given
  for (let i = 0; i < passwordLength; i++ ) {
    password += passwordLetterPool[Math.floor(Math.random()*passwordLetterPool.length)]
    console.log(i)
  }
console.log(password);
return password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
