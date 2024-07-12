//https://pokeapi.co/

fetchImages();

async function fetchImages() {
    try {

        const searchitem = document.getElementById('inputEl').value;
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${searchitem}`);
        
        if (!response.ok) {
            throw new Error('Error fetching Data');
        }

        const data = await response.json();
        console.log(data);
        const pokemanDisplay = data.sprites.front_default;
        const imgEl = document.getElementById('imgElement');

        imgEl.src = pokemanDisplay;
        imgEl.style.display = 'block';

    } catch (error) {
        console.error('Error fetching data:', error);
    }
}