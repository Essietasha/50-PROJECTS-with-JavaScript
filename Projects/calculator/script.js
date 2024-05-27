let displayInput = '';

function affixToDisplay(value) {
    //Append displayInput to Value
    displayInput += value;
    document.getElementById('display').value = displayInput;
}

function clearAll() {
    displayInput = '';
    document.getElementById('display').value = displayInput;
}

function calculateResult() {
        try {
            displayInput = eval(displayInput);
            document.getElementById("display").value = displayInput;
        } catch (error) {
            document.getElementById("display").value = "Error";
        }
    }




























// let btns = document.querySelectorAll('button');

// for (i of btns) {
//   i.addEventListener('click', function() {

//   });
// }











// function run(val) {
//     document.getElementById('calcResultCont').value += val;
// }
// function myFunction(event) {
//     let res;
//     if (event.key == '0' || event.key == '1'
//         || event.key == '2' || event.key == '3'
//         || event.key == '4' || event.key == '5'
//         || event.key == '6' || event.key == '7'
//         || event.key == '8' || event.key == '9'
//         || event.key == '+' || event.key == '-'
//         || event.key == '*' || event.key == '/')
//         res = document.getElementById('calcResultCont').value += event.key;
//     console.log(res);
// }
