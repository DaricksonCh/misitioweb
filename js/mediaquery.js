let barMenu = document.getElementById("barMenu");

barMenu.addEventListener("click", function()  {
    alert("Funciona");
})

let mainMenu = document.getElementById("mainMenu");
mainMenu.addEventListener("click", function(){
    mainMenu.classList.add("main-menu-visible");
    mainMenu.classList.remove("main-menu-visible");
})