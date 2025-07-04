// Function to count the number of vowels in a string
function countVowels(str) {
    const vowels = 'aeiouAEIOU';
    let count = 0;
    for (let char of str) {
        if (vowels.includes(char)) {
            count++;
        }
    }
    return count;
}

const input = "JavaScript";
const result = countVowels(input);
console.log("Vowel Count:", result);
