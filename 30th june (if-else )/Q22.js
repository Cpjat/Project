const prompt = require('prompt-sync')();

let num = parseInt(prompt("Enter a number: "));

if ((num % 3 === 0 || num % 5 === 0) && !(num % 3 === 0 && num % 5 === 0)) {
    console.log("Divisible by 3 or 5, but not both");
} else {
    console.log("Not valid condition");
}
