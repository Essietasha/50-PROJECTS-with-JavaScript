const counterEl = document.querySelector('.percentage');
const frontBar = document.querySelector('.hr-front-bar');
    
let percentage = 0;

updateBar();

function updateBar(){

    counterEl.innerText = percentage + '%';
    frontBar.style.width = percentage + '%';

    percentage++;

    if(percentage < 100){
        setTimeout(updateBar, 100);
    }
}

document.addEventListener('DOMContentLoaded', updateBar);
