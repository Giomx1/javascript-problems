
const gameSystems = ["Xbox", "PS4", "Nintendo", "PC", "SteamDeck"]; // array of video game consoles stored in veriable gameSystems.

function getIt(array,num){ // here my variable getIt is the function which has two parameters array and num
  if (num === null)//the if statements remove potential console errors
 return "must be a positive value";// number cannot be a negative one
  if (num < 0) // number must be greate than zero
    return "number must be 1 or greater";
  if (num > array.length) // number cannot exceed our array length of 5
    return "number must not exceed " + array.length
    return array.slice(0, num)//returns a copy of my array where index 0 is the start and num is the end
}
 console.log(getIt(gameSystems,3); // Here I invoke my function and return my first two elememts of the gameSystems array. 
