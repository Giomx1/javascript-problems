/*
Write a JavaScript function that takes in two parameters, 
an array and a number (n), and return the first n elements of that array.

Example: If I pass in an array and the number 2, 
your function returns the first 2 elements in that arrays.
*/
const gameSystems = ["Xbox", "PS4", "Nintendo", "PC", "SteamDeck"]; // array of video game consoles stored in veriable gameSystems.

function getIt(array,num){ // here my variable getIt is the function which has two parameters array and num
  if (num === null)//the if statements remove potential console errors
 return "must be a positive value";// number cannot be a negative one. From my understanding null means the absence of value.
  if (num < 0) // number must be greate than zero
    return "number must be 1 or greater";
  if (num > array.length) // number cannot exceed our array length of 5
    return "number must not exceed " + array.length
    console.log(array.slice(0, num));//logs a copy of my array. Since the index start is 0 and my end is my parameter of num it will return my entire array.`
}
 console.log(getIt(gameSystems,3)); // Here I invoke my function and return my first two elememts of the gameSystems array. 
