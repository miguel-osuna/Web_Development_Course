// Solve the problems bellow:

// 1. Check if this array include the name "John"
const names = ["Tim", "Johnathan", "Sandy", "Sarah"];
console.log(names.includes("Johnathan"));

// 2. Check if this array includes any name that has "John" inside of it. If it does, return that name or names in an array
const other_names = ["Tim", "Johnathan", "Sandy", "Sarah"];
console.log(other_names.filter(element => element.includes("John")));

// 3. Create a function that calculates the power of 100 of a number entered as a parameter
const pow = (x, y) => x ** 100;

// 4. Using your function from 3, put in the parameter 10000. What is the result? Research for yourself why you get this result
console.log(pow(10000, 100));
// The result is to high to calculate
