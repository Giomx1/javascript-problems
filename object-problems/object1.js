/*
Create a sample object, then write a JavaScript function that deletes the property of an object passed to it.

Your JavaScript function should take in two parameters, the object and the key/property you want to delete.
*/

const car = {// My object with properties and values
  engine: "v8",
  cylinders: 8,
  mpg: 23,
  model: "Ford Mustang",
}
function deleteProperty (object,property) {// my function with variable of deleteKey with two parameters
  delete object[property]// Here I use the delete property to delete a property out of my object
  return object //Even though I delete the property I still want to return the rest of my object
}
console.log(deleteProperty(car,'mpg'));// Here I log my result and remove the "mpg" property