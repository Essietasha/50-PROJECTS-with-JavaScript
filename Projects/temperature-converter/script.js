//Convert Celsius to Fahrenheit:     °F = (°C * 9/5) + 32;
//Convert Fahrenheit to Celsius:   °C = (°F - 32) * 5/9.
//Celsius to Kelvin:  C + 273.15.
//Kelvin to Celsius:  K - 273.15.
//Fahrenheit to Kelvin: (F − 32) × 5/9 + 273.15
//Kelvin to Fahrenheit: F = (K - 273.15) * 9/5 + 32


const celsius = document.getElementById('celsius');
const fahrenheit = document.getElementById('fahrenheit');
const kelvin = document.getElementById('kelvin');

function updateTemperature(event) {
    const currentValue = +event.target.value;           // +event.target.value; a concise way to convert the value from a string to a number in JavaScript. 
    
    switch(event.target.name){
        case "celsius":
            fahrenheit.value = ((currentValue) * 9/5 + 32).toFixed(2);
            kelvin.value = ((currentValue) + 273.15).toFixed(2);
            break; 
        case "fahrenheit":
            celsius.value = ((currentValue - 32) * 5/9 ).toFixed(2);
            kelvin.value = ((currentValue - 32) * 5/9 + 273).toFixed(2);
            break;
        case "kelvin":
            celsius.value = (currentValue - 273.15).toFixed(2);
            fahrenheit.value = ((currentValue - 273.15) * 9/5 + 32).toFixed(2);
            break;
            default:
                break;
    }
}



//METHOD TWO
// let celsius;
// let fahrenheit;
// let kelvin;

// celsius = document.getElementById('celsius');
// fahrenheit = document.getElementById('fahrenheit');
// kelvin = document.getElementById('kelvin');

// function convertFromCelsius () {
    
//     const convCelsius = parseFloat(celsius.value);
//     if (!isNaN(convCelsius)){
//         fahrenheit.value = ((convCelsius) * 9/5 + 32).toFixed(2);
//         kelvin.value = ((convCelsius) + 273.15).toFixed(2);
//     }
//     else{
//         alert('Please input a valid number');
//     }
// }

// function convertFromFahrenheit (){
//     const convFahrenheit = parseFloat(fahrenheit.value);
//     if (!isNaN(convFahrenheit)){
//         celsius.value = ((convFahrenheit - 32) * 5/9 ).toFixed(2);
        // kelvin.value = ((convFahrenheit - 32) * 5/9 + 273).toFixed(2);
//     }
//     else{
//         alert('Please input a valid number');
//     }
// }

// function convertFromKelvin (){
//     const convKelvin = parseFloat(kelvin.value);
//     if (!isNaN(convKelvin)){
//         celsius.value = (convKelvin - 273.15).toFixed(2);
//         fahrenheit.value = ((convKelvin - 273.15) * 9/5 + 32).toFixed(2);
//     }
//     else{
//         alert('Please input a valid number');
//     }
// }


//METHOD 3: 
//The event object contains information about the event that was triggered and provides various properties and methods that can be used to interact with and respond to the event.
// const celsius = document.getElementById('celsius');
// const fahrenheit = document.getElementById('fahrenheit');
// const kelvin = document.getElementById('kelvin');

// function updateTemperature(event) {
//     const inputElement = event.target;
//     const value = +event.target.value;           // +event.target.value; a concise way to convert the value from a string to a number in JavaScript. 
    
//     if (isNaN(value)) {
//         return;
//     }

//     if (inputElement.id === 'celsius') {
//         document.getElementById('fahrenheit').value = (value * 9/5 + 32).toFixed(2);
//         document.getElementById('kelvin').value = (value + 273.15).toFixed(2);
//     } else if (inputElement.id === 'fahrenheit') {
//         document.getElementById('celsius').value = ((value - 32) * 5/9).toFixed(2);
//         document.getElementById('kelvin').value = (((value - 32) * 5/9) + 273.15).toFixed(2);
//     } else if (inputElement.id === 'kelvin') {
//         document.getElementById('celsius').value = (value - 273.15).toFixed(2);
//         document.getElementById('fahrenheit').value = ((value - 273.15) * 9/5 + 32).toFixed(2);
//     }
// }



//NAN
// The ! (logical NOT) operator negates the result of isNaN(celsius).
// If celsius is NaN, isNaN(celsius) returns true, and !isNaN(celsius) returns false.
// If celsius is a valid number, isNaN(celsius) returns false, and !isNaN(celsius) returns true.