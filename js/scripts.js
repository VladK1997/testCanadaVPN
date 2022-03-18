window.addEventListener("click", function (e) {
  if (window.innerWidth <= 1100) {
    var target = e.target;

    if (target.closest('.nav-item--submenu .nav-item__title')) {
      target.closest('.nav-item--submenu').classList.toggle("active");
    }
  }
});
var openMenuBtn = document.getElementById("navOpenBtn");
var closeMenuBtn = document.getElementById("navCloseBtn");
var mobMenu = document.getElementById("navMenu");
openMenuBtn.addEventListener("click", function () {
  mobMenu.classList.add("active");
});
closeMenuBtn.addEventListener("click", function () {
  mobMenu.classList.remove("active");
});