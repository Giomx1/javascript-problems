array3.js
/*
Define a function that takes in an array of numbers/integers and returns the sorted version of that array, 
greatest to least. (Note: do NOT use the "reverse" method.)

Example array: const myArray = [-3,8,7,6,5,-4,3,2,1];

Hint: To solve this, look up the JavaScript array sort method, and pay close attention to how it uses it's return values of 1, 0, -1 to sort items.
*/
const numbers = [5, -1 , 3, -9, 6];//array of numbers
numbers.sort//sorted my numbers first in ascending order
 ((a,b) => b-a);// my two parameters of a and b. Which are used for comparisons.
 //I understand a-b would be ascending order, so my thought was that b-a would put it in descending order
console.log(numbers);//printing my greatest to least array
