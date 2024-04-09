(()=>{
  const graphicWrap = document.querySelectorAll('.graphic__item-wrap');
  const graphicItem = document.querySelectorAll('.graphic__item');
  const bubbleStep = document.querySelectorAll('.bubble__step');
  const floorLift = document.querySelector('.floor-lift')
  let currentItem = graphicItem[0];
  let ioIndex;


  const io = new IntersectionObserver((entries, observer)=>{
    ioIndex = entries[0].target.dataset.index * 1;
  })

  for(let i = 0; i < graphicItem.length; i++) {
    graphicItem[i].dataset.index = i
  }
  for(let j = 0; j < bubbleStep.length; j++){
    io.observe(bubbleStep[j])
    bubbleStep[j].dataset.index = j
  }

  function activate() {
    currentItem.classList.add('visible');
    
    graphicWrap.forEach((item)=>{
      item.classList.remove('visible')
      if(currentItem.parentElement === item) {
        item.classList.add('visible')
        if(currentItem.classList.contains('visible')) {
          floorLiftAni();
          if(currentItem.dataset.index === 19) {
            currentItem.classList.add('visible')
          }
        }
      }
    })
  }
  function inactivate() {
    currentItem.classList.remove('visible');
  }

  function floorLiftAni() {
    window.addEventListener("mousewheel", e => {
      if(e.deltaY > 0) {
        floorLift.classList.add('floor-lift-up');
        floorLift.classList.remove('floor-lift-down');
      } else {
        floorLift.classList.add('floor-lift-down');
        floorLift.classList.remove('floor-lift-up');
      }
    });
  }


  window.addEventListener('scroll', ()=>{
    let step;
    let boundRect;
    
    for(let i = ioIndex - 1; i<ioIndex + 2; i++) {
      step = bubbleStep[i];
      if(!step) continue;
      boundRect = step.getBoundingClientRect();

      if(boundRect.top > window.innerHeight * 0.1 && boundRect.top < window.innerHeight * 0.8) {
        inactivate();
        currentItem = graphicItem[step.dataset.index];
        activate();
      }
    }
  })
  activate();
})();
