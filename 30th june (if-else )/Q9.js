const prompt = require('prompt-sync')();

let age = parseInt(prompt("Enter your age: "));
if (age >= 18) {
    console.log("Eligible to vote");
} else {
    console.log("Not eligible to vote");
}
