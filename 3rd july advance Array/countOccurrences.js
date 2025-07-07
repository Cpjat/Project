//How do you count the number of occurrences of each element in an array?
function countOccurrences(arr) {
    const count = {};
    for (let i = 0; i < arr.length; i++) {
        let num = arr[i];
        if (count[num]) {
            count[num] += 1;
        } else {
            count[num] = 1;
        }
    }

  return count;
}
const input = [1, 2, 2, 3, 1, 1];
console.log(countOccurrences(input)); // output-{1: 3, 2: 2, 3: 1}
