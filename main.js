StringArray = ['aslkfjlah','woieu sa','asdjflkj2lksafd','asd','q21','aslkdf','sjalfj','aksjdf','alksjdf','11','',' ','slajdfl','alsdjf1','lasjf '];


/**
 * This function will take a string array and create a string by combining all the items from
 * the string array.
 * Use forEach loop
 *
 * @param {String Array, pass StringArray from line 1} strArr
 */

function combineString( strArr ) {
    // implement the code here.
    let combineString = '';
    strArr.forEach(function(item){
      combineString += item;
    })
    return combineString;
}

let newArray = combineString(StringArray)
// console.log(newArray)

/**
 * This function will take a string array and return a new array which will contain the lenght of
 * each item in original strArr array
 * Use Map function
 *
 * @param {String Array, pass StringArray from line 1} strArr
 */
function getLengthArray( strArr ) {
    // implement the code here.


    //  const lengthArray = strArr.map((item) => {
    //     return  item.length;
    // })
    const lenArr = [];
    for(let i =0; i< strArr.length; i++){
      lenArr[i] = strArr[i].length;
    }
    return lenArr

    // return lengthArray;

}

// let lengthArray = getLengthArray(StringArray)
// console.log(lengthArray)

/**
 * This function will take a string array and return a new array which will contain items from original array
 * whose length is less than 4 characters
 * Use Filter function
 *
 * @param {String Array, pass StringArray from line 1} strArr
 */
function getSmallStringArray( strArr ) {
    // implement the code here.
    getLengthArray();
    const smallString =strArr.filter((item) => {
      return item.length < 4
    })
    return smallString;

}
// let smallString = getSmallStringArray(StringArray)
// console.log(smallString)