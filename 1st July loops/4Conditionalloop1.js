// Print numbers from 1 to 20, skip multiples of 4 using continue
console.log("Numbers from 1 to 20 (skip multiples of 4):");
for (let i = 1; i <= 20; i++) {
    if (i % 4 === 0) {
        continue; 
    }
    console.log(i);
}
/*output-Numbers from 1 to 20 (skip multiples of 4):
1
2
3
5
6
7
9
10
11
13
14
15
17
18
19*/