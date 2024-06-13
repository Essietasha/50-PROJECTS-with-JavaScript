let product;
let output;
let closeBtn;
let recipePop;
let popText;

closeBtn = document.querySelector('.closeButton');
recipePop = document.querySelector('.popUp');
popText = document.querySelector('.popText');
title = document.querySelector('.title');
ingredients = document.querySelector('.ingredients');
instruction = document.querySelector('.instruction');
cookingtime = document.querySelector('.cookingtime');


fetch('./recipe.json')
    .then(res => res.json())
    .then(data => {
      product = data;
    });

function popUpRecipeInfo( key, value) {

    for (var i = 0; i < product.length; i++) {
      if(product[i][key] === value) {
        output = product[i];
        // const productStringify = JSON.stringify(output);
        title.innerHTML = output.title;
        ingredients.innerHTML = `INGREDIENTS: ${output.ingredients}`;
        instruction.innerHTML = `INSTRUCTION: ${output.instruction}`;
        cookingtime.innerHTML = `COOKING TIME: ${output.cookingtime}`;
        recipePop.classList.remove('displayNone');
        console.log(output.id);

        return output;        
      }
    }
      return undefined;
}

function closePopUp() {
  recipePop.classList.add('displayNone');
}




// fetch('./recipe.json')
//     .then(res => res.json())
//     .then(data => {
//       product = data;

//         const listEl = document.querySelector('ul');
//         document.querySelector('#header').innerHTML = JSON.stringify(data.title);
//         console.log(data.title)
//         data.forEach(item =>{
//             listEl.insertAdjacentHTML("beforeend", `<li>${item.title}</li>`);
//             listEl.insertAdjacentHTML("beforeend", `<li>${item.instruction}</li>`);
//             listEl.insertAdjacentHTML("beforeend", `<li>${item.ingredients}</li>`);
//             listEl.insertAdjacentHTML("beforeend", `<li>${item.cookingtime}</li>`);
//             console.log(data);
//             product = data;
//         });
//     });


// var array = [
//   { id: 1, name: 'John' },
//   { id: 2, name: 'Jane' },
//   { id: 1, name: 'Doe' }
// ];
// // Function to find an object with a key having value 1 using a loop
// function findObject(arr, key, value) {

//   for (var i = 0; i < arr.length; i++) {
//     if (arr[i][key] === value) {
//       return arr[i];
//     }
//   }
//   return undefined;
// }
// var result = findObject(array, 'id', 1);
// console.log(result); // Output: { id: 1, name: 'John' }
