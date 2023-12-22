// Create a function that takes an array, an index, and a value as parameters. Inside the function, use the splice method
// to insert the value at the specified index in the array. Return the modified array.

const spliceArray = <Type>(array: Type[], index: number, value: Type): Type[] => {
    array.splice(index, 0, value)
    return array
}

let arr = [1, 2, 3]
let modArr = spliceArray(arr, 1, 4)

console.log(modArr);