const queContainer = document.querySelectorAll('.que');
const closeBtn = document.querySelector('.faq_btn')

queContainer.forEach((queEl) => {
  queEl.addEventListener('click', function () {
    queEl.classList.contains('is-active') ? 
      queEl.classList.remove('is-active') : queEl.classList.add('is-active')
  })

  closeBtn.addEventListener('click', function () {
    queEl.classList.remove('is-active')
  })
})