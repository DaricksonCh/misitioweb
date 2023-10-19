let bodyRight = document.getElementById('bodyRight');
let bodyLeft = document.getElementById('bodyLeft');
let iconx = document.getElementById('ix');
let iconc = document.getElementById('circle');

bodyRight.addEventListener('click', function () {
  if (bodyRight.classList.contains('body-x')) {
    bodyRight.classList.remove('body-x');
    bodyRight.classList.add('body-rightjs');
    bodyLeft.classList.remove('body-circle');
    bodyLeft.classList.add('body-leftjs');
    iconx.style.color = '#1A2A33'; 
    iconc.style.color = '#A8BFC9'; 
  } else {
    bodyRight.classList.remove('body-rightjs');
    bodyRight.classList.add('body-x');
    bodyLeft.classList.remove('body-leftjs');
    bodyLeft.classList.add('body-circle');
    iconx.style.color = '#A8BFC9';
    iconc.style.color = '#1A2A33';
  }
});
bodyLeft.addEventListener('click', function () {
  if (bodyLeft.classList.contains('body-circle')) {
    bodyLeft.classList.remove('body-circle');
    bodyLeft.classList.add('body-leftjs');
    bodyRight.classList.remove('body-x');
    bodyRight.classList.add('body-rightjs');
    iconx.style.color = '#1A2A33'; 
    iconc.style.color = '#A8BFC9'; 
  }  else {
    bodyLeft.classList.remove('body-leftjs');
    bodyLeft.classList.add('body-circle');
    bodyRight.classList.remove('body-rightjs');
    bodyRight.classList.add('body-x');
    iconx.style.color = '#A8BFC9';
    iconc.style.color = '#1A2A33';
  }
});


function cpu(){
  let timerInterval
  Swal.fire({
    title: 'Trabajando en ello...',
    html: 'Descargando CPU <b></b> milliseconds.',
    timer: 2000,
    timerProgressBar: true,
    didOpen: () => {
      Swal.showLoading()
      const b = Swal.getHtmlContainer().querySelector('b')
      timerInterval = setInterval(() => {
        b.textContent = Swal.getTimerLeft()
      }, 100)
    },
    willClose: () => {
      clearInterval(timerInterval)
    }
  }).then((result) => {
    if (result.dismiss === Swal.DismissReason.timer) {
      console.log('I was closed by the timer')
    }
  })
}

