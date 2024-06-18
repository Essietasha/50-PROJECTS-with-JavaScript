document.addEventListener('DOMContentLoaded', () => {
    
    const buttons = document.querySelectorAll('.btn');
    const infos = document.querySelectorAll('.info');

    buttons.forEach(btn => {
        
        btn.addEventListener('click', () => {
            // const target = e.target.dataset.id;
            const target = btn.getAttribute('data-id');

            infos.forEach(info => info.classList.remove('showContent'));
            buttons.forEach(btn => btn.classList.remove('showContent'));

            const targetEl = document.getElementById(target);
            targetEl.classList.add('showContent');




        })
    })
})
