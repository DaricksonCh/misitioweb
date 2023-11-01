let cohete = document.querySelector(".cohete");
let cohetePositionHeight = 18;
let cohetePositionWidth = 169;
let coheteHeight = cohete.clientHeight;
let coheteWidth = cohete.clientWidth;
let containerHeight = document.querySelector(".container").clientHeight;
let containerWidth = document.querySelector(".container").clientWidth;

window.addEventListener("keydown", (e) => {
  if (e.key == "ArrowUp" && cohetePositionHeight < (containerHeight - coheteHeight)) {
    cohetePositionHeight += 2;
    cohete.style.bottom = cohetePositionHeight + "vh";
  } else if (e.key == "ArrowDown" && cohetePositionHeight > 0) {
    cohetePositionHeight -= 2;
    cohete.style.bottom = cohetePositionHeight + "vh";
  } else if (e.key == "ArrowRight" && cohetePositionWidth < (containerWidth - coheteWidth)) {
    cohetePositionWidth += 2;
    cohete.style.left = cohetePositionWidth + "vh";
    cohete.style.transform = 'scaleX(1)';
  } else if (e.key == "ArrowLeft" && cohetePositionWidth > 0) {
    cohetePositionWidth -= 2;
    cohete.style.left = cohetePositionWidth + "vh";
    cohete.style.transform = 'scaleX(-1)';
  } else if (e.key == "ArrowRight" && cohetePositionWidth >= containerWidth) {
    cohetePositionWidth = containerWidth - coheteWidth;
    cohete.style.left = cohetePositionWidth + "vh";
    cohete.style.transform = 'scaleX(1)';
  }
});
