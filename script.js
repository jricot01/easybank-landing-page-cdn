const hamburger = document.querySelector(".hamburger-button");
const close = document.querySelector(".close-button");
const navMenu = document.querySelector(".nav-menu");
const navBar = document.querySelector(".nav-bar");
const body = document.querySelector("body");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  close.classList.toggle("active");
  navMenu.classList.toggle("active");
  navBar.classList.toggle("active");
  body.classList.toggle("active");
});

close.addEventListener("click", () => {
  hamburger.classList.remove("active");
  close.classList.remove("active");
  navMenu.classList.remove("active");
  body.classList.remove("active");
});

document.querySelectorAll(".nav-link").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    close.classList.remove("active");
    navMenu.classList.remove("active");
  })
);
