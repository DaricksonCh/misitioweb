let allAliens = document.querySelectorAll(".aliens");


window.addEventListener("keydown", (e) => {
  for(let i = 0; i < allAliens.length; i++){
    if (e.key == "ArrowDown") {
      allAliens[i].classList.remove("aliens")
      allAliens[i].classList.add("aliensR")
    }else if(e.key == "ArrowUp"){
      allAliens[i].classList.add("aliens")
      allAliens[i].classList.remove("aliensR")
    }
  }
});