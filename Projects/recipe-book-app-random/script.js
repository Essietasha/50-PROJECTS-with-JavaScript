const refreshBtn = document.querySelector('.refresh');

function refreshRecipeList () {

    let randomNumber = Math.floor(Math.random() * 12) + 1;
    let randomImages = "images/Recipe" + randomNumber + ".jpg";
    const images = document.querySelectorAll("img")[1];
    images.setAttribute("src", randomImages);


}
refreshBtn.addEventListener('click', refreshRecipeList);