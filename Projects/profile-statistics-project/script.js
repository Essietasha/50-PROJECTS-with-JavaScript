let experience = 15;
let websites = 180;
let apps = 25;
let duration = 2000;
let elementValues = [experience, websites, apps];

function incrementCounter(id, elementValues, duration) {
    const element = document.getElementById(id);

    let currentValue = 0;
    let increment = elementValues / (duration / 10);    // Calculate the amount by which the counter should be incremented in each interval to smoothly reach the finalValue within the specified duration.
    
    const counter = setInterval(() => {
        currentValue += increment;
    
        if(currentValue >= elementValues){
            currentValue = elementValues;
            clearInterval(counter);
        }
        element.textContent = Math.floor(currentValue);
    }, 10);

}

document.addEventListener('DOMContentLoaded', () => {
    incrementCounter('workExperience', elementValues[0], duration);
    incrementCounter('websitesMade', elementValues[1], duration);
    incrementCounter('appsMade', elementValues[2], duration);
});