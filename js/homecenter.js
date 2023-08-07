lupa = document.getElementById('lupa');
containerMobile = document.getElementById('containerMobile');
search = document.getElementById('search');
xHidden = document.getElementById('xHidden');



lupa.addEventListener("click", function() {
    containerMobile.style.display = 'none'; 
    search.style.display = 'flex'; 
    xHidden.addEventListener("click",function(){
        search.style.display = 'none';
        containerMobile.style.display = 'flex'; 
    });
});