//Input a number and check if it's divisible by 3 or not.
const prompt = require('prompt-sync')(); 

let num = parseInt(prompt("Enter a number: "));
if (num % 3 === 0) {
    console.log("Number is divisible by 3");
} else {
    console.log("Not divisible by 3");
}
