// navbar
document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menu-toggleIconId");
  const navMenuId = document.getElementById("nav-menuId");
  const navBtnId = document.getElementById("nav-btnId");

  console.log(menuToggle);
  menuToggle.addEventListener("click", () => {
    navMenuId.classList.toggle("active");
    navBtnId.classList.toggle("activeBtn");
  });
});
