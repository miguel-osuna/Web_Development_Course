// Solve the following problems

// 1. Line up the Turtle and the Rabbit at the start line:
const startLine = "     ||<- Start line";
let turtle = "🐢";
let rabbit = "🐇";

// Adds " " characters enough to make a total of 9
turtle = turtle.padStart(7 + turtle.length, " ");
rabbit = rabbit.padStart(7 + rabbit.length, " ");

console.log(startLine);
console.log(turtle);
console.log(rabbit);

// 2.What happens when you run turtle.trim().padEnd(9, "=") on the turtle variable
//   Read about what the second parameter does in padEnd and padStart

// .trim() Removes the whitespace from both sides of a string

console.log(turtle.trim().padEnd(9, "="));
// Nothing really changes, there are 7 whitespaces + 2 characters from the emoji.
console.log(turtle.padEnd(9, "=").trim());

// 3. Get the object bellow to go from

let obj = {
  my: "name",
  is: "Rudolf",
  the: "reindeer"
};

// To this: "my name is Rudolf the reindeer"
const greeting = Object.entries(obj).reduce((acc, array) => {
  return acc + `${array[0]} ${array[1]} `;
}, []);

console.log(greeting);
