const beforeBtn = document.querySelector(".before-btn");
const afterBtn = document.querySelector(".after-btn");
const beforeImg = document.querySelector(".before-after-img .before-img");
const AfterImg = document.querySelector(".before-after-img .after-img");

// before after section script

beforeBtn?.addEventListener("click", function () {
  beforeBtn.classList.add("active-btn");
  afterBtn.classList.remove("active-btn");
  beforeImg.classList.remove("hidden");
  AfterImg.classList.add("hidden");
});

afterBtn?.addEventListener("click", function () {
  beforeBtn.classList.remove("active-btn");
  afterBtn.classList.add("active-btn");
  beforeImg.classList.add("hidden");
  AfterImg.classList.remove("hidden");
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
