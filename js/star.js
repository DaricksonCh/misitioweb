let calification = document.getElementById('calification');

let formStar = document.getElementById('formStar');

let starElement = document.getElementById('starElement');


formStar.addEventListener("submit", function(e) {
  e.preventDefault();
  let starsHTML = '';

  let calificationValue = parseInt(calification.value);

  if (calificationValue >= 1 && calificationValue <= 5) {
    for (let i = 1; i <= 5; i++) {
      let starType = i <= calificationValue ? 'fa-solid' : 'fa-regular';
      starsHTML += `<i class="${starType} fa-star"></i>`;
    }
  } else {
    starsHTML = 'Ponga un valor de 1 a 5';
  }

  starElement.innerHTML = starsHTML;
});

