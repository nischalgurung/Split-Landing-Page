const container = document.querySelector(".container");
const left = document.querySelector(".left");
const right = document.querySelector(".right");
left.addEventListener("mouseover", function () {
  container.classList.add("left-hover");
  container.classList.remove("right-hover");
});
right.addEventListener("mouseover", function () {
  container.classList.add("right-hover");
  container.classList.remove("left-hover");
});
