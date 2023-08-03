
let submit = document.querySelector(".submit");
let inputs = document.querySelectorAll(".inputs");
function validacion(event){
    for(let i = 0; i < inputs.length; i++){
        if(inputs[i].value === ""){
            event.preventDefault(); 
            alert("Tienes que registrar algo");
            inputs[i].style.background = "red";
            inputs[i].style.color = "white";
            break; 
        }else{
            inputs[i].style.background = "rgb(10, 153, 10)";
        }
    }
}
submit.addEventListener("click", validacion);
const diaInput = document.getElementById("dia");
const mesInput = document.getElementById("mes");
const anioInput = document.getElementById("anio");
const horaInput = document.getElementById("hora");
const minutosInput = document.getElementById("minutos");
const resultadoElement = document.getElementById("resultado");


const formulario = document.querySelector("form");
formulario.addEventListener("submit", function (event) {
    event.preventDefault(); 
    calcularTiempoRestante();
});

function calcularTiempoRestante() { 
    let dia = parseInt(diaInput.value);
    let mes = parseInt(mesInput.value);
    let anio = parseInt(anioInput.value);
    let hora = parseInt(horaInput.value);
    let minutos = parseInt(minutosInput.value);

    let fechaActual = new Date();
    let fechaLimite = new Date(anio, mes - 1, dia, hora, minutos);

    let diferencia = fechaLimite - fechaActual;

    if (diferencia < 0 || fechaLimite.getDate() >= 22) {
        resultadoElement.innerHTML = "El plazo ha expirado. No es posible subir el archivo.";
    } else {
    let diasRestantes = Math.floor(diferencia / (1000 * 60 * 60 * 24));
    diferencia -= diasRestantes * (1000 * 60 * 60 * 24);
    let horasRestantes = Math.floor(diferencia / (1000 * 60 * 60));
    diferencia -= horasRestantes * (1000 * 60 * 60);
    let minutosRestantes = Math.floor(diferencia / (1000 * 60));

    resultadoElement.innerHTML = "Tiempo faltante: " + diasRestantes + " días, " + horasRestantes + " horas y " + minutosRestantes + " minutos. Favor subirlo entre las fechas establecidas";
    }
}
