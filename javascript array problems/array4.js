const myNumbers = [1,1,1,2,2,2,2,2,33];//array of numbers with duplicates

function removeDuplicates(array) {//function with variable removeDuplicates with parameter of array
  let uniqueArray = [];// 
  
  for (let i = 0; i < array.length; i++) {//looping through array
    if(!uniqueArray.includes(array[i])) {//if statement 
      uniqueArray.push(array[i]);
    }
  }
  return uniqueArray;//I return this variable because I want the value of this to be returned when the function is called.
}
console.log(removeDuplicates(myNumbers));// printing my results of removed duplicates