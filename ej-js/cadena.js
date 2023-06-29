let submit = document.querySelector(".submit");
let inputs = document.querySelectorAll(".inputs");

function validacion(){
    for(i = 0; i < inputs.length; i++){
        if(inputs[i].value == "July 29, 2023"){
            alert("Registro exitoso")
        }
    }
    alert();
}
