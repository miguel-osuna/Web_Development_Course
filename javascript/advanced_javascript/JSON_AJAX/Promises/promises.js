// This is a promise
const promise = new Promise((resolve, reject) => {
  if (true) {
    resolve("It worked");
  } else {
    reject("It did not work");
  }
});

// Once the promise gets resolved or rejected, THEN do:
promise.then(result => console.log(result));

// It can also be a chained promise:
promise.then(result => result + "!").then(result => console.log(result));

// Catching an error between .then
promise
  .then(result => result + "!")
  .then(result => {
    throw Error;
    console.log(result);
  })
  .catch(() => console.log("ERROR catch between .then"));

// Executing multiple promises
const promise1 = new Promise((resolve, reject) =>
  setTimeout(resolve, 500, "Hola")
);

const promise2 = new Promise((resolve, reject) =>
  setTimeout(resolve, 1000, "Hello")
);

const promise3 = new Promise((resolve, reject) =>
  setTimeout(resolve, 2000, "Ciao")
);

const promise4 = new Promise((resolve, reject) =>
  setTimeout(resolve, 5000, "Bonjour")
);

Promise.all([promise1, promise2, promise3, promise4]).then(result =>
  console.log(result)
);

// Fetching multiple API's with Promise.all
const urls = [
  "https://jsonplaceholder.typicode.com/users",
  "https://jsonplaceholder.typicode.com/posts",
  "https://jsonplaceholder.typicode.com/albums"
];

Promise.all(urls.map(url => fetch(url).then(response => response.json())))
  .then(results => {
    console.log(results[0]);
    console.log(results[1]);
    console.log(results[2]);
  })
  .catch("There was an error with the request or reponse");

// Fetching just one API
const todos = "https://jsonplaceholder.typicode.com/todos";

fetch(todos)
  .then(response => response.json())
  .then(response => console.log(response));
