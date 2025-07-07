//Given an array of numbers, return a new array containing only the elements that are prime numbers.
function isPrime(n) {
    if (n <= 1) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false;
    }
    return true;
}

function filterPrimes(arr) {
    return arr.filter(isPrime);
}
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
const primes = filterPrimes(numbers);

console.log(primes); // output-[2, 3, 5, 7, 11]
