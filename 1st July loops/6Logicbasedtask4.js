//Count the number of digits in a given number using a loop.
let num = 12345;
let digitCount = 0;

while (num > 0) {
    digitCount++;
    num = Math.floor(num / 10);
}

console.log("Number of digits:", digitCount);
/*output-Number of digits: 5*/