
/*
Write a JavaScript function to sort the following array of objects by title value.

Hint: Read about the JavaScript sort method.
*/

const books = [ // my array of objects

   { author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254},

   { author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264},

   { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', libraryID: 3245}

   ];
 function sortBooks(a, b) {//setting up function with my two comparison parameters
  if (a.title < b.title) {////if a is less than b, put a on the left side, which shows increasing order 
    return -1;// this makes the value go from greatest to least
  }
  if (a.title > b.title) {
    return 1;
  }
  if( a.title === b.title)
  return 0;
}
console.log(books.sort(sortBooks));//invoking my function