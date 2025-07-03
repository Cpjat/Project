const prompt = require('prompt-sync')();

let a = parseFloat(prompt("Enter side A: "));
let b = parseFloat(prompt("Enter side B: "));
let c = parseFloat(prompt("Enter side C: "));

if (a + b > c && a + c > b && b + c > a) {
    console.log("Valid triangle");

    if (a === b && b === c) {
        console.log("Equilateral triangle");
    } else if (a === b || b === c || a === c) {
        console.log("Isosceles triangle");
    } else {
        console.log("Scalene triangle");
    }
} else {
    console.log("Invalid triangle");
}
