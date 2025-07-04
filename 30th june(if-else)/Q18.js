//input someone's name and age, and check if they can get a driving license (age ≥ 18).
const prompt = require('prompt-sync')();

let name = prompt("Enter your name: ");
let age = parseInt(prompt("Enter your age: "));

if (age >= 18) {
    console.log(name + " is eligible for a driving license");
} else {
    console.log(name + " is not eligible for a driving license");
}
