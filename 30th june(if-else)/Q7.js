//Input a number and check if it is between 10 and 50.
const prompt = require("prompt-sync")();
num = parseInt(prompt("Enter a number: "));
if (num >= 10 && num <= 50) {
    console.log("Between 10 and 50");
} else {
    console.log("Not in range");
}