// 1. Function expression to calculate the square of a number
const square = function(number) {
  return number * number;
};

// 2. Arrow function to add two numbers
const add = (a, b) => a + b;

// 3. Arrow function to check if a number is even
const isEven = num => num % 2 === 0;

// 4. Arrow function to return the sum of an array of numbers using .reduce()
const sumArray = (arr) => arr.reduce((acc, current) => acc + current, 0);

// 5. Function expression to find the largest number in an array
const findLargest = function(arr) {
  return Math.max(...arr);
};

// 6. Arrow function used in the .map() iterator to double each number in an array
const doubleNumbers = nums => nums.map(num => num * 2);

// 7. Function expression to convert a string to uppercase
const toUpperCase = function(str) {
  return str.toUpperCase();
};

// Example usage of the functions

// Square of a number
console.log(square(4)); // 16

// Add two numbers
console.log(add(3, 5)); // 8

// Check if a number is even
console.log(isEven(6)); // true
console.log(isEven(7)); // false

// Sum of an array
console.log(sumArray([1, 2, 3, 4])); // 10

// Find largest number in an array
console.log(findLargest([10, 20, 30, 40])); // 40

// Double the numbers in an array
console.log(doubleNumbers([1, 2, 3])); // [2, 4, 6]

// Convert string to uppercase
console.log(toUpperCase("hello")); // "HELLO"
