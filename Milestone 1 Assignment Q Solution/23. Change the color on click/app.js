const colors = ["red", "blue", "green", "yellow", "orange", "purple"]; // Array of colors
const colorBtn = document.querySelector("#colorBtn");

colorBtn.addEventListener("click", changeColor);

function changeColor() {
  const randomColor = colors[Math.floor(Math.random() * colors.length)]; // Get a random color from the array
  document.body.style.backgroundColor = randomColor; // Change the background color of the page
}
