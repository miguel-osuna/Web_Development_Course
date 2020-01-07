// let + const
let a = "test";
let b = true;
let c = 789;
a = "test2";

// Destructuring
var person = {
  first_name: "John",
  last_name: "Doe",
  age: 50,
  eye_color: "blue"
};

let { first_name, last_name, age, eye_color } = person;

// Object Properties
let a = "test";
let b = true;
let c = 789;

const ok_ojb = {
  a,
  b,
  c
};

// Template Strings
const city = "Tokyo";
const message = `Hello ${first_name} have I met you before? I think we met in ${city} last summer no?`;

// Default Arguments
const is_age_valid = (age = 10) => age;

//Symbol
let symb = Symbol("This is my first symbol");

// Arrow Functions
const where_am_i = (username, location) => {
  if (username && location) return "I am not lost";
  else return "I am totally lost!";
};
