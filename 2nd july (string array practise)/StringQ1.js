// Function to reverse a string
function reverseString(str) {
    return str.split('').reverse().join('');
}

const input = "hello";
const result = reverseString(input);
console.log("Reversed String:", result); 
