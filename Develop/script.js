// Assignment Code
var generateBtn = document.querySelector("#generate");
function generatePassword() {
  const lowercaseCharacters = "abcdefghijklmnopqrstuvwxyz"
  const capitalsCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  const numeric = "0123456789"
  const specialCharacters = "!@#$%^&*()_+-=?><."
  let result = ' ';
  let responseLength = Length.value;
  var responseUppercase = uppercaseValue.checked;
  var responseLowercase = lowercaseValue.checked;
  var responseNumeric = numericValue.checked;
  var responseSpecial = specialValue.checked;


  if (responseLength >= 8 || responseLength <= 128) {
    //This is true then I will generate a password""
    console.log(responseLength)
    console.log(lowercaseCharacters.length);
    var combinedValue = "";
    //I need to modify this for loop to make sure that I accept the correct response length otherwise I will be generating 4 characters in 1 pass
          if (responseLowercase === true) { 
        combinedValue += lowercaseCharacters;
        }
      if (responseUppercase === true) {
        combinedValue += capitalsCharacters;
        }
      if (responseNumeric === true) {
        combinedValue += numeric;
        }
      if (responseSpecial === true) {
        combinedValue += specialCharacters;
        }
    for ( let i = 0; i < responseLength; i++ ) {
      result += combinedValue.charAt(Math.floor(Math.random() * combinedValue.length))
    }
    console.log(result)
  } else {
      //This is false then i will be prompted to change the imput length
      console.log("else")
  }


  //I NEED TO RETURN MY RESULT
  console.log(result)
  return result
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


//## Acceptance Criteria

//GIVEN I need a new, secure password (Starter Code)

//WHEN I click the button to generate a password
//THEN I am presented with a series of prompts for password criteria (Complete)

//WHEN prompted for password criteria
//THEN I select which criteria to include in the password (Complete)

//WHEN prompted for the length of the password
//THEN I choose a length of at least 8 characters and no more than 128 characters (Incomplete)

//WHEN asked for character types to include in the password
//THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters (Incomplete)

//WHEN I answer each prompt
//THEN my input should be validated and at least one character type should be selected (Incomplete)

//WHEN all prompts are answered
//THEN a password is generated that matches the selected criteria (Incomplete)

//WHEN the password is generated
//THEN the password is either displayed in an alert or written to the page (Incomplete)