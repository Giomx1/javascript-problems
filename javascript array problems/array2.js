/*
Define a function that takes in an array of elements 
and joins them together into a string separated by a comma with a space after the comma.
*/
const cars = ["saab", "chevy", "honda"];// Here I define an array of cars

function joinCars(arr) {// Here I define a function with a variable of joinCars with a paramater of arr
  return arr.join(", ");// Here I want to return my array of cars into a string with a space after the comma using the join method.
}
console.log(joinCars(cars));// Here log my function joinCars with its argument of my original array which prints to a string