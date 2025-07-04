//Input a number and check if it is a palindrome number (e.g., 121).
const prompt = require('prompt-sync')();

let num = prompt("Enter a number: ");
let reversed = num.split('').reverse().join('');

if (num === reversed) {
    console.log("Palindrome");
} else {
    console.log("Not Palindrome");
}
