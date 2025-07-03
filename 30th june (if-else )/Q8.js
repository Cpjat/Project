const prompt = require("prompt-sync")();
num = parseInt(prompt("Enter a number: "));
if (num >= 100 && num <= 999) {
    console.log("3-digit number");
} else {
    console.log("Not a 3-digit number");
}