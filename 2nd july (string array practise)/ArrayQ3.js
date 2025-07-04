// Function to find max and min from an array
function findMaxMin(arr) {
    return {
        max: Math.max(...arr),
        min: Math.min(...arr)
    };
}

const input = [4, 1, 9, -2];
const result = findMaxMin(input);
console.log("Max and Min:", result); 
