// 1. Use comparison operators to compare two numbers and store the results in boolean variables
let x = 8;
let y = 12;

let isXGreaterThanY = x > y;
let isXLessThanOrEqualToY = x <= y;
let isEqualToY = x === y;
let isNotEqualToY = x !== y;

console.log("isXGreaterThanY:", isXGreaterThanY);
console.log("isXLessThanOrEqualToY:", isXLessThanOrEqualToY);
console.log("isEqualToY:", isEqualToY);
console.log("isNotEqualToY:", isNotEqualToY);

// 2. Declare two variables x and y with the values 8 and 12 respectively
x = 8;
y = 12;

console.log("x is greater than y:", x > y);
console.log("x is less than or equal to y:", x <= y);
console.log("x is equal to y:", x === y);
console.log("x is not equal to y:", x !== y);

// 3. Declare variables a and b with values true and false, determine and print the result of the following logical operations
let a = true;
let b = false;

console.log("a AND b:", a && b);
console.log("a OR b:", a || b);
console.log("NOT a:", !a);

// 4. Declare variable p and assign it a value of 10. Use the following assignment operators to modify the value of p with any number and print the result each time
let p = 10;

p += 5; // p = p + 5
console.log("p after += 5:", p);

p -= 3; // p = p - 3
console.log("p after -= 3:", p);

p *= 2; // p = p * 2
console.log("p after *= 2:", p);

p /= 2; // p = p / 2
console.log("p after /= 2:", p);

p %= 3; // p = p % 3
console.log("p after %= 3:", p);