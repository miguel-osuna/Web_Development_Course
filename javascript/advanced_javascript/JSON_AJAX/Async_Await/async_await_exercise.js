// Solve the problems bellow:

// 1. Convert the promise bellow into async await
// fetch("https://swapi.co/api/starships/9/")
//   .then(response => response.json())
//   .then(console.log);
const url = "https://swapi.co/api/starships/9/";

const fetchURL = async url => {
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
};

fetchURL(url);

// 2. ADVANCED: Update the function bellow from the video to also have
//    async await for this line: fetch(url).then(resp => resp.json())
//    So there shouldn't be any .then() calls anymore!

const urls = [
  "https://jsonplaceholder.typicode.com/users",
  "https://jsonplaceholder.typicode.com/posts",
  "https://jsonplaceholder.typicode.com/albums"
];

const getData = async urls => {
  const [users, posts, albums] = await Promise.all(
    urls.map(async url => {
      const response = await fetch(url);
      return response.json();
    })
  );

  console.log("users", users);
  console.log("posta", posts);
  console.log("albums", albums);
};

// 3. Add a try catch block to the #2 solution in order to catch any errors
const getData2 = async urls => {
  try {
    const [users, posts, albums] = await Promise.all(
      urls.map(async url => {
        const response = await fetch(url);
        const data = await response.json();
        return data;
      })
    );

    console.log("users", users);
    console.log("posta", posts);
    console.log("albums", albums);
  } catch (err) {
    console.log("Something's wrong...", err);
  }
};
