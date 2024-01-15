const keys = document.querySelectorAll('.key');

keys.forEach((key) => {
  key.addEventListener('click', () => {
    const audio = document.querySelector(`audio[data-key="${key.dataset.key}"]`);
    // console.log('click',key, key.dataset, audio);
    key.classList.add('playing');
    audio.play();
    setTimeout(() => {
      key.classList.remove('playing');
    }, 400);
  })
})
