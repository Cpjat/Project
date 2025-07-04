// Function to sum all even numbers in an array
function sumEven(arr) {
    return arr.reduce((sum, num) => {
        if (num % 2 === 0) {
            return sum + num;
        }
        return sum;
    }, 0);
}

const input = [1, 2, 3, 4, 5, 6];
const result = sumEven(input);
console.log("Sum of Even Numbers:", result); 
//output-Sum of Even Numbers: 12