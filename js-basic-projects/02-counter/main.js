const counterNumber = document.querySelector('.counter__num');
const counterBtn = document.querySelectorAll('.counter__btn');
const counterDownBtn = document.querySelector('.counter__btn--down');
const counterUpBtn = document.querySelector('.counter__btn--up');
const counterResetBtn = document.querySelector('.counter__btn--reset');

let counterNum = 0;

counterBtn.forEach(btn => {
  const dataBtn = btn.dataset.button;
  btn.addEventListener('click', () => {
    clickCounter(dataBtn);
  })
});

function clickCounter(data) {
  if(data === 'up') {
    counterNum += 1;
    counterNumber.textContent = counterNum;

    if(counterNum > 0) {
      counterNumber.style.color = 'green';
    }
  } else  if(data === 'down') {
    counterNum -= 1;
    counterNumber.textContent = counterNum;

    if(counterNum < 0) {
      counterNumber.style.color = 'red';
    }
  } else {
    counterNum = 0;
    counterNumber.textContent = counterNum;
    counterNumber.style.color = 'black';
  }
}