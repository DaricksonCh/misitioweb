console.log("Tuco-tuco");


let timeGMT = new Date();
console.log(timeGMT);
let timeGMTString = timeGMT.toString();
console.log(timeGMTString);
console.log("===============");

let timeGMTDay = timeGMT.getDay();
console.log(timeGMTDay);
let timeGMTMonth = timeGMT.getMonth();
let mesYear = ["Enero","Febebro","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];
let diaSemana = ["Domingo","Lunes","Martes","Miercoles","Jueves","Viernes","Sabado"];
console.log(diaSemana[timeGMTDay]);
console.log(mesYear[timeGMTMonth]);
console.log("Fecha y hora desfracmentada");
let currenTime = new Date();
console.log("Dia de la semana: " + currenTime.getDay() + " Mes del año " + currenTime.getMonth() + " Get date " + currenTime.getDate() + " Año " + currenTime.getFullYear()
            + " Hora " + currenTime.getHours() + " Minutos " + currenTime.getMinutes()+ " segundos " + currenTime.getSeconds + " milisegundos " + currenTime.getMilliseconds());
console.log("======================");
let newYear2024 = new Date("January 1, 2024");
let fechaActual = new Date();
let newYear2024ms = newYear2024.getTime();
let fechaActualms = fechaActual.getTime();

let milisecDiff = newYear2024ms - fechaActualms;
let diasDiff = milisecDiff / (1000 * 60 * 60 * 24);
console.log("Dias faltantes para el año nuevo " + Math.floor(diasDiff));
let fechaHora = new Date("July 2, 2023 08:00:00 ");
let fechaHorams = fechaHora.getTime();
let fechaDifVot = fechaHora - fechaActualms;
console.log(Math.floor(fechaDifVot / (1000 * 60 * 60 * 24)) );

function calcularTiempoVotaciones(){
    let horasRestabtes = Math.floor(fechaDifVot / (1000 * 60 * 60 * 24));
    console.log(horasRestabtes % 24);
    
}

