//https://pokeapi.co/

fetchImages();

async function fetchImages() {
    try {
 
        const searchitem = document.getElementById('inputEl').value.toLowerCase();
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${searchitem}`);
        
        if (!response.ok) {
            throw new Error('Error fetching Data');
        }

        const data = await response.json();
        console.log(searchitem);
        console.log(data);
        const pokemanDisplay = data.sprites.front_default;
        const imgEl = document.getElementById('imgElement');
        const pokemanName = document.querySelector('.pokemanName');

        imgEl.src = pokemanDisplay;
        imgEl.style.display = 'block';
        pokemanName.innerHTML = data.name;

    }
    catch(error) {
        console.error(error);
    }
}