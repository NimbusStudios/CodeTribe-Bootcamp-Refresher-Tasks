
// Print numbers from 1 to 10
for (let i = 1; i <= 10; i++) {
    console.log(i);
}
// Print all even numbers between 1 and 20
for (let i = 2; i <= 20; i += 2) {
    console.log(i);
}
//Calculate the sum of all numbers from 1 to 100 and print the result

let sum = 0;
for (let i = 1; i <= 100; i++) {
    sum += i;
}
// Print each element of the array
console.log(sum);
const numbers = [1, 2, 3, 4, 5];

for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}

// Find and print the largest number in the array
const numbers = [3, 7, 2, 5, 10, 6];
let largestNumber = numbers[0];

for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > largestNumber) {
        largestNumber = numbers[i];
    }
}

console.log(largestNumber);