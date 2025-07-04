//Input marks in 5 subjects, calculate the average and print grade using if-else.

const prompt = require('prompt-sync')();

let total = 0;
for (let i = 1; i <= 5; i++) {
    let marks = parseFloat(prompt(`Enter marks for subject ${i}: `));
    total += marks;
}
let average = total / 5;

if (average >= 90) console.log("Grade: A");
else if (average >= 75) console.log("Grade: B");
else if (average >= 60) console.log("Grade: C");
else if (average >= 40) console.log("Grade: D");
else console.log("Grade: F");
