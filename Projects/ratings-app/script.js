const emojiStarsEl = document.querySelectorAll('.fa-star');
const iconsReaction = document.querySelectorAll('.fa-regular');
const textDiv = document.querySelector('.textEl');
const emojisColor = ["red", "orange", "yellow", "lightgreen", "green"];
const text = ["Bad!", "Poor!", "Fair!", "Good!", "Great!"];

addRating(2);

emojiStarsEl.forEach((starEl, index) => {
    starEl.addEventListener('click', () => {
        addRating(index);
    });
});


function addRating(index){
    emojiStarsEl.forEach((starEl, idx) => {
        if (idx < index + 1){
            starEl.classList.add('active');
        }else{
            starEl.classList.remove('active');
        }
    })

    iconsReaction.forEach((iconEl) => {
        iconEl.style.transform = `translateX(-${index * 50}px)`;
        iconEl.style.color = emojisColor[index];
    })

    textDiv.innerText = text[index];
};
