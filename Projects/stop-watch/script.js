let seconds;
let minutes;
let hours;
let count;
let counting = false;
const timer = document.querySelector('.timer');


function startCount (){

    seconds = 0;
    minutes = 0;
    hours = 0;

     count = setInterval(() => {
        if (!counting){
            timer.innerHTML = timeFormat(hours, minutes, seconds);
            timer.classList.add('fs');
            seconds++;

            if(seconds > 59){
                seconds = 0;
                minutes++;
            }

            if(minutes > 59){
                minutes = 0;
                hours++;
            }
        }
    }, 1000)

}

function pausePlay () {
    if(!counting){
        counting = true;
    }else if (counting){
        counting = false;
    }
}

function reset () {
    clearInterval(count);
    timer.classList.add('fs');
    timer.innerHTML = "00" + " : " + "00" + " : " + "00";
}

function timeFormat (hours, minutes, seconds){
    var hourFormat = hours < 10 ? "0" + hours : hours;
    var minuteFormat = minutes < 10 ? "0" + minutes : minutes;
    var secodsFormat = seconds < 10 ? "0" + seconds : seconds;
    return hourFormat + " : " + minuteFormat + " : " + secodsFormat;
};