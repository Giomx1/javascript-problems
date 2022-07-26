function removeDuplicates(arr) {//function with parameter of arr
    let uniqueArray = [];// new variable equal to empty array

    for(let i = 0; i < arr.length; i++) {// looping through my array
        if(!uniqueArray.includes(arr[i])) {// if statement: if variable uniqueArray is not included at arr index i
                                          //then push 


            uniqueArray.push(arr[i]);
        };
    };
    return uniqueValuesArray;
};


const myNumbers = [1, 2, 2, 4, 5, 4, 7, 8, 7, 3, 6]
console.log(removeDuplicates(myNumbers));