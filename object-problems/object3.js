/*
Create an object with three items in it, then write a JavaScript function that accepts an object and tells you the length (tells you how many items are in it) of the object
*/
const gameSystem = {//my object
  ram: 12,
  teraflops: 4,
  raytracing: true,
}
function lengthOfObject (object) {// my function with one parameter
  return Object.keys(object).length// here I return the value I want which is using the keys method on my object which returns an array of my items in my object 
                                    //and the length method tells me how many items are in the array.
}
console.log(lengthOfObject(gameSystem));// Here I invoke my function which gives me a number