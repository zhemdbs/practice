const panelContainer = document.querySelectorAll(".panel-faq-container");
const panelAnswer = document.querySelectorAll(".panel-faq-answer");
const closeBtn = document.querySelector('#btn-all-close');

for (let i = 0; i < panelContainer.length; i++) {
  panelContainer[i].addEventListener("click", function () {
      
    panelAnswer[i].classList.contains("active")
      ? panelAnswer[i].classList.remove("active")
      : panelAnswer[i].classList.add("active");
  });
}

closeBtn.addEventListener('click', function () {
  for (let j = 0; j < panelAnswer.length; j++){
    if (panelAnswer[j].classList.contains('active')) {
      panelAnswer[j].classList.remove('active')
    }
  }
})
