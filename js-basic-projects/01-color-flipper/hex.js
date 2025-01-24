const main = document.getElementById("main");
const btn = document.getElementById('btn');
const color = document.querySelector('.color');
const hexValues = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

btn.addEventListener('click', () => {
  getRandomColor();
})

function getRandomColor() {
  let colorValue = "#";

  for (let i = 0; i < 6; i++) {
    const hex = Math.floor(Math.random() * hexValues.length);
    colorValue += hexValues[hex];
  }

  color.innerText = colorValue;
  main.style.backgroundColor = colorValue;
}
