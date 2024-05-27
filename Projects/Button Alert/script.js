const greenBtn = document.querySelector('.btngreen');
const label = document.querySelector('.label');
function greenMessage() {
    label.style.backgroundColor = ' green';
    label.innerHTML = 'Welcome, You Have Pressed the Green Button!';
    label.style.height = '50px';

    // greenBtn.style.backgroundColor = 'white';
    // greenBtn.style.color = 'green';
    // alert('Welcome, You Have Clicked the Green Button!')
}
greenBtn.addEventListener('click', greenMessage);



const redBtn = document.querySelector('.btnred');
function redMessage() {
    label.style.backgroundColor = ' red';
    label.innerHTML = 'Welcome, You Have Pressed the Red Button!';
    label.style.height = '50px';
    // redBtn.style.backgroundColor = 'white';
    // redBtn.style.color = 'red';
    // alert('Welcome, You Have Clicked the Red Button!')
}
redBtn.addEventListener('click', redMessage);



const pinkBtn = document.querySelector('.btnpink');
function pinkMessage() {
    label.style.backgroundColor = ' pink';
    label.innerHTML = 'Welcome, You Have Pressed the Pink Button!';
    label.style.height = '50px';
    // pinkBtn.style.backgroundColor = 'white';
    // pinkBtn.style.color = 'pink';
    // alert('Welcome, You Have Clicked the Pink Button!')
}
pinkBtn.addEventListener('click', pinkMessage);



const blueBtn = document.querySelector('.btnblue');
function blueMessage() {
    label.style.backgroundColor = ' blue';
    label.innerHTML = 'Welcome, You Have Pressed the Blue Button!';
    label.style.height = '50px';
    // blueBtn.style.backgroundColor = 'white';
    // blueBtn.style.color = 'blue';
    // alert('Welcome, You Have Clicked the Blue Button!')
}
blueBtn.addEventListener('click', blueMessage);



const yellowBtn = document.querySelector('.btnyellow');
function yellowMessage() {
    label.style.backgroundColor = ' yellow';
    label.innerHTML = 'Welcome, You Have Pressed the Yellow Button!';
    label.style.height = '50px';
    // yellowBtn.style.backgroundColor = 'white';
    // yellowBtn.style.color = 'yellow';
    // alert('Welcome, You Have Clicked the Yellow Button!')
}
yellowBtn.addEventListener('click', yellowMessage);



const purpleBtn = document.querySelector('.btnpurple');

function purpleMessage() {
    label.style.backgroundColor = 'purple';
    label.innerHTML = 'Welcome, You Have Pressed the Purple Button!';
    label.style.height = '50px';
    // purpleBtn.style.backgroundColor = 'white';
    // purpleBtn.style.color = 'purple';
    // alert('Welcome, You Have Clicked the Purple Button!')
}
purpleBtn.addEventListener('click', purpleMessage);