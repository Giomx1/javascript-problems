//PROBLEM 1
//Write a JavaScript function that accepts a 
//string as a parameter and find the longest word within the string

/* 
1.I will write a function with one parameter
2.I will store the parameter into another variable to make into an array and use the split method
Within the split method since we want a whole word we will use " " instead of ""
3.I will make a variable called longestWord and store an empty string in it 
so our loop can compare it with something. Our parameter, string which is contained in the arrayOfWords variable
will be looped
4.For loop then if statement comparing our loop with the longesWord variable.
5.I want the longestWord variable to equal the longest word in the loop.
6.I want to return the longestWord
7. we can console.log our answer
*/
function findTheLongestWord(string){
  let longestWord = "";
  const arrayOfWords = string.split(" ");
  
  for(let i = 0; i < arrayOfWords.length; i++) {
    if (arrayOfWords[i].length > longestWord.length) {
      longestWord = arrayOfWords[i];
    }
  }
  return longestWord;
  
}
console.log(findTheLongestWord("What is the longest word?"));

//PROBLEM 2
//Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string.

//Hint: use the "spilt", the Array#includes method and, a "for" loop or "forEach" loop
/*
1. Define a function with string as the parameter
2. Vowels must be told to codebase. We store the vowels in an array and put it in a variable called arrayOfVowels
3. Split the string paramater with "" not " ". We want to test every character not just word.
And we want to store that string into an arrayOfLetters variable. Or as I like to think a container.
4. Since we are counting how many vowels we have we must store the number in a variable called vowelCount and use 0 as the starting point.
5. loop through our string parameter that is now stored in the arrayOfLetters variable.
6. If statement to see if any letter in the arrayOfLettersVariable is a vowel.We can use #includes method to check.
*NOTE* On line 56 I noticed since I did not loop through arrayOfVowels, bracket notation was not needed. When I
removed the brack notation the function finally worked.
7. If it is a vowel we want to increment our vowel count.
8. When the loop is done running we want the number of vowels so we must return vowelCount.
9. Now we log to the console.
*/

function howManyVowels(string) {
  const arrayOfVowels = ["a","e","i","o","u"];
  let vowelCount = 0;
  const arrayOfLetters = string.split("");
  
  for(let i = 0; i < arrayOfLetters.length; i++) {
    if (arrayOfVowels.includes(arrayOfLetters[i])) {
      vowelCount ++;
    }
  }
  return vowelCount;
}
console.log(howManyVowels("How many Vowels?"));

//PROBLEM 3 
/*
Write a JavaScript function that accepts two arguments, a string and a letter
the function will count the number of occurrences of the specified letter within the string
1. Make a function with two parameters.
2. Store the number of times letter appears in a variable called letterCount
3. store the string into another variable called arrayOfLetters
4. Loop throught the arrayOfLetters.
5. if statement use charAt method to return every character in the string and if it equals the letter then we will increment the letterCount by 1
6. I want the letter count so I will return letterCount.
7. Log solution to console.
*/

function howManyTimes(string, letter) {
  let letterCount = 0;
  const arrayOfLetters = string.toLowerCase();// I have a capital letter in the string sentence argument.
  
  for (let i = 0; i < arrayOfLetters.length; i++) {
    if(arrayOfLetters.charAt(i) == letter) {
      letterCount++;
    }
  }
  return letterCount;
}
console.log(howManyTimes("A letter", "t"));

/*
I also noticed this solution works.
This time I did not use the charAt method. I only looped through each letter in the 
arrayOfLetters array.
*/
function howManyTimes(string, letter) {
  let letterCount = 0;
  const arrayOfLetters = string.toLowerCase();
  
  for (let i = 0; i < arrayOfLetters.length; i++) {
    if(arrayOfLetters[i] == letter) {
      letterCount++;
    }
  }
  return letterCount;
}
console.log(howManyTimes("A letter", "a"));

//PROBLEM 4
/*
Write a JavaScript function that iterates the integers from 1 to 100. 
But for multiples of three print "Fizz" instead of the number and for the multiples of five print "Buzz". 
For numbers that are multiples of both three and five print "FizzBuzz".
Feel free to use console log to print the values to the console
steps
1. make function with no parameters.
2. Word Variable with empty string.
3. for loop 1-100.
4. Three if statements. that prints the word to the console.
*NOTE* I could not figure out a solution for this one. It was for sure tougher than the other ones for me.
*/
function wordsAndNumbers() {
  for (let i = 0; i <= 100; i++) {
    if (i % 3) {
      console.log("buzz");
    } if (i % 5) {
      console.log("fizz");
    } if (i % 3,5) {
      console.log("FizzBuzz");
    }
  }
}
console.log(wordsAndNumbers);

//Your solution
/*
with your solution I see you made a word variable and stored an empty string to it.
I can see why you invoked fizzBuzz and logged the loop and word variable to the console.
My only misunderstanding is the if statements. We went over why we use the remainder property.
But I did not get why we would put === 0. for the condition. I can see why we use word += "Fizz". 
instead of adding a number we add a word.   
*/
function fizzBuzz(){
  for(let i = 1; i <= 100; i++){
    let word = ""; //to reduce conditionals, we can construct the word & check two things instead of three.

    if (i % 3 ===0){                           
      word += "Fizz";
    }
    if (i % 5 ===0){                    
      word += "Buzz";
    }

    console.log(i, word);  
  }
}

fizzBuzz();
