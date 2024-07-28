let currentDate;
const date = new Date();
const month = date.getMonth();
currentDate = date.toLocaleString('default', {
    weekday: 'long',
    month: 'short',
    day: 'numeric',
    year: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
});

const dayEl = document.getElementById('day');
const dateEl = document.getElementById('date');
const monthEl = document.getElementById('month');
const yearEl = document.getElementById('year');

monthEl.innerText = date.toLocaleString('default',{
    month: 'long'
})
dayEl.innerText = date.toLocaleString('default',{
    weekday: 'long',
})
dateEl.innerText = date.getDate();
yearEl.innerText = date.getFullYear()


