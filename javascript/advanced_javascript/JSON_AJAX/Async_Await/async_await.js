// // Promises Syntax
// movePlayer(100, "Left")
//   .then(() => movePlayer(400, "Left"))
//   .then(() => movePlayer(10, "Right"))
//   .then(() => movePlayer(330, "Left"));

// // Async Await Syntax
// async function playerStart() {
//   const firstMove = await movePlayer(100, "Left"); // Pause
//   const secondMove = await movePlayer(400, "Left");
//   const thirdMove = await movePlayer(10, "Right");
//   const fourthMove = await movePlayer(330, "Left");
// }

// Fetching API with Promises
const users = "https://jsonplaceholder.typicode.com/users";

fetch(users)
  .then(result => result.json())
  .then(result => console.log(result));

// Fetching API with Async Await
const albums = "https://jsonplaceholder.typicode.com/albums";

const fetch_it = async albums => {
  const response = await fetch(albums);
  const data = await response.json();
  console.log(data);
};

// Fetching multiple APIs with Async Await and Promise.all
const urls = [
  "https://jsonplaceholder.typicode.com/users",
  "https://jsonplaceholder.typicode.com/posts",
  "https://jsonplaceholder.typicode.com/albums"
];

const get_data = async urls => {
  try {
    const [users, posts, albums] = await Promise.all(
      urls.map(url => fetch(url).then(response => response.json()))
    );
    console.log("Users", users);
    console.log("Posts", posts);
    console.log("Albums", albums);
  } catch (err) {
    console.log("Ooops", err);
  }
};
