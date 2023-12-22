"use strict";
// Create a function that takes an array of numbers as parameter. Use a for loop to calculate and return the sum of all
// the numbers in the array.
let arr = [0, 1, 2, 3, 4, 5];
const arrSum = (arr) => {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
};
let sum = arrSum(arr);
console.log(sum);
