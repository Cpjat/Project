// Function to capitalize the first letter of each word in a sentence
function capitalizeWords(str) {
    return str.split(' ')
              .map(word => word.charAt(0).toUpperCase() + word.slice(1))
              .join(' ');
}

const input = "hello world";
const result = capitalizeWords(input);
console.log("Capitalized:", result); 
//output-Capitalized: Hello World