const userScore = document.querySelector('#score-user');
const compScore = document.querySelector('#score-comp');
const gameStatus = document.querySelector('.game__status');
const gameResult = document.querySelector('.game__result');
const userChoice = document.querySelector('.user-choice');
const compChoice = document.querySelector('.comp-choice');
const gameDetail = document.querySelector('.game-detail');
const choiceBtn = document.querySelectorAll('.choice');
const randomChoice = ['rock', 'scissors', 'paper'];

choiceBtn.forEach((btn) => {
  const choiceData = btn.dataset.choice;
  btn.addEventListener('click', () => {
    const randomChoiceIndex = Math.floor(Math.random() * randomChoice.length);
    const randomChoiceValue = randomChoice[randomChoiceIndex];

    // console.log(`선택한 값: ${choiceData} / 컴퓨터 값: ${randomChoiceValue}`);
    userChoice.innerHTML = `${choiceData}<em>user</em>`;
    compChoice.innerHTML = `${randomChoiceValue}<em>comp</em>`;

    if (choiceData === randomChoiceValue) {
      // console.log('비김!');

      gameDetail.innerHTML = 'equals'
      gameResult.innerHTML = `It's a draw`;
      return
    } else if ((choiceData === 'rock' && randomChoiceValue ==='scissors') || (choiceData ==='scissors' && randomChoiceValue === 'paper') || (choiceData === 'paper' && randomChoiceValue === 'rock')) {
      // console.log('이김!');
      userScore.innerHTML = parseInt(userScore.innerHTML) + 1;

      gameDetail.innerHTML = 'beats'
      gameResult.innerHTML = 'You Wins!🔥';
    } else {
      // console.log('졌다!');
      gameDetail.innerHTML = 'loses to'
      gameResult.innerHTML = 'You lost...💩';
      compScore.innerHTML = parseInt(compScore.innerHTML) + 1;
    }
  });
});