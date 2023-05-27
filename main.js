let btn = document.querySelector(".btn");
let pA = document.querySelector(".a");
let img = document.querySelector("img");
let audio = document.querySelector("audio");
let pB = document.querySelector(".b");

btn.onclick = function () {
  pA.style.display = "block";
  img.style.display = "block";
  btn.style.display = "none";
};
setTimeout(function () {
  pB.style.display = "block";
}, 1500);
