const hourHand = document.querySelector('.hour-hand');
const minHand = document.querySelector('.min-hand');
const secondHand = document.querySelector('.second-hand');


function getTime() {
  const currentTime = new Date();
  const hour = currentTime.getHours();
  const min = currentTime.getMinutes();
  const seconds = currentTime.getSeconds();

  const hourDegrees = (hour/12) * 360 + 90;
  hourHand.style.transform = `rotate(${hourDegrees}deg)`;

  const minDegrees = (min/60) * 360 + 90;
  minHand.style.transform = `rotate(${minDegrees}deg)`;

  const secondsDegrees = (seconds/60) * 360 + 90;
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
}

function init(){
  setInterval(getTime, 1000);
}

init();
