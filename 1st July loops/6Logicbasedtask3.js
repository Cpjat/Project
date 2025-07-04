// Reverse of a number using loop
let num = 123;
let reverse = 0;

while (num > 0) {
    let digit = num % 10;
    reverse = reverse * 10 + digit;
    num = Math.floor(num / 10);
}

console.log("Reversed number:", reverse); 
/*output-Reversed number: 321*/