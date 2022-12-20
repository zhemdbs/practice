const inputs = document.querySelectorAll('.customize_area > input');
const imgEl = document.querySelector('.img_area')

inputs.forEach((inputEl) => {
  inputEl.addEventListener('change', handleUpdate);
})
inputs.forEach((inputEl) => {
  inputEl.addEventListener('mousemove', handleUpdate);
})


function handleUpdate() {
  console.log(this.name);
  console.log(this.value);

  const px = this.dataset.sizing || '';
  document.documentElement.style.setProperty(`--${this.name}`, this.value + px)
}