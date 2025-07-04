//Input a number and print whether it is even, odd, and also whether it's positive or negative.
const prompt = require('prompt-sync')();

let num = parseInt(prompt("Enter a number: "));

if (num >= 0) {
    if (num % 2 === 0) {
        console.log("Positive Even");
    } else {
        console.log("Positive Odd");
    }
} else {
    if (num % 2 === 0) {
        console.log("Negative Even");
    } else {
        console.log("Negative Odd");
    }
}
