window.addEventListener('DOMContentLoaded', populateQuestions);

var score = 0;
const inputDivEl = document.getElementById('inputEl');
const answerDivEl = document.getElementById('answerEl');

function populateQuestions(){
    let randomOperator = '';

    const questionDiv = document.getElementById('questionEl');
    
    var randomNumber1 = Math.floor(Math.random() * 20 + 1);
    var randomNumber2 = Math.floor(Math.random() * 20 + 1);

    const operators = '+*-/%';
    const randomNum = Math.floor(Math.random() * operators.length);
    randomOperator +=operators.substring(randomNum, randomNum + 1);

    if(randomNumber1 < randomNumber2){
        randomNumber1 = randomNumber2 + 2;
    }

    questionDiv.innerHTML = `What is ${randomNumber1} ${randomOperator} ${randomNumber2}`;

    const question = randomNumber1 + randomOperator + randomNumber2;
    const answer = Math.floor(eval(question));
    inputDivEl.value = '';
    answerDivEl.textContent = 'Answer: ';

    localStorage.setItem('ans-wer', answer);
}
const generateQuestion = document.getElementById('generateBtn');
generateQuestion.addEventListener('click', populateQuestions);



//Handle Submit, check answer.
const submitbtn = document.getElementById('submitBtn');
submitbtn.addEventListener('click', () => {

    const answer = localStorage.getItem('ans-wer');
    const scoreDivEl = document.getElementById('scoreEl');
    const answerDivEl = document.getElementById('answerEl');
    const inputDivEl = document.getElementById('inputEl');

    if(inputDivEl.value === answer){
        alert('Correct!');
        score += 1;
    }else{
        alert('Wrong!')
    }
    answerDivEl.textContent = `Answer: ${answer}`;
    scoreDivEl.textContent = `Score: ${score}`;

});


