const btn = document.querySelector('.btn');
const btn2 = document.querySelector('.btn2');
const btn3 = document.querySelector('.btn3');
const btn4 = document.querySelector('.btn4');
const wishinfo = document.querySelector('.wishinfo');
const disinfo = document.querySelector('.disinfo');
const headdoor = document.querySelector('.headdoor');

btn.addEventListener("click", function(event){
    wishinfo.classList.toggle('hidden');
})
btn2.addEventListener("click", function(event){
    disinfo.classList.toggle('hidden');
})
btn3.addEventListener("click", function(event){
    headdoorinfo.classList.toggle('hidden');
})