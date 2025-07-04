//Input a character and check if it's uppercase, lowercase, digit, or special character.
const prompt = require('prompt-sync')();

let ch = prompt("Enter a single character: ");

if (ch >= 'A' && ch <= 'Z') {
    console.log("Uppercase Letter");
} else if (ch >= 'a' && ch <= 'z') {
    console.log("Lowercase Letter");
} else if (ch >= '0' && ch <= '9') {
    console.log("Digit");
} else {
    console.log("Special Character");
}
