let imgBox = document.getElementById("imgBox");
let imgMini1 = document.getElementById("imgMini1");
let imgMini2 = document.getElementById("imgMini2");
let imgMini3 = document.getElementById("imgMini3");
let imgMini4 = document.getElementById("imgMini4");


/*  ------- BOTONES CAMBIO DE IMG ------- */

imgMini1.addEventListener("click", function(){
    imgBox.setAttribute("src","img/sneakers/producto1.png")
    boxImgMini1.classList.add("box-img-mini")
    boxImgMini2.classList.remove("box-img-mini")
    boxImgMini3.classList.remove("box-img-mini")
    boxImgMini4.classList.remove("box-img-mini")
    boxImgMini1.classList.add("img-mini-act")
    boxImgMini2.classList.remove("img-mini-act")
    boxImgMini3.classList.remove("img-mini-act")
    boxImgMini4.classList.remove("img-mini-act")
});
imgMini2.addEventListener("click", function(){
    imgBox.setAttribute("src","img/sneakers/image-product-2.png")
    boxImgMini1.classList.remove("box-img-mini")
    boxImgMini2.classList.add("box-img-mini")
    boxImgMini3.classList.remove("box-img-mini")
    boxImgMini4.classList.remove("box-img-mini")
    boxImgMini1.classList.remove("img-mini-act")
    boxImgMini2.classList.add("img-mini-act")
    boxImgMini3.classList.remove("img-mini-act")
    boxImgMini4.classList.remove("img-mini-act")
});
imgMini3.addEventListener("click", function(){
    imgBox.setAttribute("src","img/sneakers/image-product-3.png")
    boxImgMini1.classList.remove("box-img-mini")
    boxImgMini2.classList.remove("box-img-mini")
    boxImgMini3.classList.add("box-img-mini")
    boxImgMini4.classList.remove("box-img-mini")
    boxImgMini1.classList.remove("img-mini-act")
    boxImgMini2.classList.remove("img-mini-act")
    boxImgMini3.classList.add("img-mini-act")
    boxImgMini4.classList.remove("img-mini-act")
});
imgMini4.addEventListener("click", function(){
    imgBox.setAttribute("src","img/sneakers/image-product-4.png")
    boxImgMini1.classList.remove("box-img-mini")
    boxImgMini2.classList.remove("box-img-mini")
    boxImgMini3.classList.remove("box-img-mini")
    boxImgMini4.classList.add("box-img-mini")
    boxImgMini1.classList.remove("img-mini-act")
    boxImgMini2.classList.remove("img-mini-act")
    boxImgMini3.classList.remove("img-mini-act")
    boxImgMini4.classList.add("img-mini-act")
});

// function cambiarImagen(nombreImagen, mini) {
//     imgBox.setAttribute("src", `img/sneakers/${nombreImagen}.png`);
//     imgMinis.forEach(imgMini => imgMini.classList.remove("box-img-mini", "img-mini-act"));
//     mini.classList.add("box-img-mini", "img-mini-act");
// }

// const imgMinis = document.querySelectorAll(".img-mini");
// imgMinis.forEach((imgMini, i) => imgMini.addEventListener("click", () => cambiarImagen(`producto${i + 1}`, imgMini)));


// imgMini1.addEventListener("click", function(){
//     cambiarImagen("producto1", imgMini1);
//     imgBox.classList.add("rotate")
// });

// imgMini2.addEventListener("click", function(){
//     cambiarImagen("image-product-2", imgMini2);
//     imgBox.classList.add("rotate")
// });

// imgMini3.addEventListener("click", function(){
//     cambiarImagen("image-product-3", imgMini3);
//     imgBox.classList.add("rotate")
// });

// imgMini4.addEventListener("click", function(){
//     cambiarImagen("image-product-4", imgMini4);
//     imgBox.classList.add("rotate")
// });

/* -------- BOTONES DE COMPRA ------ */

let btnRestar = document.getElementById("btnRestar");
let btnSumar = document.getElementById("btnSumar");
let btnCantidad = document.getElementById("btnCantidad");
let cantBox = document.getElementById("cantBox");   
// valor total y unitario
let valorUnitario = 199000;
let valorUnitarioTxt = valorUnitario.toString();
/* p.o.o */
let valorUnitarioPeso = new Intl.NumberFormat().format(valorUnitario);
let valorTotal = document.getElementById("valorTotal");
let valorTotalInt = 0;




btnRestar.addEventListener("click", function() {
    let numeroElementosTxt = document.getElementById("numeroElementos").innerHTML;
    let numeroElementosInt = parseInt(numeroElementosTxt);
    if(numeroElementosInt > 0){
        let totalElementosInt = numeroElementosInt - 1 ;
        let totalElementosTxt = totalElementosInt.toString();
        numeroElementos.innerHTML = totalElementosTxt;
        valorTotalInt = valorUnitario * totalElementosInt;
        valorTotal.innerHTML = "$" + new Intl.NumberFormat().format(valorTotalInt);
    }
});

btnSumar.addEventListener("click",function(){
    let numeroElementosTxt = document.getElementById("numeroElementos").innerHTML;
    let numeroElementosInt = parseInt(numeroElementosTxt);
    if(numeroElementosInt < 10){
        let totalElementosInt = numeroElementosInt + 1;
        let totalElementosTxt = totalElementosInt.toString();
        numeroElementos.innerHTML = totalElementosTxt;
        valorTotalInt = valorUnitario * totalElementosInt;
        valorTotal.innerHTML = "$" + new Intl.NumberFormat().format(valorTotalInt);
    }

})
// let click  = 0;
// btnSumar.addEventListener("click", function(){
//     click = click +1;
//     btnCantidad.innerHTML = click;
//     if(click > 10){
//         btnCantidad.innerHTML = 10;
//         click = click = 10;
//     }
// })
// btnRestar.addEventListener("click",function(){
//     click = click -1;
//     btnCantidad.innerHTML = click;
//     if(click < 0) {
//         btnCantidad.innerHTML = 0;
//         click = click = 0;
//     }
// })


