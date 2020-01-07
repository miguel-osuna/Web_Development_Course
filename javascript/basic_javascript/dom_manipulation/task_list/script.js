var button = document.getElementById("enter");
var input_text = document.getElementById("userinput");
var input_checkbox_array = document.getElementsByClassName("check");
var li_array = document.getElementsByTagName("li");
var ul = document.querySelector("ul");

function inputLength() {
  return input_text.value.length;
}

// Create Elements
function createListElement() {
  var li = document.createElement("li");
  var input_checkbox = document.createElement("input");
  input_checkbox.setAttribute("type", "checkbox");
  input_checkbox.setAttribute("class", "check");

  // Append Children: Checkbox and Text Node
  li.appendChild(input_checkbox);
  li.appendChild(document.createTextNode(input_text.value));
  ul.appendChild(li);
}

// Add Tasks
function addListAfterClick() {
  if (inputLength() > 0) {
    createListElement();
    input_text.value = "";
  }
}

function addListAfterKeypress(event) {
  if (inputLength() > 0 && event.keyCode === 13) {
    createListElement();
    input_text.value = "";
  }
}

// Event Listening
button.addEventListener("click", addListAfterClick);
input_text.addEventListener("keypress", addListAfterKeypress);

input_checkbox_array[0].addEventListener("click", function() {
  li_array[0].classList.toggle("done");
});