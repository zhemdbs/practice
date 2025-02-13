document.addEventListener('DOMContentLoaded', () => {
  const holes = document.querySelectorAll('.hole');
  const startBtn = document.querySelector('.btn-start');
  const moles = document.querySelectorAll('.mole');
  const point = document.querySelector('.point__num');
  const popup = document.querySelector('.popup');
  const resultPoint = document.querySelector('.result-point');
  const restartBtn = document.querySelector('.btn-restart');
  
  let pointNum = 0;
  let gameTimer;
  let moleTimer;
  let activeMoleIndex = -1;
  let gameOver = false;

  point.innerHTML = pointNum;
  startBtn.addEventListener('click', () => {startGame();});

  function startGame() {
    console.log('startGame~!!!');
    gameOver = false;
    startBtn.disabled = true;

    gameTimer = setTimeout(endGame, 10000);
    moleTimer = setInterval(randomMole, 1100);
  }
  
  function endGame() {
    gameOver = true;
    clearInterval(moleTimer);

    setTimeout(() => {
      popup.style.display = 'flex';
      resultPoint.innerHTML = pointNum;
    }, 1500)

    restartBtn.addEventListener('click', () => {
      startBtn.disabled = false;
      popup.style.display = 'none';
      
      holes.forEach(hole => {
        pointNum = 0;
        point.innerHTML = 0;
        hole.classList.remove('active');
      })
    });

  }
  
  function randomMole() {
    if(gameOver) return;
    
    if(activeMoleIndex !== -1) {
      holes[activeMoleIndex].classList.remove('active');
    }
    
    //랜덤 위치에 두더지 나타나기.
    activeMoleIndex = Math.floor(Math.random() * holes.length);
    holes[activeMoleIndex].classList.add('active');
    
    setTimeout(() => {
      holes[activeMoleIndex].classList.remove('active');
    }, 1000)
  }
  
  function punchMole(e) {
    console.log('e', e)
    const currentMole = e.target;

    pointNum++; //점수 증가
    point.innerHTML = pointNum;

    currentMole.classList.add('bounce');
    if ("vibrate" in navigator) {
      navigator.vibrate(500); // 진동 시간 500ms
    }

    setTimeout(() => {
      currentMole.classList.remove('bounce');
    }, 500);
  }

  moles.forEach(mole => {
    mole.addEventListener('click', (e) => {
      punchMole(e);
    });
  })
});