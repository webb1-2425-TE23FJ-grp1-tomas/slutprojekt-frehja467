const btn = document.querySelector(".btn");
const btn2 = document.querySelector(".btn2");
const btn3 = document.querySelector(".btn3");
const btn4 = document.querySelector(".btn4");
const btn5 = document.querySelector(".btn5");
const btn6 = document.querySelector(".btn6");
const btn7 = document.querySelector(".btn7");
const btn8 = document.querySelector(".btn8");
const btn9 = document.querySelector(".btn9");
const wishinfo = document.querySelector(".wishinfo");
const disinfo = document.querySelector(".disinfo");
const headdoorinfo = document.querySelector(".headdoorinfo");
const kissmeinfo = document.querySelector(".kissmeinfo");
const thetopinfo = document.querySelector(".thetopinfo");
const faithinfo = document.querySelector(".faithinfo");
const dreaminfo = document.querySelector(".dreaminfo");
const wildmoodswings = document.querySelector(".wildmoodswings");
const songslostworld = document.querySelector(".songslostworld");

btn.addEventListener("click", function (event) {
  wishinfo.classList.toggle("hidden");
});
btn2.addEventListener("click", function (event) {
  disinfo.classList.toggle("hidden");
});
btn3.addEventListener("click", function (event) {
  headdoorinfo.classList.toggle("hidden");
});
btn4.addEventListener("click", function (event) {
  kissmeinfo.classList.toggle("hidden");
});
btn5.addEventListener("click", function (event) {
  thetopinfo.classList.toggle("hidden");
});
btn6.addEventListener("click", function (event) {
  faithinfo.classList.toggle("hidden");
});
btn7.addEventListener("click", function (event) {
  dreaminfo.classList.toggle("hidden");
});
btn8.addEventListener("click", function (event) {
  wildmoodswings.classList.toggle("hidden");
});
btn9.addEventListener("click", function (event) {
  songslostworld.classList.toggle("hidden");
});
