document.addEventListener('DOMContentLoaded', () => {
  const cardArray = [
    {
      name: 'fries',
      img: 'images/fries.png'
    },
    {
      name: 'cheeseburger',
      img: 'images/cheeseburger.png'
    },
    {
      name: 'ice-cream',
      img: 'images/ice-cream.png'
    },
    {
      name: 'pizza',
      img: 'images/pizza.png'
    },
    {
      name: 'milkshake',
      img: 'images/milkshake.png'
    },
    {
      name: 'hotdog',
      img: 'images/hotdog.png'
    },
    {
      name: 'fries',
      img: 'images/fries.png'
    },
    {
      name: 'cheeseburger',
      img: 'images/cheeseburger.png'
    },
    {
      name: 'ice-cream',
      img: 'images/ice-cream.png'
    },
    {
      name: 'pizza',
      img: 'images/pizza.png'
    },
    {
      name: 'milkshake',
      img: 'images/milkshake.png'
    },
    {
      name: 'hotdog',
      img: 'images/hotdog.png'
    }
  ];

  const popup = document.querySelector('.popup');
  const gameStartBox = document.querySelector('.gamestart');
  const gameOverBox = document.querySelector('.gameover');
  const gameOverResult = document.querySelector('.gameover-result');
  const startBtn = document.querySelector('.start');
  const restartBtn = document.querySelector('.restart');
  const timer = document.querySelector('.timer');
  const timerText = document.querySelector('.timer-text');
  const grid = document.querySelector('.grid');
  const result = document.querySelector('.result');

  let time = 10;
  let flippedCards = [];
  let matchedCards = []
  let timerInterval;
  let firstCardImg, secondCardImg;
  
  let gameOver = false;

  startBtn.addEventListener('click', startGame)

  // 카드 컨테이너 생성
  function createCardContainer() {
    grid.innerHTML = ''; //grid 초기화
    const shuffledCards = cardArray.sort(() => Math.random() - 0.5);

    for(let i = 0; i < shuffledCards.length; i++) {
      const card = document.createElement('div');
      const cardFront = document.createElement('div');
      const cardBack = document.createElement('div');
      const cardImageFront = document.createElement('img');
      const cardImageBack = document.createElement('img');
      
      card.classList.add('card');
      cardFront.classList.add('card-view','front');
      cardBack.classList.add('card-view','back');

      cardImageFront.setAttribute('src', 'images/blank.png');
      cardImageBack.setAttribute('src', shuffledCards[i].img);
      cardImageFront.setAttribute('data-id', i);

      cardFront.appendChild(cardImageFront);
      cardBack.appendChild(cardImageBack);
      card.appendChild(cardFront);
      card.appendChild(cardBack);

      card.addEventListener('click', flipCard);
      grid.appendChild(card);
    }
  }

  function startGame() {
    // 이전 타이머가 존재한다면 강제로 종료
    // console.log(timerInterval, gameOver)
    if (timerInterval) {
      clearInterval(timerInterval);
      timerInterval = null; // 타이머 상태 초기화
    }
    
    result.textContent = '0'
    popup.style.display = 'none';
    gameStartBox.style.display = 'none';
    matchedCards = [];
    
    time = 10;
    timerText.textContent = time;
    gameOver = false;
    
    const cardItem = document.querySelectorAll('.card');

    cardItem.forEach(item => {
      item.classList.add('flip');
    })

    setTimeout(() => {
      cardItem.forEach(card => {
        card.classList.remove('flip');
      });

      timerInterval = setInterval(() => {
        if (time < 0) {
          clearInterval(timerInterval); //타이머 종료
          gameOver = true;
          checkGameOver();
        } else {
          timerText.textContent = time;
          time--;
        }

        // console.log(timerText.textContent)
      }, 1000);
    }, 2000)
  }

  // 카드 뒤집기
  function flipCard(e) {
    const targetCard = e.target;
    if (targetCard.classList.contains('flip') || flippedCards.length === 2) return;
    
    targetCard.classList.add('flip');
    flippedCards.push(targetCard);

    const cardId = targetCard.querySelector('img').getAttribute('data-id');
    const cardName = cardArray[cardId].name;

    if (flippedCards.length === 1) {
      firstCardImg = cardName;
    }
    if (flippedCards.length === 2) {
      secondCardImg = cardName;
      setTimeout(checkMatch, 400);
    }
  }

  //뒤집은 카드 비교
  function checkMatch() {
    const [firstCard, secondCard] = flippedCards;
    
    if (firstCardImg === secondCardImg) {
      matchedCards.push(firstCardImg); // 맞춘 카드 배열에 추가
    } else {
      // 두 카드 다시 뒤집기
      setTimeout(() => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');
      }, 40);
    }

    flippedCards = []; // 클릭된 카드들 초기화
    result.textContent = matchedCards.length;

    checkGameOver();
  }

  // 게임 종료
  function checkGameOver() {
    const finish = document.querySelector('.finish');
    const overTitle = document.querySelector('.over-title');

    if (matchedCards.length === cardArray.length/2) {
      finish.style.display = 'block';
      overTitle.style.display = 'none';
      
      clearInterval(timerInterval); 
      gameOver = true;
      setTimeout(()=>{reStart()}, 1000)
    }
    
    if(time < 0) {
      overTitle.style.display = 'block';
      finish.style.display = 'none';
      gameOver = true;
      reStart();
    }
  }

  function reStart() {
    gameOverResult.textContent = matchedCards.length;
    popup.style.display = 'block';
    gameOverBox.style.display = 'flex';

    restartBtn.removeEventListener('click', handleRestart);
    restartBtn.addEventListener('click', handleRestart);
  }

  function handleRestart() {
    popup.style.display = 'none';
    gameOverBox.style.display = 'none';

    flippedCards = []; // 클릭된 카드들 초기화
    createCardContainer();
    startGame();
  }

  createCardContainer();
})