let movieContainer;
let video;


movieContainer = document.querySelector('.movieCont');
video = document.getElementById('trailer');


function showVideo (){
    movieContainer.classList.remove('visibility');
    video.play();
};

function closeMovie (){
    movieContainer.classList.add('visibility');
    video.pause();
    video.currentTime = 0;
};