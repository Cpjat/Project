const prompt = require('prompt-sync')();

let a = parseInt(prompt("Enter first number: "));
let b = parseInt(prompt("Enter second number: "));

if (a > b) {
    console.log("First number is greater:", a);
} else if (b > a) {
    console.log("Second number is greater:", b);
} else {
    console.log("Both numbers are equal");
}
