let result;                 //Kilograms (kg) to pounds (lb) is 1 kg = 2.2 lb. To convert from kilogram to pound, we multiply by 2.2. To convert from pound to kilogram, we divide by 2.2.
let userInput;
let errorMessage;
let resultBox;


userInput = document.getElementById('userInput');
errorMessage = document.querySelector('.error');
result = document.getElementById('actualResult');

const grams = document.getElementById('grams');
const kilo = document.getElementById('kilo');
const pounds = document.getElementById('pounds');
const ounces = document.getElementById('ounces');


function calculateWeight () {

    setTimeout(() => {
        inputValue = userInput.value;

        if (inputValue <= 0 || isNaN(inputValue)){
            errorMessage.innerHTML = "Please input a valid number";
        } else { 
            resultBox = result;
            errorMessage.innerHTML = ""; 
            const weightResult = inputValue / 2.2;

            const endResult = weightResult.toFixed(2);
            resultBox.innerHTML = endResult + "kg";
        }
    }, 100)

    function results () {
        grams.innerHTML = (userInput.value / 453.592).toFixed(3) + "g";
        ounces.innerHTML = (userInput.value / 16).toFixed(2) + " oz";
        kilo.innerHTML = (userInput.value / 2.2).toFixed(2) + "kg";
        pounds.innerHTML = userInput.value + "lbs";
    }
    results();   
}

function resetResult() {
    result.innerHTML = "";
    userInput.value = "";
    grams.innerHTML = "";
    ounces.innerHTML = "";
    kilo.innerHTML = "";
    pounds.innerHTML = "";
}

