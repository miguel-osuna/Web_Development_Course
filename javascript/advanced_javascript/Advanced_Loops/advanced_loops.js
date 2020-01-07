// For of loop: Applies for Arrays and Strings
const fruit_basket = ["apple", "pear", "orange", "melon", "peach"];

for (fruit of fruit_basket) {
  console.log(fruit);
}
console.log("");
// For in loop: Applies for user defined objects and Arrays (they are also objects)
const basket_obj = {
  apple: 1,
  pear: 3,
  orange: 6,
  melon: 2,
  peach: 4
};

for (fruit in basket_obj) {
  console.log(fruit);
}
console.log(" ");

// Because an array is also an object, you can use both 'for of' and 'for in' for it.
// But, if we use 'for in', we are gonna get the name of the property, which is a number
for (fruit in fruit_basket) {
  console.log(fruit);
}
