const calculateBtn = document.getElementById('calculate');

function calculateTip (){
    const billInput = document.getElementById('bil').value;
    const tipPercent = document.getElementById('tp').value;
    const tipAmount = document.querySelector('.tpamount');
    const total = document.querySelector('.total');

    const tipCalc = billInput * tipPercent / 100;

    const tipResult = billInput * (1 + tipPercent / 100 );
    total.innerHTML = Math.round(tipResult);
    // tipResult = tipCalc + billInput;
    // total.innerHTML = Math.round(tipResult);
    tipAmount.innerHTML = `TIP AMOUNT: ${tipCalc}`;
    console.log(tipCalc);
}   
calculateBtn.addEventListener('click', calculateTip);


// A tip is calculated by multiplying the total amount of the bill by the tip percentage expressed as a decimal.  
// Num * percent / 100......200 * 0.20   |OR|   Tip / 100 + 1 (+ bill amount)  |OR| TipPercentage / 100 * billamount