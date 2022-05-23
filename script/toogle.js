let tog = document.getElementById("tog-2");
let thing = document.getElementById("thing");
let thing2 = document.getElementById("thing2");

tog.addEventListener("click", function () {
  thing.classList.toggle("m-fadeOut");
  thing2.classList.toggle("m-fadeIn");
});

let togglee = document.getElementById("toggle");
let menuDesplegable = document.getElementById("menu-desplegable");

togglee.addEventListener("click", function () {
  menuDesplegable.classList.toggle("menu-desplegable-ul-toggle-2");
  menuDesplegable.classList.toggle("menu-desplegable-ul-toggle-1");
});

let toggleee = document.getElementById("togglee");
let menuDesplegablee = document.getElementById("usurio-desplegable");

toggleee.addEventListener("click", function () {
  menuDesplegablee.classList.toggle("usurio-desplegable-ul-toggle-2");
  menuDesplegablee.classList.toggle("usurio-desplegable-ul-toggle-1");
});
/*dark theme*/

let togleee = document.getElementById("togleee");
let ligth = document.getElementById("theme-1");
let dark = document.getElementById("theme-2");

togleee.addEventListener("click", function () {
  ligth.classList.toggle("ligth-theme-toggle-1");
  dark.classList.toggle("ligth-theme-toggle-2");
});
