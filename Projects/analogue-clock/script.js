const hour = document.querySelector(".hour");
const minute = document.querySelector(".minute");
const second = document.querySelector(".second");

function setDate() {
  const now = new Date();

  const getSecond = now.getSeconds();
  const getMinute = now.getMinutes();
  const getHour = now.getHours();

  const degreeOfSeconds = (getSecond / 60) * 360;
  const degreeOfMinutes = (getMinute / 60) * 360;
  const degreeOfHours = (getHour / 12) * 360;


  second.style.transform = `rotate(${degreeOfSeconds}deg)`;
  minute.style.transform = `rotate(${degreeOfMinutes}deg)`;
  hour.style.transform = `rotate(${degreeOfHours}deg)`;
}

setInterval(setDate, 1000);