// Implement a program that takes a list of temperatures in Celsius as input from the user. Convert each temperature
// to Fahrenheit using the formula F = (C * 9/5) + 32 and store the converted temperatures in an array. Use a for loop 
// to perform the conversion for each temperature.

const inputListCTemps = [-10, 0, 32.6, 55, 100]

const fahrArr = (arr: number[]) => {

    let tempInFahrArr = []
    for (let i = 0; i < arr.length; i ++) {
        let tempInFahr = (arr[i] * 9/5) + 32
        tempInFahrArr.push(tempInFahr)
    }
    return tempInFahrArr

}

const outputFahrTemps = fahrArr(inputListCTemps)
console.log(outputFahrTemps);
