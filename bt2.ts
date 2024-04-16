function swapElements<T>(arr: T[], index1: number, index2: number): T[] {

    let newArray = [...arr];
    let temp = newArray[index1];
    newArray[index1] = newArray[index2];
    newArray[index2] = temp;

    return newArray;
}

let array = [1, "2", 3, false, true];
let swappedArray = swapElements(array, 1, 3);
console.log(swappedArray); 
