const beforeBtn = document.querySelector(".before-btn");
const afterBtn = document.querySelector(".after-btn");
const beforeAfterImg = document.querySelector(".before-after-img img");

// before after section script

beforeBtn?.addEventListener("click", function () {
  beforeAfterImg.src = "/assets/before.webp";
  beforeBtn.classList.add("active-btn");
  afterBtn.classList.remove("active-btn");
});

afterBtn?.addEventListener("click", function () {
  beforeAfterImg.src = "/assets/after.webp";
  beforeBtn.classList.remove("active-btn");
  afterBtn.classList.add("active-btn");
});

// Menubar
const menubar = document.querySelector(".menubar");
const closeBtn = document.querySelector(".close");
const sidebar = document.querySelector(".sidebar");

menubar.addEventListener("click", function () {
  sidebar.classList.add("show-sidebar");
});

closeBtn.addEventListener("click", function () {
  sidebar.classList.remove("show-sidebar");
});
