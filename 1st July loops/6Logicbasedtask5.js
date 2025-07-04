//Check if a number is a palindrome (e.g., 121, 1331) using only number operations and loops.
let original = 1331;
let copy = original;
let reversed = 0;

while (copy > 0) {
    let digit = copy % 10;
    reversed = reversed * 10 + digit;
    copy = Math.floor(copy / 10);
}

if (original === reversed) {
    console.log(`${original} is a palindrome`);
} else {
    console.log(`${original} is not a palindrome`);
}
/*output-1331 is a palindrome*/