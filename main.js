const dimissButton = document.getElementById("dismiss");
const openButton = document.getElementById("openMenu");
const sideBar = document.getElementById("sidebar");

dimissButton.addEventListener("click", () => {
  sideBar.style.width = 0;
});

openButton.addEventListener("click", () => {
  sideBar.style.width = "250px";
});

document.addEventListener("DOMContentLoaded", () => {
  Array.from(document.querySelectorAll(".ng-hide")).map(
    (el) => (el.style.display = "none")
  );
});
