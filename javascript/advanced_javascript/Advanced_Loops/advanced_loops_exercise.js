const basket = ["apples", "oranges", "grapes"];
const detailed_basket = {
  apples: 5,
  oranges: 10,
  grapes: 1000
};

// 1.
for (let i = 0; i < basket.length; i++) {
  // console.log(basket[i]);
}

basket.forEach(item => {
  // console.log(item);
});

for (item in detailed_basket) {
  // console.log(item);
}

for (item of basket) {
  // console.log(item);
}

// 1. Create a function called biggest_number_in_array() that takes an array as a parameter and should return the biggest number.
//    biggest_number_in_array([-1, 0, 3, 100, 99, 2, 99]) should return 100
//    Use at least 3 different types of javascript loops to write this:

const array = [-1, 0, 3, 100, 99, 2, 99];
const array_2 = ["a", 3, 4, 2];
const array_3 = [];

const biggest_number_in_array_1 = array => {
  let max = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] > max) {
      max = array[i];
    }
  }
  return max;
};

const biggest_number_in_array_2 = array => {
  let max = 0;
  array.forEach(item => {
    if (item > max) {
      max = item;
    }
  });
  return max;
};
const biggest_number_in_array_3 = array => {
  let max = 0;
  for (item of array) {
    if (item > max) {
      max = item;
    }
  }
  return max;
};

// 2. Write a function check_basket() that let's you know if the item is in the basket or not

const amazon_basket = {
  glasses: 1,
  books: 2,
  floss: 100
};

const check_item = (obj, looking_for) => {
  let found_item = false;
  for (item in obj) {
    if (item === looking_for) {
      found_item = true;
    }
  }
  return found_item;
};

// flattened regresa un arreglo simplificado
const flattened = [[0, 1], [2, 3], [4, 5]].reduce((a, b) => {
  debugger;
  return a.concat(b);
}, []);

console.log("1");
setTimeout(() => {
  console.log("2");
});
console.log("3");
