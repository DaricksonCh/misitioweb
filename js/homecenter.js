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

containerXAnna = document.getElementById('containerXAnna');
containerAna = document.getElementById('containerAna');
containerChat = document.getElementById('containerChat');


containerAna.addEventListener("click",function(){
    containerChat.style.display = 'none';
    containerXAnna.style.display = 'flex';
    containerXAnna.addEventListener("click",function(){
        containerXAnna.style.display = 'none';
        containerChat.style.display = 'flex';
    })
})

