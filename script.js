// temperature in kelvin
const kelvin = 293;
// const kelvin = 0;

// temperature from kelvin to celcius
const celcius = kelvin - 273;

// temperature in fahrenheit calculation
let fahrenheit = celcius * (9 / 5) + 32;

// temperature in fahrenheit rounded
fahrenheit = Math.floor(fahrenheit);

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);
