// Create a function that takes a positive integer as parameter and uses a for loop to calculate and return the factorial of 
// that number.

const factorialCalc = (positiveInt: number) => {
    if (positiveInt < 0) {
        return console.log("Enter a positive integer");
    }

    if (positiveInt === 0) {
        return console.log("Factorial of 0 is:", 1);
    }

    let factorial = positiveInt
    for (let i = positiveInt - 1; i > 0; i--) {
        factorial *= i
    }
    return console.log(`Factorial of ${positiveInt} is:`, factorial);
}

factorialCalc(10)