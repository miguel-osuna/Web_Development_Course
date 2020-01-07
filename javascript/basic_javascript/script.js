function display(number) {
  alert(number));
}

function display_menu() {
  alert(" Menu: + - * / %");
}

function ask_operation() {
  var op = prompt("Please enter your operation");
  return op;
}

function ask_number() {
  var n = prompt("Please enter your number");
  return Number(n);
}

function sum(a, b) {
  return a + b;
}

function substract(a, b) {
  return a - b;
}

function multiplicate(a, b) {
  return a * b;
}

function division(a, b) {
  return a / b;
}

function modulus(a, b) {
  return a % b;
}

function operation(string, n1, n2) {
  switch (string) {
    case "+":
      display(sum(n1, n2));
      break;
    case "-":
      display(substract(n1, n2));
      break;
    case "*":
      display(multiplicate(n1, n2));
      break;
    case "/":
      display(division(n1, n2));
      break;
    case "%":
      display(modulus(n1, n2));
      break;
    default:
      console.log("Sorry, we don't have that one");
  }
}

function main() {
  display_menu();
  var op = ask_operation();
  var n1 = ask_number();
  var n2 = ask_number();
  operation(op, n1, n2);
}

main();
