//solution that worked
const cars = ["saab", "chevy", "honda"];// Here I define an array of cars

function joinCars(arr) {// Here I define a function with a variable of joinCars with a paramater of arr
  return arr.join(", ");// Here I want to return my array of cars into a string with a space after the comma using the join method.
}
console.log(joinCars(cars));// Here log my function joinCars with its argument of my original array which prints to a string

//solution that failed
const cars = ["Saab", "Nissan", "Ford", "Fiat"];//my array of cars
 
function joinCars(arr) {//my function with variable of joinCars and parameter of arr
  arr.join(", ");//using the join method to change my array into a string.
}
 
joinCars(cars); //invoking my function with an argument of cars, which was my array.
console.log(cars);//printing cars to console. Thinking it would print a string, but no.

/*
I thought this would work because when I used something like the pop method I got the
result I expected but not with the join method. 
*/