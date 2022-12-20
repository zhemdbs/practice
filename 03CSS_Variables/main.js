const titleEmphasis = document.querySelector('.title > span')
const inputs = document.querySelectorAll('.option_box input');
const spacing = document.querySelector('#spacing');
const blur = document.querySelector('#blur');
const baseColor = document.querySelector('#base_color');

const imgArea = document.querySelector('.img_area');
const imgEl = document.querySelector('.img_area > img');

spacing.addEventListener('change', handleSpacingChange)
blur.addEventListener('change', handleBlurChange)
baseColor.addEventListener('change', handleBaseColorChange)

function handleSpacingChange() {
  target = spacing.value;

  imgArea.style.padding = target + 'px';
}

function handleBlurChange() {
  target = blur.value;

  imgArea.style.filter = 'blur(' + target + 'px)'
}

function handleBaseColorChange() {
  target = baseColor.value;

  imgArea.style.backgroundColor = target;
  titleEmphasis.style.color = target;
}