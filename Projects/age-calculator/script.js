const calcButton = document.getElementById('calcBtn');
const input = document.getElementById('userInput');
const result = document.querySelector('.result');
let days;
let month;
const calcAge = () => {
    const inputValue = input.value;
    if (inputValue === ""){
        alert('Please select your date of birth')
    }else{
        const age = fetchage(inputValue);
        result.innerHTML = `You are ${age} years, ${month} months and ${days}days  old`;
    }

}
    const fetchage = (inputValue) => {
        const currDate = new Date();
        const userbirthday = new Date(inputValue);

        let age = currDate.getFullYear() - userbirthday.getFullYear();
        month = currDate.getMonth() - userbirthday.getMonth();
        days = currDate.getDate() - userbirthday.getDate();

        if (
            month < 0 ||
            (month === 0 && currDate.getDate() < userbirthday.getDate())
          ) {
            age--;
          }
        console.log(age, month, days);

        return age;
    }


calcButton.addEventListener('click', calcAge);
