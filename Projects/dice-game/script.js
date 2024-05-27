const playBtn = document.getElementById('play');

function playGame () {
    const randomNumber1 = Math.floor(Math.random() * 6) + 1;
    const randomImage = "images/dice" + randomNumber1 + ".png";
    const image1 = document.querySelectorAll("img")[0];
    image1.setAttribute("src", randomImage);


    const randomNumber2 = Math.floor(Math.random() * 6) + 1;
    const randomImage2 = "images/dice" + randomNumber2 + ".png";
    const image2 = document.querySelectorAll("img")[1];
    image2.setAttribute("src", randomImage2);




    if (randomNumber1 > randomNumber2){
        document.querySelector("h1").innerHTML = "Player 1 Wins!"
    }else if (randomNumber2 > randomNumber1){
        document.querySelector("h1").innerHTML = "Player 2 Win!"
    }else{
        document.querySelector("h1").innerHTML = "Draw!!!"
    }

}
playBtn.addEventListener('click', playGame);



// const playBtn1 = document.getElementById('play1');
// const playBtn2 = document.getElementById('play2');

// let randomNumber1;
// let ramdomNumber2; 



// function playGame () {
//     randomNumber1 = Math.floor(Math.random() * 6) + 1;
//     const randomImage = "images/dice" + randomNumber1 + ".png";
//     const image1 = document.querySelectorAll("img")[0];
//     image1.setAttribute("src", randomImage);
//     if (randomNumber1 > ramdomNumber2){
//         document.querySelector("h1").innerHTML = "YOU-Player 1 Win!"
//     }else if (ramdomNumber2 > randomNumber1){
//         document.querySelector("h1").innerHTML = "Player 2 Wins!"
//     }else{
//         document.querySelector("h1").innerHTML = "Draw!!!"
//     }
    
// }
// playBtn1.addEventListener('click', playGame);



// function playGame2 () {
//     ramdomNumber2 = Math.floor(Math.random() * 6) + 1;
//     const randomImage2 = "images/dice" + ramdomNumber2 + ".png";
//     const image2 = document.querySelectorAll("img")[1];
//     image2.setAttribute("src", randomImage2);
//     if (randomNumber1 > ramdomNumber2){
//         document.querySelector("h1").innerHTML = "Player 1 Wins!"
//     }else if (ramdomNumber2 > randomNumber1){
//         document.querySelector("h1").innerHTML = "YOU-Player 2 Win!"
//     }else{
//         document.querySelector("h1").innerHTML = "Draw!!!"
//     }
    

// }
// playBtn2.addEventListener('click', playGame2);


