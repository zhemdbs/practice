const button = document.querySelector('.play-btn');

button.addEventListener('click', () => {
  playVideo();
})

function playVideo() {
  const videoElement = document.querySelector('.video');
  const videoStatus = document.querySelector('.play-btn span')
  if(videoStatus.innerHTML === 'play') {
    videoElement.play();
    videoElement.classList.add('play');
    videoElement.classList.remove('stop');
    videoStatus.innerHTML ='stop';
  } else {
    videoElement.pause();
    videoElement.classList.remove('play');
    videoElement.classList.add('stop');
    videoStatus.innerHTML ='play';
  }
}