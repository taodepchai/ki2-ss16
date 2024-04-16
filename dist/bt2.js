"use strict";
function swapElements(arr, index1, index2) {
    let newArray = [...arr];
    let temp = newArray[index1];
    newArray[index1] = newArray[index2];
    newArray[index2] = temp;
    return newArray;
}
let array = [1, "2", 3, false, true];
let swappedArray = swapElements(array, 1, 3);
console.log(swappedArray);
