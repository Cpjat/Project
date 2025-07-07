//How would you find the second largest number in an array like [10, 5, 8, 1, 9] without sorting?
function findSecondLargest(arr) {
    let max = -Infinity;
    let secondMax = -Infinity;
    for (let i = 0; i < arr.length; i++) {
        let num = arr[i];
        if (num > max) {
            secondMax = max;
            max = num;
        } else if (num > secondMax && num < max) {
            secondMax = num;
        }
    }
return secondMax;
}
const numbers = [10, 5, 8, 1, 9];
console.log(findSecondLargest(numbers)); // Output: 9
