const prompt = require('prompt-sync')();

let num = parseInt(prompt("Enter a number: "));
if (num % 5 === 0 && num % 11 === 0) {
    console.log("Divisible by both 5 and 11");
} else {
    console.log("Not divisible by both 5 and 11");
}
