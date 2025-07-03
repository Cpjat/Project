const prompt = require('prompt-sync')();

let hours = parseFloat(prompt("Enter hours worked: "));
if (hours > 40) {
    let overtime = (hours - 40) * 12;
    console.log("Overtime pay: Rs.", overtime);
} else {
    console.log("No overtime");
}
