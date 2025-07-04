//Input month number and print number of days in that month.
const prompt = require('prompt-sync')();

let month = parseInt(prompt("Enter month number (1-12): "));

if (month === 2) {
    console.log("28 or 29 days");
} else if ([4, 6, 9, 11].includes(month)) {
    console.log("30 days");
} else if ([1, 3, 5, 7, 8, 10, 12].includes(month)) {
    console.log("31 days");
} else {
    console.log("Invalid month number");
}
