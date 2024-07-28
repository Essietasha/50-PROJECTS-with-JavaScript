var i = 0;
var time = 2000;
var images = [];

images[0] = 'images/img1.jpg';
images[1] = 'images/img2.jpg';
images[2] = 'images/img3.jpg';
images[3] = 'images/img4.jpg';
images[4] = 'images/img5.jpg';

function changeImages(){
    const imageEl = document.querySelector('.images');
    imageEl.src = images[i];
    if(i < images.length -1){
        i++;
    }
    else{
        i = 0;
    }

    setTimeout("changeImages()", time);
}


window.onload = changeImages;