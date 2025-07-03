const prompt = require("prompt-sync")();
num = parseInt(prompt("Enter a number: "));
if (num % 7 === 0) {
    console.log("Multiple of 7");
} else {
    console.log("Not a multiple of 7");
}