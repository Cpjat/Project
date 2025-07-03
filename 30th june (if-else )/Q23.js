const prompt = require('prompt-sync')();

let num = prompt("Enter a number: ");
let reversed = num.split('').reverse().join('');

if (num === reversed) {
    console.log("Palindrome");
} else {
    console.log("Not Palindrome");
}
