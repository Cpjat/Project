//How would you flatten a deeply nested array (e.g., [1, [2, [3, [4]], 5]]) to a single array using recursion or a built-in method?
//recursion method
function flattenArray(arr) {
    let result = [];

    for (let element of arr) {
        if (Array.isArray(element)) {
        result = result.concat(flattenArray(element));
    } else {
        result.push(element);
    }
}
    return result;
}
console.log(flattenArray([1, [2, [3, [4]], 5]])); // output: [1, 2, 3, 4, 5]

//built in method
const nested = [1, [2, [3, [4]], 5]];
const flat = nested.flat(Infinity);
console.log(flat); //output: [1, 2, 3, 4, 5]
