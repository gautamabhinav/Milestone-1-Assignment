const image = document.getElementById("myImage");
let posX = 0;
let posY = 0;
const speed = 10;

document.addEventListener("keydown", function(event) {
  switch(event.key) {
    case "ArrowUp":
      posY -= speed;
      break;
    case "ArrowDown":
      posY += speed;
      break;
    case "ArrowLeft":
      posX -= speed;
      break;
    case "ArrowRight":
      posX += speed;
      break;
  }
  image.style.top = posY + "px";
  image.style.left = posX + "px";
});
