//Input three numbers and find the greatest among them.
const prompt = require('prompt-sync')();

let a = parseInt(prompt("Enter first number: "));
let b = parseInt(prompt("Enter second number: "));
let c = parseInt(prompt("Enter third number: "));

if (a >= b && a >= c) {
    console.log("Greatest is:", a);
} else if (b >= a && b >= c) {
    console.log("Greatest is:", b);
} else {
    console.log("Greatest is:", c);
}
