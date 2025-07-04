// Function to check if a string is a palindrome
function isPalindrome(str) {
    const cleaned = str.toLowerCase();
    return cleaned === cleaned.split('').reverse().join('');
}

const input = "Madam";
const result = isPalindrome(input);
console.log("Is Palindrome:", result); 
//output-Is Palindrome: true