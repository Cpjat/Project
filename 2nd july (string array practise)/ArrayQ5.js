// Function to group array elements by their type
function groupByType(arr) {
    const grouped = {};
    for (let item of arr) {
        const type = typeof item;
        if (!grouped[type]) {
            grouped[type] = [];
        }
        grouped[type].push(item);
    }
    return grouped;
}

const input = [1, 'a', true, 2, 'b'];
const result = groupByType(input);
console.log("Grouped by Type:", result);
