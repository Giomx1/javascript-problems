const people = [//my array of objects
  {
    firstName: "Bill",
    lastName:"Wakes",
    age: 20,
  },
  {
    firstName: "Jon",
    lastName: "Frank",
    age: 21,
  },
  {
    firstName: "Gio",
    lastName: "Moreno",
    age: 22,
  },
  ]
function displayNames(array) {//my function with variable and parameter
    array.forEach(function(a) {//callback function with parameter of a
        console.log(a.firstName + ' ' + a.lastName)//logging first and last names 
    });
}

displayNames(people);//invoking my function