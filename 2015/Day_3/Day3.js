const a = [5, 2, 9, 1, 7];

// Ascending order
a.sort((b,c) => b - c);
console.log(a);

// Descending order
a.sort((b, c) => c - b);
console.log(a);