// PART 1: printing with prompt
// Prompt the user for a number and cast it to a number
let num = prompt("Enter a number:");
num = parseInt(num);
// Prompt the user for another number that is bigger than the first number and cast it to a number

let num2 = prompt("Enter a number larger than the previous number you entered:");

num2 = parseInt(num2);
// Write a JavaScript program that uses a for loop to print all numbers from the first number to the second number

for(let x = num; x <= num2; x++){
  console.log(x)
}





// PART 2: Averaging an array
// Create an array of numbers 
let numbers = [1,2,3,4,5];
let sum = 0
// Write a for loop that calculates the sum of the elements 
for(let y = 0; y < numbers.length; y++){
  let index = numbers[y]
  sum = index + sum
}
console.log("the sum of all the elements is:", sum)




// Using the sum, calculate the average of all the elements (sum divided by the length of the array)
let average = sum/ numbers.length;
console.log("The average of sum is", average)
