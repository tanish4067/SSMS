const burger = document.querySelector(".burger");
const navLinks = document.querySelector(".nav-links");

let count = 0;
burger.addEventListener("click", change);
function change() {
  var line1 = document.querySelector(".line1");
  var line2 = document.querySelector(".line2");
  var line3 = document.querySelector(".line3");
  navLinks.classList.toggle("toggle");
  if (count % 2 == 0) {
    line1.style.transform = "translate(8px,8px) rotateZ(45deg)";
    line3.style.transform = "translate(8px,-8px) rotateZ(-45deg)";
    line2.style.opacity = "0";
    count++;
  } else {
    line1.style.transform = "translate(0px,0px) rotateZ(0deg)";
    line3.style.transform = "translate(0px,0px) rotateZ(0deg)";
    line2.style.opacity = "1";
    count++;
  }
}
