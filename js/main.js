function myFunction() {
  let x = document.getElementById("menu-toggleIconId");
  console.log(x);
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}
