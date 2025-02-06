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

  const grid = document.querySelector('.grid');
  const result = document.querySelector('.result');
  let flippedCards = [];
  let matchedCards = []
  let firstCardImg, secondCardImg;


  // 카드 컨테이너 생성
  function createCardContainer() {
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
    if (matchedCards.length === cardArray.length/2) {
      const title = document.querySelector('h3');
      title.textContent = '🎉Congratulations! You found all the matching cards!🎉✨';
    }
  }

  createCardContainer();
})