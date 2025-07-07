//How do you sort an array of objects by multiple properties?
const people = [
    { name: "John", age: 30 },
    { name: "Alice", age: 25 },
    { name: "John", age: 22 }
];
people.sort((a, b) => {
    if (a.name < b.name) return -1;
    if (a.name > b.name) return 1;
    return a.age - b.age; // if names are equal
});
console.log(people);
/* output
[
  { name: "Alice", age: 25 },
  { name: "John", age: 22 },
  { name: "John", age: 30 }
]
*/