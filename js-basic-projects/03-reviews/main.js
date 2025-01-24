const reviewsProfile = [
  {
    index: 1,
    name: "Susan Smith",
    job: 'web developer',
    img: 'https://www.course-api.com/images/people/person-1.jpeg',
    disc: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry"
  },
  {
    index: 2,
    name: "Anna Johnson",
    job: 'web designer',
    img: 'https://www.course-api.com/images/people/person-2.jpeg',
    disc: "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal."
  },
  {
    index: 3,
    name: "Bill Anderson",
    job: 'the boss',
    img: 'https://www.course-api.com/images/people/person-3.jpeg',
    disc: "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic."
  },
  {
    index: 4,
    name: "Peter Jones",
    job: 'intern',
    img: 'https://www.course-api.com/images/people/person-4.jpeg',
    disc: "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag."
  }
]

const reviewsList = document.querySelector('.reviews__list');
const randomBtn = document.querySelector('.random__btn');
const swiper = new Swiper('.reviews__box', {
  slidePerView: 1,
  spaceBetween: 20,
  loop: false,

  // Navigation arrows
  navigation: {
    nextEl: '.btn-next',
    prevEl: '.btn-prev',
  },
});

randomBtn.addEventListener('click', randomReviews);

dataReviews();


function dataReviews() {
  const reviews = reviewsProfile.map(person => {
    return `
    <li class="reviews__item swiper-slide">
      <div class="reviews__image">
        <img src="${person.img}" alt="${person.name}">
      </div>
      <div class="reviews__info">
        <div class="reviews__name">
          <p>${person.name}</p>
        </div>
        <div class="reviews__job">
          <p>${person.job}</p>
        </div>
        <div class="reviews__disc">
          <p>${person.disc}</p>
        </div>
      </div>
    </li>`
  }).join('');

  reviewsList.innerHTML = reviews;
}

function randomReviews() {
  const randomIndex = Math.floor(Math.random() * reviewsProfile.length);
  const swiperIndex = swiper.activeIndex;

  if(randomIndex === swiperIndex) {
    randomReviews();
    return;
  } else {
    swiper.slideTo(randomIndex);
  }
}