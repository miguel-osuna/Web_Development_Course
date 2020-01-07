const rgb_colors = 3;

var first_color = document.querySelector(".first-color");
var second_color = document.querySelector(".second-color");
var button = document.querySelector(".button");
var h3 = document.querySelector("h3");
var body = document.querySelector("body");

first_color.addEventListener("input", set_gradient);
second_color.addEventListener("input", set_gradient);
button.addEventListener("click", set_random_gradient);

function set_gradient() {
  body.style.background =
    "linear-gradient(to right, " +
    first_color.value +
    " , " +
    second_color.value +
    ")";

  h3.textContent = body.style.background + ";";
}

function random_hex_color() {
  return "#" + ((Math.random() * 0xffffff) << 0).toString(16);
}

function set_random_gradient() {
  first_color.value = random_hex_color();
  second_color.value = random_hex_color();
  set_gradient();
}
