const prompt = require('prompt-sync')();

let year = parseInt(prompt("Enter a year: "));
if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
    console.log("Leap Year");
} else {
    console.log("Not a Leap Year");
}
