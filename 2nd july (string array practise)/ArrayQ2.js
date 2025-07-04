// Function to flatten a nested array (1 level deep)
function flattenArray(arr) {
    return arr.flat();
}

const input = [[1, 2], [3, 4], [5]];
const result = flattenArray(input);
console.log("Flattened Array:", result);