/* light-box */
let lightBox = document.getElementById("lightBox");
let btnX = document.getElementById("btnX");
imgBox.addEventListener("click", function(){
    lightBox.classList.remove("light-hidden");
});
btnX.addEventListener("click", function(){
    lightBox.classList.add("light-hidden")
})  
let imgMini11 = document.getElementById("imgMini11");
let imgMini22 = document.getElementById("imgMini22");
let imgMini33 = document.getElementById("imgMini33");
let imgMini44 = document.getElementById("imgMini44");
let imgBox11 = document.getElementById("imgBox11");
let btnBack = document.getElementById("btnBack");
let btnFront = document.getElementById("btnFront");

imgMini11.addEventListener("click", function(){
        imgBox11.setAttribute("src","img/sneakers/producto1.png")
        boxImgMini11.classList.add("box-img-mini")
        boxImgMini22.classList.remove("box-img-mini")
        boxImgMini33.classList.remove("box-img-mini")
        boxImgMini44.classList.remove("box-img-mini")
});
imgMini22.addEventListener("click", function(){
    imgBox11.setAttribute("src","img/sneakers/image-product-2.png")
    boxImgMini11.classList.remove("box-img-mini")
    boxImgMini22.classList.add("box-img-mini")
    boxImgMini33.classList.remove("box-img-mini")
    boxImgMini44.classList.remove("box-img-mini")
});
imgMini33.addEventListener("click", function(){
    imgBox11.setAttribute("src","img/sneakers/image-product-3.png")
    boxImgMini11.classList.remove("box-img-mini")
    boxImgMini22.classList.remove("box-img-mini")
    boxImgMini33.classList.add("box-img-mini")
    boxImgMini44.classList.remove("box-img-mini")
});
imgMini44.addEventListener("click", function(){
    imgBox11.setAttribute("src","img/sneakers/image-product-4.png")
    boxImgMini11.classList.remove("box-img-mini")
    boxImgMini22.classList.remove("box-img-mini")
    boxImgMini33.classList.remove("box-img-mini")
    boxImgMini44.classList.add("box-img-mini")
});

let imgList = ["img/sneakers/producto1.png", "img/sneakers/image-product-2.png", "img/sneakers/image-product-3.png", "img/sneakers/image-product-4.png"];
let contador = 0;

imgBox11.setAttribute("src", imgList[contador]);

btnBack.addEventListener("click", function(){
    if (contador > 0){
        contador--;
    }else{
        contador = imgList.length -1;
    }
    imgBox11.setAttribute("src",imgList[contador]);

    boxImgMini11.classList.add("box-img-mini");
    boxImgMini22.classList.add("box-img-mini");
    boxImgMini33.classList.add("box-img-mini");
    boxImgMini44.classList.add("box-img-mini");

    if(contador == 0) {
        boxImgMini22.classList.remove("box-img-mini");
        boxImgMini33.classList.remove("box-img-mini");
        boxImgMini44.classList.remove("box-img-mini");
    }else if(contador == 1){
        boxImgMini11.classList.remove("box-img-mini");
        boxImgMini33.classList.remove("box-img-mini");
        boxImgMini44.classList.remove("box-img-mini");
    }else if(contador == 2){
        boxImgMini11.classList.remove("box-img-mini");
        boxImgMini22.classList.remove("box-img-mini");
        boxImgMini44.classList.remove("box-img-mini");
    }else{
        boxImgMini11.classList.remove("box-img-mini");
        boxImgMini22.classList.remove("box-img-mini");
        boxImgMini33.classList.remove("box-img-mini");
    }
    
});
btnFront.addEventListener("click",function(){
    if(contador <  imgList.length - 1){
        contador++;
    }else{
        contador = 0;
    } 
    imgBox11.setAttribute("src",imgList[contador]);

    boxImgMini11.classList.add("box-img-mini");
    boxImgMini22.classList.add("box-img-mini");
    boxImgMini33.classList.add("box-img-mini");
    boxImgMini44.classList.add("box-img-mini");

    if(contador == 0) {
        boxImgMini22.classList.remove("box-img-mini");
        boxImgMini33.classList.remove("box-img-mini");
        boxImgMini44.classList.remove("box-img-mini");
    }else if(contador == 1){
        boxImgMini11.classList.remove("box-img-mini");
        boxImgMini33.classList.remove("box-img-mini");
        boxImgMini44.classList.remove("box-img-mini");
    }else if(contador == 2){
        boxImgMini11.classList.remove("box-img-mini");
        boxImgMini22.classList.remove("box-img-mini");
        boxImgMini44.classList.remove("box-img-mini");
    }else{
        boxImgMini11.classList.remove("box-img-mini");
        boxImgMini22.classList.remove("box-img-mini");
        boxImgMini33.classList.remove("box-img-mini");
    }
});


/*-------------- carrito --------------*/

let addCart = document.getElementById("addCart");
let numeroPlus = document.getElementById("numeroPlus");
addCart.addEventListener("click", function(){

        numeroPlus.classList.remove("numero-hidden");


});