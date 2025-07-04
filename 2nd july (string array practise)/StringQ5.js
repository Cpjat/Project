// Function to count frequency of each character in a string
function charFrequency(str) {
    const freq = {};
    for (let char of str) {
        freq[char] = (freq[char] || 0) + 1;
    }
    return freq;
}

const input = "aabbbc";
const result = charFrequency(input);
console.log("Character Frequency:", result);
