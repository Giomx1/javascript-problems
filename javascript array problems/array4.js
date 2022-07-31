const myNumbers = [1,1,1,2,2,2,2,2,33];//array of numbers with duplicates

function removeDuplicates(array) {//function with variable removeDuplicates with parameter of array
  let uniqueArray = [];// only storing unique values here
  
  for (let i = 0; i < array.length; i++) {//looping through array
    console.log(array[i]); //prints all the numbers in the array
    if(!uniqueArray.includes(array[i])) {
      uniqueArray.push(array[i]);
    }
  }
  return uniqueArray;//I return this variable because I want the value of this to be returned when the function is called.
}
console.log(removeDuplicates(myNumbers));// printing my results of removed duplicates
/*
It’s “unique” if it’s not included in the new array already.
 if(!uniqueArray.includes(array[i])) {//if statement 
      uniqueArray.push(array[i]);

If the item in the loop is already included in the array, 

then we do not want to add it again, because then it would have duplicates, and wouldn’t be unique.

Instead of thinking in terms of “unique” 

just think that we only want to add one of each item to our array. If an item is already in there, we don’t want to add/push it in there again
*/