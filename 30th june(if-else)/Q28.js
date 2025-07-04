//Take a password as input and check if it is strong (length ≥8, includes digit and special character).
const prompt = require('prompt-sync')();

let password = prompt("Enter password: ");

let hasDigit = /[0-9]/.test(password);
let hasSpecial = /[!@#$%^&*(),.?":{}|<>]/.test(password);

if (password.length >= 8 && hasDigit && hasSpecial) {
    console.log("Strong password");
} else {
    console.log("Weak password");
}
