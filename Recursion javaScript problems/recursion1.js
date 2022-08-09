function factorial(num) { //function that takes in a number
  if (num === 0){//if a the number 0 is entered 1 will be displayed in the console
    return 1;
  }
  
  return num * factorial(num - 1);    
}

console.log(factorial(4));//multiplies 4 times the last output which was 6 giving us 24.