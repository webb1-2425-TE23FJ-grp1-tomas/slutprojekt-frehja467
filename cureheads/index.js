const btn = document.querySelector('.btn');
const wishinfo = document.querySelector('.wishinfo');

btn.addEventListener("click", function(event){
    wishinfo.classList.toggle('hidden');
})
const disinfo = document.querySelector('.disinfo');

btn.addEventListener("click", function(event){
    disinfo.classList.remove('hidden');
})