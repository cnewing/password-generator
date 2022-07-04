var uppercase = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
var lowercase = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var symbol = ["!", "@", "#", "$", "%", "^", "&", "*", "?"];

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  alert("Enter password info in the follow prompts");
  var passwordLength = prompt(
    "How many characters would you like your password to have?"
  );

  if (isNaN(passwordLength)) {
    alert("password length must be a number!");
    return;
  }

  if (passwordLength < 8 || passwordLength > 128) {
    alert("Password must be between 8 & 128 characters!");
    return;
  }

  var useUpperCase = confirm("Do you want uppercase letters?");
  var useLowerCase = confirm("Do you want lowercase letters?");
  var useNumbers = confirm("Do you want numbers?");
  var useSymbols = confirm("Do you want symbols?");

  if (
    useUpperCase === false &&
    useLowerCase === false &&
    useNumbers === false &&
    useSymbols === false
  ) {
    alert("Must choose at least one character type");
    return;
  }

  var userCharacters = [];

  if (useUpperCase === true) {
    userCharacters = userCharacters.concat(uppercase);
  }

  if (useLowerCase === true) {
    userCharacters = userCharacters.concat(lowercase);
  }

  if (useNumbers === true) {
    userCharacters = userCharacters.concat(number);
  }

  if (useSymbols === true) {
    userCharacters = userCharacters.concat(symbol);
  }

  for (let i = 0; i <= passwordLength; i++) {
    let randomPassword = Math.floor(Math.random() * userCharacters.length);
    console.log(randomPassword);
  }
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
