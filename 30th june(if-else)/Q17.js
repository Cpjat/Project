//Input a number and check if it is a prime number (basic logic)
const prompt = require('prompt-sync')();

let num = parseInt(prompt("Enter a number: "));
let isPrime = true;

if (num < 2) {
    isPrime = false;
} else {
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            isPrime = false;
            break;
        }
    }
}

console.log(isPrime ? "Prime" : "Not Prime");
