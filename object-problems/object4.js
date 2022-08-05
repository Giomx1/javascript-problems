const gameSystem = {//my object and keys
  ram: 12,
  teraflops: 4,
  raytracing: true,
  discdrive: false,
}
function checkObject(object,key) {//function with checkObject variable and two parameters
  return object.hasOwnProperty(key);// I want to return a value of a boolean to check if the object contains the key. This method does that with my parameter of key.
}
console.log(checkObject(gameSystem,"ram"));// invoke my function which logs "true"
//NTS - remember quotes around key