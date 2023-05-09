
let arrowRight = document.getElementById("arrowRight");
let arrowLeft = document.getElementById("arrowLeft");
let imgValorant1 = document.getElementById("imgValorant1");
let imgValorant2 = document.getElementById("imgValorant2");
let imgValorant3 = document.getElementById("imgValorant3");




    // arrowLeft.addEventListener("click", function(){
    //     imgValorant1.classList.remove("img-valorant1");
    //     imgValorant1.classList.add("img-valorant2");
    // });

    // arrowRight.addEventListener("click", function(){
    //     arrowRight.classList.remove("img-valorant1-after")
    // });


    let imgList = ["img/sliders/jett.webp", "img/sliders/ome.webp", "img/sliders/yoru.webp"];
    let contador = 0;
    let imagenes = document.querySelectorAll('.imgs'); 
    
    for (let i = 0; i < imagenes.length; i++) {
        imagenes[i].classList.add('img-valorant-after');
    }
    
    imgValorant1.setAttribute("src", imgList[contador]);
    
    arrowLeft.addEventListener("click", function(){
        if(contador > 0){
            contador --;
        } else {
            contador = imgList.length - 1;
        }
        imgValorant1.setAttribute("src", imgList[contador]);
        // imagenes[contador].classList.remove("img-valorant-right");
        // imagenes[contador].classList.add("img-valorant-left");
    });
    
    arrowRight.addEventListener("click", function(){
        if(contador < imgList.length - 1){
            contador++;
        } else {
            contador = 0;
        } 
        imgValorant1.setAttribute("src", imgList[contador]);
        // imagenes[contador].classList.remove("img-valorant-left");
        // imagenes[contador].classList.add("img-valorant-right");
    });
    

