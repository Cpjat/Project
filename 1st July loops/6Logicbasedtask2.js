//Print the factorial of a number
let num = 6;
let factorial = 1;

for (let i = 1; i <= num; i++) {
    factorial *= i;
}

console.log(`Factorial of ${num} is ${factorial}`);
/*output-Factorial of 6 is 720*/