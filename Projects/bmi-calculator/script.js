const form = document.getElementById('form');

function calculateBMI (e){
    e.preventDefault();

    const weight = document.getElementById('weightValue');
    const height = document.getElementById('heightValue');
    const resultcont = document.querySelector('.resultCont');

    weightInput = parseFloat(weight.value);
    heightInput = parseFloat(height.value);

    const bmi =  weightInput / Math.pow(heightInput, 2);

    const bmiResult = bmi.toFixed(2);

    resultcont.innerHTML = bmiResult;
    if (bmiResult < 18.5 || bmiResult === 18.5){
        resultcont.style.backgroundColor = 'yellow';
    }else if (bmiResult > 18.5 && bmiResult < 25 ){
        resultcont.style.backgroundColor = 'green';
    }else if( bmiResult > 25 && bmiResult < 30 ){
        resultcont.style.backgroundColor = 'orangered';
    } else if ( bmiResult > 30 ){
        resultcont.style.backgroundColor = 'red';
    }
    else {
        resultcont.style.backgroundColor = 'gray';
    }
    
}

form.addEventListener('submit', calculateBMI);