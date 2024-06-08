let paused = false;
const timer = document.querySelector('.timer');


function startCountdown(){
    var minutes = 25;
    var seconds = 0;

    var countdownInterval = setInterval( () => {
        if (!paused){
            timer.innerHTML = timeFormat(minutes, seconds);
            seconds --;

                if (seconds < 0 ){
                    seconds = 59;
                    minutes--;
                }

                if (minutes === 0 && seconds === 0){
                    clearInterval(countdownInterval);
                    alert('Countdown completed!');
                }         
        }
    }, 1000);
    localStorage.setItem('cd-int', countdownInterval);
}

function timeFormat(minutes, seconds) { 
    var minFormat = minutes < 10 ? "0" + minutes : minutes; 
    var secFormat = seconds < 10 ? "0" + seconds : seconds; 
    return minFormat + ":" + secFormat; 
};

function tooglePause (){
    if (!paused){
        paused = true;
    } else if(paused) {
        paused = false;
    }
}

function resetCountdown () {
    const countdownInterval = localStorage.getItem('cd-int');
    clearInterval(countdownInterval);
    timer.innerHTML = "00:00";
}


// function stopCountdown () {
//     paused = true;
// }
// function resumeCountdown () {
//     paused = false;
// }








//let paused = false;  //paused: A boolean flag to indicate whether the countdown is paused.  It acts as a switch that controls whether the countdown should continue decrementing the time or stay paused. Changes the state of the countdown.
                      //At the initial stage, paused is initialized to false, meaning the countdown is not paused when it starts.

//Line 8 : This line updates the inner HTML of the selected timer element with the formatted time string obtained from the timeFormat function.
//timeFormat Function: Formats minutes and seconds into a two-digit string format
//Minute format: This line checks if the minutes or seconds value is less than 10. If true, it prepends a "0" to the minutes value to ensure it is always two digits. If false, it keeps the minutes value as is.
//Pause/Resume: To add the ability to pause and resume the countdown in your JavaScript code, you'll need to include a mechanism to stop the setInterval and then restart it when needed. This can be done by using a flag to check the current state of the countdown (running or paused) and maintaining the current time.