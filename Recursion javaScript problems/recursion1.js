function factorial(num) { //function that takes in a number
  if (num === 0){//if the entered factorial number does not pass this condtion it will move to the next line of code
    return 1;
  }
  
  return num * factorial(num - 1);    
}

console.log(factorial(4));//multiplies 4 times the last output of factorial 3 which was 6 giving us 24.
//This is what is going through my head when solving this 4 * 3 * 2 * 1 = 24