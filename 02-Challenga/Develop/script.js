// Assignment Code
var generateBtn = document.querySelector("generate");

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword(){
    let passwordLength;
    let includeUpperCase;
    let includeLowerCase;
    let includeNumber;
    let includeSpecialCharater;

// parseInt is (int to change the number)
    passwordLength = parseInt(prompt("password from-8 to-128 choosen"));
    includeUpperCase = confirm ('UpperCase?');
    includeLowerCase = confirm ('LowerCase?');
    includeNumber = confirm ('Number?');
    includeSpecialCharater = confirm ('SpecialCharater?');

// isNaN = not a number
    while (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128){
        alert('please try again');
        return "";
    }

// || = or (|| is or.)
// && = and (&& is and.)
    if (!includeUpperCase && !includeLowerCase && !includeNumber && !includeSpecialCharater){
        alert("Not corret try again")
        return "";
    }

    let availableChar = "";
    if(includeUpperCase){
        availableChar += 'ABCDE';
    }

    if(includeLowerCase){
        availableChar += 'abcde';
    }

    if(includeNumber){
        availableChar += '12345';
    }

    if(includeSpecialCharater){
        availableChar += '#@&$^*!~';
    }

    let password = "";
    for(let i = 0; i < passwordLength; i++){
        let randomIndex = Math.floor(Math.random() * availableChar.length);
        password += + availableChar.charAt(randomIndex);
    }

    return password;
}