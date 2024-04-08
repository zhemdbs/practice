(()=>{
  const graphicWrap = document.querySelectorAll('.graphic__item-wrap');
  const graphicItem = document.querySelectorAll('.graphic__item');
  const bubbleWrap = document.querySelector('.scroll__bubble');
  const bubbleStep = document.querySelectorAll('.bubble__step');
  let currentItem;

  for(let i = 0; i < graphicItem.length; i++) {
    graphicItem[i].dataset.index = i
    for(let j = 0; j < bubbleStep.length; j++){
      bubbleStep[j].dataset.index = j
    }
    
    window.addEventListener('scroll', ()=>{
      let step;
      let boundRect;
      
      for(let i = 0; i<bubbleStep.length; i++) {
        step = bubbleStep[i];
        boundRect = step.getBoundingClientRect();
        
        if(boundRect.top > window.innerHeight * 0.1 && boundRect.top < window.innerHeight * 0.8) {
          if(currentItem) {
            currentItem.classList.remove('visible');
          }
          currentItem = graphicItem[step.dataset.index];
          currentItem.classList.add('visible');

          graphicWrap.forEach((item)=>{
            console.log(currentItem.parentElement === item);
            item.classList.remove('visible')
            if(currentItem.parentElement === item) {
              item.classList.add('visible')
            }
          })
        }
      }
    })
  }
})();
