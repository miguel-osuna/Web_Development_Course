var apple = function() {
  console.log("apple");
};

var pear = function() {
  console.log("pear");
};

function banana() {
  console.log("banana");
}

var functions = [apple, pear, banana];
var animals = ["dog", "bird", "cat", "bear"];
var numbers = [0, 1, 2, 3];
var lists = [functions, animals, numbers];

console.log(lists[1][0]);
