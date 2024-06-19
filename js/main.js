function myFunction() {
  let x = document.getElementById("menu-toggleIconId");
  console.log(x);
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

// navbar  shirink
window.addEventListener("scroll", function () {
  shrink();
});
let navbar = document.getElementById("navbar");
function shrink() {
  if (scrollY > 100) {
    navbar.classList.add("navbar-shrink");
  } else {
    navbar.classList.remove("navbar-shrink");
  }
}
