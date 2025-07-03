const prompt = require('prompt-sync')();

const storedUser = "admin";
const storedPass = "123@abc";

let user = prompt("Enter username: ");
let pass = prompt("Enter password: ");

if (user === storedUser && pass === storedPass) {
    console.log("Login successful!");
} else {
    console.log("Login failed. Incorrect credentials.");
}
