// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function generatePassword() {
  var passwordLength = 0;
  var allLowerCaseLetters =["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]; //type in all lower cases, then do for uppercases, number and charactors
  var allUpperCaseLetters =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
  var allNumbers =[0,1,2,3,4,5,6,7,8,9];
  var allCharactors =["!","@","#","$","%","^","&","*"]
  var finalPassword = ""
  var includedCharactors = []

  var upperCase = false
  var lowerCase = false
  var charactors = false
  var numbers = false 

  while (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {   //I need to write a condition for the password length (if its > 8 || < 128)
    passwordLength = prompt("how many charactors between 8-128 would you like to use?");
}

   while (!lowerCase || !upperCase || !charactors || !numbers){ //write 2 more confirms for the letters and numbers and then two more !statements for letter and numbers with || seperating them
     lowerCase = confirm("Do you want to use Lower Case letters?");
     upperCase = confirm("Do you want to use Upper Case letters?");
     charactors = confirm("Do you want to use charactors?");
     numbers = confirm("Do you want to use numbers?")
  }

  if (lowerCase) {
    includedCharactors = includedCharactors.concat(allLowerCaseLetters);
    finalPassword += randomCharactor(allLowerCaseLetters); 
    
  }
  if (upperCase) {
    includedCharactors = includedCharactors.concat(allUpperCaseLetters);
    finalPassword += randomCharactor(allUpperCaseLetters); 
    
  }
  if (charactors) {
    includedCharactors = includedCharactors.concat(allCharactors);
    finalPassword += randomCharactor(allCharactors); 
    
  }
  if (numbers) {
    includedCharactors = includedCharactors.concat(allNumbers);
    finalPassword += randomCharactor(allNumbers); 
    
  }
  for (let i = finalPassword.length; i < passwordLength; i++) {
    finalPassword += randomCharactor(includedCharactors)
  }
  return finalPassword
}
function randomCharactor(charactorArray){
  return charactorArray[Math.floor(Math.random() * charactorArray.length)] 
}



function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
