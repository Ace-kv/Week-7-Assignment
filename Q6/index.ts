// Write a program having an array of numbers if the number is negative it should remove the negative number from the array.

let arr = [0, -1, 2, -3, 4, -5]

const checkForNegNum = (arr: number[]) => {

    arr.forEach((num) => {
        if (num < 0) {
            arr.splice(arr.indexOf(num), 1)
        }
    })
    return console.log(arr);
    
}

checkForNegNum(arr)