const btn = document.querySelector('.btn');
const wishinfo = document.querySelector('.wishinfo');

btn.addEventListener("click", function(event){
    wishinfo.classList.toggle('hidden');
})
