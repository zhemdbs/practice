const inputs = document.querySelectorAll('.option_box input');

inputs.forEach((inputEl) => {
  inputEl.addEventListener('change', handleUpdateCustom)
})

function handleUpdateCustom() {
  console.log('변화중');
}