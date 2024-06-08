// Print numbers from 1 to 10:
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// Calculate the sum of all numbers from 1 to 100 and print the result:
let sum = 0;

for (let i = 1; i <= 100; i++) {
    sum += i;
}

console.log(sum);

// Prompt the user to enter a number greater than 10 and keep asking until they enter a valid number:
let number = prompt("Enter a number greater than 10:");

while (number <= 10) {
    number = prompt("Invalid number. Please enter a number greater than 10:");
}

console.log("Thank you! You entered: " + number);

// Create a simple guessing game where the user must guess a number between 1 and 10. The game continues until the user guesses the correct number:
let randomNumber = Math.floor(Math.random() * 10) + 1;

while (true) {
    let guess = prompt("Guess a number between 1 and 10:");

    if (guess == randomNumber) {
        console.log("Congratulations! You guessed the correct number: " + guess);
        break;
    } else if (guess < randomNumber) {
        console.log("Too low. Try again.");
    } else {
        console.log("Too high. Try again.");
    }
}