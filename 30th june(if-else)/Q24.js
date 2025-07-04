//Input a number and check if the sum of its digits is even or odd.
const prompt = require('prompt-sync')();

let num = prompt("Enter a number: ");
let sum = 0;

for (let digit of num) {
    sum += parseInt(digit);
}

if (sum % 2 === 0) {
    console.log("Sum of digits is Even");
} else {
    console.log("Sum of digits is Odd");
}
