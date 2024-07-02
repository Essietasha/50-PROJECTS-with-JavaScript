const allBoxes = document.querySelectorAll('.questionBox');
const allBtn = document.querySelectorAll('.answerBtn');

allBoxes.forEach((box, index) => {
    const btn = allBtn[index];

    btn.addEventListener('click', () => {
        box.classList.toggle('displayText');
    });

});




// const viewBtn = document.querySelector('.fa-plus');
// function displayAnswer(){
//     const plus = document.querySelector('.fa-plus');
//     const close = document.querySelector('.fa-minus');
//     const questionTxt = document.querySelector('.questionText');

//     plus.classList.add('hidden');
//     close.classList.remove('hidden');
//     questionTxt.classList.remove('hidden');

// }
// viewBtn.addEventListener('click', displayAnswer);


// const closeBtn = document.querySelector('.fa-minus');
// function closeAnswer(){
//     const minus = document.querySelector('.fa-minus');
//     const open = document.querySelector('.fa-plus');
//     const txt = document.querySelector('.questionText');

//     minus.classList.add('hidden');
//     open.classList.remove('hidden');
//     txt.classList.add('hidden');

// }
// closeBtn.addEventListener('click', closeAnswer);