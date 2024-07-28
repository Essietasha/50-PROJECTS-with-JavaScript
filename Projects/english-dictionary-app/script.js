const searchbtn = document.getElementById('searchBtn');

async function fetchWord() {
    try {


        const wordsearch = document.getElementById('wordSearch').value;
        const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${wordsearch}`);
        
        
        if (!response.ok) {
            throw new Error('Error fetching Data');
        }

        const data = await response.json();
        const wordtitle = document.getElementById('wordTitle');
        const wordmeaning = document.getElementById('wordMeaning');
        const audioel = document.getElementById('audioEl');
        const phonics = document.getElementById('phonetics');

        wordtitle.innerText = data[0].word;
        wordmeaning.innerText = data[0].meanings[0].definitions[0].definition;
        phonics.innerText = data[0].phonetics[2].text;

        audioel.style.display = 'block';
        audioel.src = data[0].phonetics[2].audio;

    }
    catch(error) {
        console.error(error);
    }
}

searchbtn.addEventListener('click', fetchWord);




// const inputEl = document.getElementById("input");

// async function fetchAPI(word) {
//     try {
//     } catch (error) {
//     }
//   }  

// inputEl.addEventListener("keyup", (e) => {
//     if (e.target.value && e.key === "Enter") {
//       fetchAPI(e.target.value);
//     }
//   });