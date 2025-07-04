//Find all combinations of (a, b) such that a + b = 5 and 1 ≤ a, b ≤ 4
console.log("Combinations of (a, b) such that a + b = 5 (1 ≤ a, b ≤ 4):");
for (let a = 1; a <= 4; a++) {
    for (let b = 1; b <= 4; b++) {
        if (a + b === 5) {
            console.log(`(${a}, ${b})`);
        }
    }
}
/*output-Combinations of (a, b) such that a + b = 5 (1 ≤ a, b ≤ 4):
(1, 4)
(2, 3)
(3, 2)
(4, 1)*/