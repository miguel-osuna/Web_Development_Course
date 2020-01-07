// Object Spread Operator
const animals = {
  dog: 23,
  cat: 45,
  bird: 56,
  hamster: 12
};

const { dog, cat, ...rest } = animals;
console.log(dog);
console.log(cat);
console.log(rest);

const object_spread = (a1, a2, a3) => {
  console.log(a1);
  console.log(a2);
  console.log(a3);
};

object_spread(dog, cat, rest);

// .finally() method
// Fetching multiple API's with Promise.all
const urls = [
  "https://jsonplaceholder.typicode.com/users",
  "https://jsonplaceholder.typicode.com/posts",
  "https://jsonplaceholder.typicode.com/albums"
];

Promise.all(urls.map(url => fetch(url).then(response => response.json())))
  .then(results => {
    throw Error;
    console.log(results[0]);
    console.log(results[1]);
    console.log(results[2]);
  })
  .catch(err => console.log("There was an error", err))
  .finally(() => console.log("Executing finally method"));

// for await of feature
const getData = async urls => {
  const array_promises = urls.map(url => fetch(url));
  for await (let request of array_promises) {
    const data = await request.json();
    console.log(data);
  }
};
