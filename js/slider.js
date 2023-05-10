
let arrowRight = document.getElementById("arrowRight");
let arrowLeft = document.getElementById("arrowLeft");
// let imgValorant1 = document.getElementById("imgValorant1");
let imgValorant2 = document.getElementById("imgValorant2");
let imgValorant3 = document.getElementById("imgValorant3");


let imgValorant1 = document.querySelector(".img-valorant1")

let contador = 1;
function plus(){
    contador++;
    if(contador == 4){
        contador = 1;
    }
    anamation2()
}
function  less(){
    contador--;
    if(contador == 0){
        contador = 3;
    }
    anamation();
}
function anamation(){
    if(imgValorant1.classList.contains('img-valorant-left')) {
        imgValorant1.classList.add('img-valorant-left');
        imgValorant1.classList.remove('img-valorant-left');
    }else{
        imgValorant1.classList.remove('img-valorant-left');
        imgValorant1.classList.add('img-valorant-left');
    }
    setTimeout(() => {
        proyectar();
    }, 1000);
    setTimeout(() => {
        imgValorant1.classList.remove('img-valorant-left');
    }, 1000);
}
function anamation2(){
    if(imgValorant1.classList.contains('img-valorant-right')) {
        imgValorant1.classList.add('img-valorant-right');
        imgValorant1.classList.remove('img-valorant-right');
    }else{
        imgValorant1.classList.remove('img-valorant-right');
        imgValorant1.classList.add('img-valorant-right');
    }
    setTimeout(() => {
        proyectar();
    }, 1000);
    setTimeout(() => {
        imgValorant1.classList.remove('img-valorant-right');
    }, 1000);
}

function proyectar(){
    if(contador == 1){
        imgValorant1.setAttribute('src', ('img/sliders/jett.webp'));
    }else if(contador == 2){
        imgValorant1.setAttribute('src', ('img/sliders/ome.webp'));
    }else if(contador == 3){
        imgValorant1.setAttribute('src', ('img/sliders/yoru.webp'));
    }
}

arrowRight.addEventListener('click', plus);
arrowLeft.addEventListener('click', less);

    // arrowLeft.addEventListener("click", function(){
    //     imgValorant1.classList.remove("img-valorant1");
    //     imgValorant1.classList.add("img-valorant2");
    // });

    // arrowRight.addEventListener("click", function(){
    //     arrowRight.classList.remove("img-valorant1-after")
    // });


    // let imgList = ["img/sliders/jett.webp", "img/sliders/ome.webp", "img/sliders/yoru.webp"];
    // let contador = 0;
    // let imagenes = document.querySelectorAll('.imgs'); 
    
    // for (let i = 0; i > imagenes.length; i++) {
    //     imagenes[i].classList.add('img-valorant-left');
    // }
    
    // imgValorant1.setAttribute("src", imgList[contador]);
    
    // arrowLeft.addEventListener("click", function(){
    //     if(contador > 0){
    //         contador --;
    //     } else {
    //         contador = imgList.length - 1;
    //     }
    //     imgValorant1.setAttribute("src", imgList[contador]);
        
    // });
    
    // arrowRight.addEventListener("click", function(){
    //     if(contador < imgList.length - 1){
    //         contador++;
    //     } else {
    //         contador = 0;
    //     } 
    //     imgValorant1.setAttribute("src", imgList[contador]);
    //     // imagenes[contador].classList.remove("img-valorant-left");
    //     // imagenes[contador].classList.add("img-valorant-right");
    // });
    
    // function alterar1(){
    //     // imgValorant1.classList.add("img-valorant-left");
    //     // imgValorant2.classList.remove("img-valorant-left");
    //     // imgValorant3.classList.remove("img-valorant-left");

    //     if(contador == 0) {
    //         img-valorant1.classList.remove("img-valorant-left");
    //         img-valorant1.classList.remove("img-valorant-left");
    //         img-valorant1.classList.remove("img-valorant-left");
    //     }else if(contador == 1){
    //         img-valorant1.classList.remove("img-valorant-left");
    //         img-valorant1.classList.remove("img-valorant-left");
    //         img-valorant1.classList.remove("img-valorant-left");
    //     }else{
    //         img-valorant1.classList.remove("img-valorant-left");
    //         img-valorant1.classList.remove("img-valorant-left");
    //         img-valorant1.classList.remove("img-valorant-left");
    //     }
    // }
    // function alterar2(){
    //     imgValorant1.classList.remove("img-valorant-right");
    //     imgValorant2.classList.add("img-valorant-right");
    //     imgValorant3.classList.remove("img-valorant-right");
    // }
