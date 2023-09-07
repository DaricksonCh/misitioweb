// (() => {
//     'use strict'
  
//     // Fetch all the forms we want to apply custom Bootstrap validation styles to
//     const forms = document.querySelectorAll('.needs-validation')
  
//     // Loop over them and prevent submission
//     Array.from(forms).forEach(form => {
//       form.addEventListener('submit', event => {
//         if (!form.checkValidity()) {
//           event.preventDefault()
//           event.stopPropagation()
//         }
  
//         form.classList.add('was-validated')
//       }, false)
//     })
//   })()


//   const myCarouselElement = document.querySelector('#myCarousel')

// const carousel = new bootstrap.Carousel(myCarouselElement, {
//   interval: 5000,
//   touch: false
// })
// const myCarousel = document.getElementById('myCarousel')

// myCarousel.addEventListener('slide.bs.carousel', event => {

// })

let inputNombre = document.getElementById("inputNombre");
const alertTrigger = document.getElementById("formText");

if(alertTrigger) {
  alertTrigger.addEventListener("click", () =>{
    if(inputNombre.value == ""){
      alert('La informacion no puede ir vacia', 'danger');
    }else{
      alert('Exito', 'info');
    }
  })
}