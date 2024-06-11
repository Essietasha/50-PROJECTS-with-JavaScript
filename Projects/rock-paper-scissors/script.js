function playGame(userChoice) {
    const choices = ['rock', 'paper', 'scissors'];
    const computerChoice  = choices[ Math.floor(Math.random() * choices.length)];           //Using the result from Math.floor() as an index to access an element in the choices array. choices[1] would give the second element in the array, which is 'paper'.
    const resultEl = document.querySelector('.result');
    const userSel = document.querySelector('.userSel');
    const computerSel = document.querySelector('.computerSel');

    let result;

    if(userChoice === computerChoice){
        result = "It's a Draw!";
        resultEl.style.color = 'white';

    } else if (
        (userChoice === 'rock' && computerChoice === 'scissors') ||
        (userChoice === 'paper' && computerChoice === 'rock') ||
        (userChoice === 'scissors' && computerChoice === 'paper')
    ){
        result = `You Win! ${userChoice} beats ${computerChoice}.`;
        resultEl.style.color = 'green';
    } else{
        result = `You Lose! ${computerChoice} beats ${userChoice}`;
        resultEl.style.color = 'red';
    }

    resultEl.textContent = result;
    userSel.textContent = `Your Selection: ${userChoice}`;
    computerSel.textContent = `Computer Selection: ${computerChoice}`;

}