window.addEventListener('scroll', () => {

    const about = document.querySelector('.about');
    const links = document.querySelectorAll('li a');

    if (window.scrollY > 200){

        about.classList.remove('displayNone');
        links.forEach(link => {
            link.style.color = 'white';
        })

            if(window.scrollY > 300){
                about.classList.add('textColor');
            } else{
                about.classList.remove('textColor');
            }

        }else {
        about.classList.add('displayNone');
        links.forEach(link => {
            link.style.color = 'black';
        });
    }
})
