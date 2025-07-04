//Input the day number (1–7) and print the corresponding weekday.
const prompt = require('prompt-sync')();

let day = parseInt(prompt("Enter day number (1-7): "));

if (day === 1) console.log("Monday");
else if (day === 2) console.log("Tuesday");
else if (day === 3) console.log("Wednesday");
else if (day === 4) console.log("Thursday");
else if (day === 5) console.log("Friday");
else if (day === 6) console.log("Saturday");
else if (day === 7) console.log("Sunday");
else console.log("Invalid day number");
