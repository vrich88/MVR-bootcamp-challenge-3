// Assignment code here
/* variables to create arrays and provide function inputs fields */
var lowers = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppers = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var specials = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+"];
var askLength;
var askLowers;
var askUppers;
var askNumbers;
var askSpecials;
var userInput;
// Get references to the #generate element
    /* finds the #generate location in the HTML to begin the function from the user perspective*/
var generateBtn = document.querySelector("#generate");
// Write password to the #password input
    /* this function puts the password result  into the HTML output */
function writePassword() {
    /* var password is the value created by function generatePassword (code I write) */
  var password = generatePassword();
    /* va PasswordText is location on the HTML page where the function value will be written */ 
  var passwordText = document.querySelector("#password");
    /* this will be output value of the function being taken from the function and displayed into the HTML location #password */
  passwordText.value = password;
}
// Add event listener to generate button
    /* this function "listens" for a "click" on the generateBtn in the HTML to begin the generatePassword function */ 
generateBtn.addEventListener("click", writePassword);
/* generatePassword function */
function generatePassword() {
    /* start asking for password length when generate button is initially pressed */
    askLength = prompt("Select between 8 and 128 characters for password length:"); {
    /* checks for a length value between 8 & 128 character or if criteria not met then rephrases prompt */
    } if (askLength < 8 || askLength > 128) {
        askLength = prompt("Required Value! You must enter a numeric value between 8 and 128 characters for password length; or no password will be generated!")
    /* function continues with valid user input to confirm use of lowers, uppers, numbers, and/or special characters */
    } else {
        askLowers = confirm("Do you want lower case characters?");
        askUppers = confirm("Do you want upper case characters?");
        askNumbers = confirm("Do you want number characters?");
        askSpecials = confirm("Do you want special characters?");
    /* console log to track user inputs of length & character types */
        console.log("Password length is " + askLength + ", and includes:  lowers " + askLowers + ", uppers " + askUppers + ", numbers " + askNumbers + ", and specials " + askSpecials)
    }
    /* checks for valid confirmations on the types of characters against a No answers */
    if (!askLowers && !askUppers && !askNumbers && !askSpecials) {
        alert("Required Value! You did not select at least one character type or failed to say within password length range. Please start over.");
    /* checks for and calculates password if all types of character types used */
    } else if (askLowers && askUppers && askNumbers && askSpecials) {
        userInput = lowers.concat(uppers,numbers,specials);    
    /* check for combinations of three character types included */
            // lowers + uppers + numbers
    } else if (askLowers && askUppers && askNumbers && !askSpecials) {
        userInput = lowers.concat(uppers,numbers);
            // lowers + uppers + specials
    } else if (askLowers && askUppers && !askNumbers && askSpecials) {
        userInput = lowers.concat(uppers,specials);
            // uppers + numbers + specials
    } else if (!askLowers && askUppers && askNumbers && askSpecials) {
        userInput = uppers.concat(numbers,specials);
    /* check for combinations of two character types included */
            // lowers + uppers
    } else if (askLowers && askUppers && !askNumbers && !askSpecials) {
        userInput = lowers.concat(uppers);
            // lowers + numbers
    } else if (askLowers && !askUppers && askNumbers && !askSpecials) {
        userInput = lowers.concat(numbers);
            // lowers + specials
    } else if (askLowers && !askUppers && !askNumbers && askSpecials) {
        userInput = lowers.concat(specials);
            // uppers + numbers
    } else if (!askLowers && askUppers && askNumbers && !askSpecials) {
        userInput = uppers.concat(numbers);
            // uppers + specials
    } else if (!askLowers && askUppers && !askNumbers && askSpecials) {
        userInput = uppers.concat(specials);
            // numbers + specials
    } else if (!askLowers && !askUppers && askNumbers && askSpecials) {
        userInput = numbers.concat(specials);
    /* check for one character type only */
            // lowers
    } else if (askLowers && !askUppers && !askNumbers && !askSpecials) {
        userInput = lowers;
            // uppers
    } else if (!askLowers && askUppers && !askNumbers && !askSpecials) {
        userInput = uppers;
            // numbers
    } else if (!askLowers && !askUppers && askNumbers && !askSpecials) {
        userInput = numbers;
            // specials
    } else if (!askLowers && !askUppers && !askNumbers && askSpecials) {
        userInput = specials;
    }
    /* this variable is to be a place holder for the randomly generated password */
    var passHolder = [];
    /* loop to put all userInput into a formula to select the characters for the password being generated */
    for (var i = 0; i < askLength; i++) {
        var passParts = userInput[Math.floor(Math.random() * userInput.length)];
        passHolder.push(passParts);
    /* console log to verify the passParts array created by userInput */
        console.log("Password array includes " + passParts);
    }
    /* combine the randomly selected characters in passParts to create the password variable to returned on the HTML file */
    var password = passHolder.join("");
        /* console log to verify the generated password that shows up on HTML page */
        console.log("Your generated password is:  " + password);
    return password;
}