const form = document.querySelector('form');
const formEl = document.getElementById('tasksForm');
const clearBox = document.getElementById('item');


updateItems();

function createItem(e){
    e.preventDefault();
    const items = document.getElementById('item').value;
    if(items === ''){
        alert('Please add an item!');
    }else{

    const divEl = document.createElement('div');
    const text = document.createElement('p');
    const checkbox = document.createElement('input');
    const deleteBtn = document.createElement('h5');
    checkbox.type = 'checkbox';
    checkbox.classList.add('checkbox');
    formEl.appendChild(divEl);
    divEl.appendChild(text);
    divEl.appendChild(checkbox);
    divEl.appendChild(deleteBtn);
    divEl.className = 'newEl';
    text.textContent = items;
    deleteBtn.textContent = 'Delete';
    deleteBtn.className = 'delete';
    clearBox.value = '';
    saveItem();
    }
}



function saveItem(){
        const itemsarray = Array.from(formEl.querySelectorAll('.newEl p'))
        .map(itemarray => itemarray.textContent);
        localStorage.setItem('itemsarray', JSON.stringify(itemsarray));
}
    
function updateItems() {
        const itemsarray = JSON.parse(localStorage.getItem('itemsarray')) || [];
        itemsarray.forEach(itemContent => {
            const divEl = document.createElement('div');
            const text = document.createElement('p');
            const checkbox = document.createElement('input');
            const deleteBtn = document.createElement('h5');
            checkbox.type = 'checkbox';
            checkbox.className = 'checkbox';
            divEl.className = 'newEl';
            formEl.appendChild(divEl);
            divEl.appendChild(text);
            divEl.appendChild(checkbox);
            divEl.appendChild(deleteBtn);
            text.innerText = itemContent;
            deleteBtn.textContent = 'Delete';
            deleteBtn.className = 'delete';

            deleteBtn.addEventListener('click', (e) => {
                if(e.target.classList.contains('newEl') || e.target.closest('.newEl')){
                    const divEl = e.target.closest('.newEl');
                    if (confirm('Do you want to delete this note?')) {
                        divEl.remove();
                        saveItem();
                    }
                }
            })
        });
}
    

form.addEventListener('submit', createItem);
