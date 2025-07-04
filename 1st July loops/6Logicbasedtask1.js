//Check if a given number is prime
let num = 29;
let isPrime = true;

if (num <= 1) {
    isPrime = false;
} else {
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            isPrime = false;
            break;
        }
    }
}

console.log(`${num} is ${isPrime ? "a prime" : "not a prime"} number.`);
/*output-29 is a prime number.*/