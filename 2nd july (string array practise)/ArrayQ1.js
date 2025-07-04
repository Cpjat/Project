// Function to remove duplicates from an array
function removeDuplicates(arr) {
    return [...new Set(arr)];
}

const input = [1, 2, 2, 3, 4, 4];
const result = removeDuplicates(input);
console.log("Unique Elements:", result);
