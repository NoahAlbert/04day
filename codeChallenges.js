// todo #1: Print the odd numbers less than 100
for (i = 1; i <= 100; i+=2){
    console.log(i)
}

// todo #3: Create a function that will convert from Celsius to Fahrenheit
function convertCelsiusToFahrenheit (c){
    return (c*1.8)+32
}
console.log(convertCelsiusToFahrenheit(47))

// todo #3: Calculate the sum of numbers in an array of numbers
const numbers = [1, 17, 25, 13, 4, 6]

function sumArr(arr) {
  let result = 0
  for (i = 0; i < arr.length; i++) {
    result += arr[i]
  }
  return result
}

console.log(sumArr(numbers))

//todo #4: Calculate the average of the numbers in an array of numbers
function avgArr(arr){
    return sumArr(arr) / arr.length
}

console.log(avgArr(numbers))