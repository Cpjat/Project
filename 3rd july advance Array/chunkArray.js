//How would you chunk an array into groups of N elements?
function chunkArray(arr, size) {
    const result = [];
    for (let i = 0; i < arr.length; i += size) {
        const chunk = arr.slice(i, i + size);
        result.push(chunk);
    }
    return result;
}
console.log(chunkArray([1, 2, 3, 4, 5, 6], 2)); // output- [[1, 2], [3, 4], [5, 6]]
