var colors = document.querySelectorAll(".color");
var copied = document.querySelector(".copied");
var value = document.querySelector(".value h6");
var backgroundColor = 0;
colors.forEach((color) => {
  color.addEventListener("click", () => {
    backgroundColor = window.getComputedStyle(colors).backgroundColor;
    navigator.clipboard.writeText(backgroundColor);
    value.innerHTML = backgroundColor;
    copied.style.backgroundColor = backgroundColor;
    copied.classList.remove("donot-show");
    window.setTimeout(function () {
      copied.classList.add("donot-show");
    }, 800);
  });
});
