// let califications = document.querySelectorAll('.calification');

// let formStar = document.getElementById('formStar');

// let starElement = document.getElementById('starElement');


// formStar.addEventListener("submit", function(e) {
//   e.preventDefault();
//   let starsHTML = '';

//   let calificationValue = parseFloat(calification.value);

//   if (calificationValue >= 0 && calificationValue <= 5) {
//     if(calificationValue >= 0 && calificationValue <= 0.7){
//       starsHTML += `<i class="fa-solid fa-star-half-stroke"></i>`;
//     }else if(calificationValue >= 0.8 && calificationValue <= 1.4){
//       starsHTML += `<i class="fa-solid fa-star"></i>`;
//     }else if(calificationValue >= 1.5 && calificationValue <= 1.7){
//       starsHTML += `<i class="fa-solid fa-star"></i>`;
//       starsHTML += `<i class="fa-solid fa-star-half-stroke"></i>`;
//     }else if(calificationValue >= 1.8 && calificationValue <= 2.3){
//       starsHTML += `<i class="fa-solid fa-star"></i>`;
//       starsHTML += `<i class="fa-solid fa-star"></i>`;
//       starsHTML += `<i class="fa-solid fa-star-half-stroke"></i>`;
//     }else if(calificationValue >= 2.4 && calificationValue <= 3.3){
//       starsHTML += `<i class="fa-solid fa-star"></i>`;
//       starsHTML += `<i class="fa-solid fa-star"></i>`;
//       starsHTML += `<i class="fa-solid fa-star"></i>`;
//     }else if(calificationValue >= 3.4 && calificationValue <= 3.7){
//       starsHTML += `<i class="fa-solid fa-star"></i>`;
//       starsHTML += `<i class="fa-solid fa-star"></i>`;
//       starsHTML += `<i class="fa-solid fa-star"></i>`;
//       starsHTML += `<i class="fa-solid fa-star-half-stroke"></i>`;
//     }else if(calificationValue >= 3.8 && calificationValue <= 4.3){
//       starsHTML += `<i class="fa-solid fa-star"></i>`;
//       starsHTML += `<i class="fa-solid fa-star"></i>`;
//       starsHTML += `<i class="fa-solid fa-star"></i>`;
//       starsHTML += `<i class="fa-solid fa-star"></i>`;
//     }else if(calificationValue >= 4.4 && calificationValue <= 4.7){
//       starsHTML += `<i class="fa-solid fa-star"></i>`;
//       starsHTML += `<i class="fa-solid fa-star"></i>`;
//       starsHTML += `<i class="fa-solid fa-star"></i>`;
//       starsHTML += `<i class="fa-solid fa-star"></i>`;
//       starsHTML += `<i class="fa-solid fa-star-half-stroke"></i>`;
//     }else if(calificationValue >= 4.8 && calificationValue <= 5){
//       starsHTML += `<i class="fa-solid fa-star"></i>`;
//       starsHTML += `<i class="fa-solid fa-star"></i>`;
//       starsHTML += `<i class="fa-solid fa-star"></i>`;
//       starsHTML += `<i class="fa-solid fa-star"></i>`;
//       starsHTML += `<i class="fa-solid fa-star"></i>`;
//     }
//     for (let i = 1; i <= 5; i++) {

//     }
//   } else {
//     starsHTML = 'Ponga un valor de 0 a 5';
//   }

//   starElement.innerHTML = starsHTML;
// });

let formStar = document.getElementById('formStar');
let starElement = document.getElementById('starElement');

formStar.addEventListener("submit", function (e) {
  e.preventDefault();
  let starsHTML = '';
  let sum = 0;

  document.querySelectorAll('.calification').forEach(function (calificationInput) {
    let calificationValue = parseFloat(calificationInput.value);
    if (calificationValue >= 0 && calificationValue <= 5) {
      let fullStars = Math.floor(calificationValue);
      let halfStar = calificationValue - fullStars >= 0.1;
      for (let i = 1; i <= 5; i++) {
        if (i <= fullStars) {
          starsHTML += `<i class="fa-solid fa-star"></i>`;
        } else if (i === fullStars + 1 && halfStar) {
          starsHTML += `<i class="fa-solid fa-star-half-stroke"></i>`;
        } else {
          starsHTML += `<i class="fa-regular fa-star"></i>`;
        }
      }
      starsHTML += '<br>'; 
      sum += calificationValue; 
    } else {
      starsHTML += 'Solo ingrese valores del 0 al 5<br>'; 
    }
  });
  starElement.innerHTML = starsHTML;
  let promedio = sum / 5;
  console.log( `Suma: ${sum.toFixed(2)}, Promedio: ${promedio.toFixed(2)}`);
  let promedioFullStars = Math.floor(promedio);
  let promedioHalfStar = promedio - promedioFullStars >= 0.5;

  for (let i = 1; i <= 5; i++) {
    if (i <= promedioFullStars) {
      starsHTML += `<i class="fa-solid fa-star"></i>`;
    } else if (i === promedioFullStars + 1 && promedioHalfStar) {
      starsHTML += `<i class="fa-solid fa-star-half-stroke"></i>`;
    } else {
      starsHTML += `<i class="fa-regular fa-star"></i>`;
    }
  }
  starsHTML += '<br>'; 
  starElement.innerHTML = starsHTML + `${promedioFullStars} de 5`;
});

  
let formPoint = document.getElementById('formPoint');
let progress = document.querySelectorAll('.progress');

formPoint.addEventListener('submit', (e) => {
  e.preventDefault();
  let value = 0;
  formPoint.querySelectorAll('.point').forEach((pointInput,i) => {
    let pointValue = parseFloat(pointInput.value);
    if(pointValue < 0 || pointValue > 100){
      alert(`Ingrese valor entre 0 a 100, fallo en el input ${i + 1} por lo que no se graficaran`);
      return;
    }else{
      value += pointValue;
      progress[i].value = pointValue;
      progress[i].classList.add('graphicBackground')
    }
  });
});

