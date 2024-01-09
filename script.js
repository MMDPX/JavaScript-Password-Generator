// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// Function to prompt user for password options
function getPasswordOptions() {
  alert("The randomly generated password will consist of: ");
  alert("At least 8, but not more than 128 characters.");
  alert("Lowercase and uppercase, as well as numeric and special characters");
  alert("The source can be modified to change to criteria of generating the password");
}

getPasswordOptions();

// Function for getting a random element from an array
function getRandom(arr) {
  var allArrays = specialCharacters.concat(numericCharacters, lowerCasedCharacters, upperCasedCharacters);
  var passwordLength = Math.floor(Math.random() * (128 - 8 + 1)) + 8;

  var passwordOutput = []; 

  //Validating each input to be included in the generated password
  passwordOutput.push(specialCharacters[Math.floor(Math.random() * specialCharacters.length)]);
  passwordOutput.push(numericCharacters[Math.floor(Math.random() * numericCharacters.length)]);
  passwordOutput.push(lowerCasedCharacters[Math.floor(Math.random() * lowerCasedCharacters.length)]);
  passwordOutput.push(upperCasedCharacters[Math.floor(Math.random() * upperCasedCharacters.length)]);

  for (var i = 0; i < passwordLength; i++) {
    var randomElement = allArrays[Math.floor(Math.random() * allArrays.length)];
    passwordOutput.push(randomElement);
  }

  return passwordOutput.join("");
}

//Function to generate password with user input
function generatePassword() {
  var generatedPassword = getRandom();
  return generatedPassword 
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
 
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);
