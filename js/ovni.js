let cohete = document.querySelector(".cohete");
let cohetePositionHeight = 18;
let cohetePositionWidth = 166.5;
let coheteHeight = cohete.clientHeight;
let coheteWidth = cohete.clientWidth;
let containerHeight = document.querySelector(".container").clientHeight;
let containerWidth = document.querySelector(".container").clientWidth;

let earth = document.querySelector('.earth');


let collisionSound = new Audio('/sounds/rocket.wav');
let shotsSound = new Audio('/sounds/shots.wav');

function playCollisionSound() {
  collisionSound.play();
}
function shotsCollisionSound() {
  shotsSound.play();
}

window.addEventListener("keydown", (e) => {
  if (e.key == "ArrowUp" && cohetePositionHeight < (containerHeight - coheteHeight)) {
    cohetePositionHeight += 2;
    cohete.style.bottom = cohetePositionHeight + "vh";
    cohete.style.transform = 'rotate(-65deg)';
    earth.classList.add('earth2');
    playCollisionSound()
  } else if (e.key == "ArrowDown" && cohetePositionHeight > 0) {
    cohetePositionHeight -= 2;
    cohete.style.bottom = cohetePositionHeight + "vh";
    cohete.style.transform = 'rotate(120deg)';
    playCollisionSound()
  } else if (e.key == "ArrowRight" && cohetePositionWidth < (containerWidth - coheteWidth)) {
    cohetePositionWidth += 2;
    cohete.style.left = cohetePositionWidth + "vh";
    cohete.style.transform = 'rotate(25deg)';
    playCollisionSound()
  } else if (e.key == "ArrowLeft" && cohetePositionWidth > 0) {
    cohetePositionWidth -= 2;
    cohete.style.left = cohetePositionWidth + "vh";
    cohete.style.transform = 'scaleX(-1)';
    playCollisionSound()
  } else if (e.code == "Space") {
    shotsCollisionSound();
  
    const projectile = document.createElement("div");
    projectile.classList.add("projectiles");
    projectile.style.bottom = cohetePositionHeight + coheteHeight / 2 + "px";
    projectile.style.left = cohetePositionWidth + coheteWidth / 2 + "px";
    const projectileId = Date.now();
    projectile.id = `projectile-${projectileId}`;
    document.querySelector(".container").appendChild(projectile);
  
    setInterval(() => {
      const projectileElement = document.getElementById(`projectile-${projectileId}`);
      if (projectileElement) {
        const projectilePosition = parseFloat(projectileElement.style.left);
  
        projectileElement.style.left = projectilePosition + 5 + "px";
      }
    }, 10);
  }
});
