function sumOfNumbers (arr) {//my function taking in an array
  if (arr.length < 1) return 0;//the base case, function will stop when less than 1. Returning 0 will not impact the sum
  
  return arr.pop() + sumOfNumbers(arr);//pop method returns 3 but also impacts the original array
  
}
console.log(sumOfNumbers([1,2,3]));//calling my function with an array