//Sum of even numbers between 1 and 50
let sum = 0;
for (let i = 1; i <= 50; i++) {
    if (i % 2 === 0) {
        sum += i;
    }
}
console.log("Sum of even numbers from 1 to 50:", sum);
/*output-Sum of even numbers from 1 to 50: 650*/