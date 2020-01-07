var button = document.getElementById("enter");
var input = document.getElementById("user-input");
var ul = document.querySelector("ul");

function input_length() {
  return input.value.length;
}

function create_list_element() {
  var li = document.createElement("li");
  li.appendChild(document.createTextNode(input.value));
  ul.appendChild(li);
  input.value = "";
}

function add_task_click() {
  if (input_length() > 0) {
    create_list_element();
  }
}

function add_task_keypress(event) {
  if (input_length() > 0 && event.keyCode === 13) {
    create_list_element();
  }
}

button.addEventListener("click", add_task_click);
input.addEventListener("keypress", add_task_keypress);
