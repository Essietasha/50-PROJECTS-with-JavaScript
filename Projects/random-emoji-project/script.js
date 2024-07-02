
let output;

const generateBtn = document.querySelector('.generate');
const imageBox = document.querySelector('.imageCont');
const emojiText = document.querySelector('.imageText');

function generateBtnEemoji() {

    imageBox.innerHTML = 'Loading...';
    emojiText.innerHTML = 'Loading...';
    imageBox.classList.add('fontSizeMd');

    const apiURL = 'https://emoji-api.com/emojis?access_key=773b58f681fb786fafdb8392e8b8a75ddc177fd1';

    fetch(apiURL)
    .then(res => res.json())
    .then(data => {
        output = data;

        const randomNum = Math.floor(Math.random() * 1500 +1);

        imageBox.innerHTML = output[randomNum].character;
        emojiText.innerHTML = output[randomNum].unicodeName;
        imageBox.classList.add('fontSizeBg');

        console.log(output)
    })

    .catch(error => console.error(
        imageBox.innerHTML = 'Error fetching API...',
        emojiText.innerHTML = 'Error fetching API...',
        imageBox.classList.add('alertColor'),
        imageBox.classList.add('fontSizeSm'), error));

}

generateBtn.addEventListener('click', generateBtnEemoji);

