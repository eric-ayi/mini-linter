// Today's forecast in Kelvin
const kelvin = 293;
// Converting kelvin to celsius
const celsius = kelvin - 273;
// Converting celsius to fahrenheit
var fahrenheit = celsius * (9/5) + 32;
// Rounding the value of fahrenheit down into a whole number
fahrenheit = Math.floor(fahrenheit);
//Displaying the result on a console
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit`); 

