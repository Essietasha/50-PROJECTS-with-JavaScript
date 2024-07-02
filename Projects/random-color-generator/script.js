window.addEventListener('DOMContentLoaded', () => {


//Div Els
    const flexcont = document.querySelector('.flexCont');

    for (let iterator = 0; iterator < 30; iterator++){

        const boxes = document.createElement('div');
        flexcont.appendChild(boxes);
        flexcont.classList.add('colorGrid');
        boxes.classList.add('boxStyle');

        const boxElements  = document.querySelectorAll('.boxStyle');

        boxElements.forEach((box) => {
        const finalColorCode = colorCode();
        box.style.backgroundColor = `#${finalColorCode}`;
        box.innerHTML = `#${finalColorCode}`;

        })
        
    }


})

//Color Code
function colorCode () {

    let randomColorCode = '';
    let colorLength = 6;
    const characters = '1234567890abcdef';

    for ( i = 0; i < colorLength; i++){

        const randomNum = Math.floor(Math.random() * characters.length);
        const randomCode = characters.substring(randomNum, randomNum + 1);
        randomColorCode += randomCode;

    }
    
    return randomColorCode;
}



// window.addEventListener('DOMContentLoaded', () => {
//     let finalColorCode;   
//         const flexcont = document.querySelector('.flexCont');
    
//         for (let iterator = 0; iterator < 30; iterator++){
    
//             const boxes = document.createElement('div');
//             flexcont.appendChild(boxes);
//             flexcont.classList.add('colorGrid');
//             boxes.classList.add('boxStyle');
//         }
//         const boxElements  = document.querySelectorAll('.boxStyle');
    
//         populateRandomColor();
    
//             function populateRandomColor() {
    
//                 boxElements.forEach((box) => {
//                     finalColorCode = colorCode();
//                     box.style.backgroundColor = `#${finalColorCode}`;
//                     box.innerHTML = `#${finalColorCode}`;
//                     console.log(finalColorCode)
//                     })
//             }
//     })
    
//     function colorCode () {
    
//         let randomColorCode = '';
//         let colorLength = 6;
//         const characters = '1234567890abcdef';
    
//         for ( i = 0; i < colorLength; i++){
    
//             const randomNum = Math.floor(Math.random() * characters.length);
//             randomColorCode += characters.substring(randomNum, randomNum + 1);
            
    
//         }
        
//         return randomColorCode;
//     }