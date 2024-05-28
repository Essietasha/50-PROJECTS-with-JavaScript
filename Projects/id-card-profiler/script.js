const popupbox = document.querySelector('.popupinnerbox');
const errorPopUp = document.querySelector('.errorMessage')

function hideIDCard(){
    popupbox.classList.add('hidden');
    errorPopUp.classList.add('hidden');
}
window.addEventListener('DOMContentLoaded', hideIDCard);


const form = document.getElementById('form');
const firstnamevalue = document.querySelector('.name')
const lastnamevalue = document.querySelector('.nysccode')
const codevalue = document.querySelector('.datebirth')
const dobvalue = document.querySelector('.ppassignment')
const ppavalue = document.querySelector('.footer')
const phonevalue = document.querySelector('.phone')

function generateIDCARD(event) {
    event.preventDefault();
     var firstName = document.getElementById('firstNameInput').value;
     var lastName = document.getElementById('lastNameInput').value;
     var nyscCode = document.getElementById('nysccodeInput').value;
     var dob = document.getElementById('dobInput').value;
     var ppa = document.getElementById('ppaInput').value;
    var phone = document.getElementById('phoneInput').value;
    
    
    if (firstName === '' || lastName === '' || nyscCode === '' || dob === '' || ppa === '') {
        errorPopUp.classList.add('display');
    } else {
        popupbox.classList.add('display');
        firstnamevalue.innerHTML = `Name: ${firstName} ${lastName}`;
        codevalue.innerHTML = `State Code: ${nyscCode}`;
        dobvalue.innerHTML = `Date of Birth: ${dob}`;
        ppavalue.innerHTML = `PPA: ${ppa}`;
        phonevalue.innerHTML = `Phone Number: ${phone}`;
        errorPopUp.classList.add('hidden');
        
    }

}
form.addEventListener('submit', generateIDCARD);

const nameInput = document.getElementById('firstNameInput');
var lastnameInput = document.getElementById('lastNameInput');
var firstName = document.getElementById('firstNameInput').value;

    function testAplhabeth(e) {
        if (e.key >= "a" && e.key <= "z" || e.key >= "A" && e.key <= "Z") {
            errorPopUp.classList.add('hidden');

        } else {
            errorPopUp.classList.add('display');

        }
    }
    nameInput.addEventListener('keydown', testAplhabeth);
    lastnameInput.addEventListener('keydown', testAplhabeth);