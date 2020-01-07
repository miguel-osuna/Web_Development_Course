// Complete the questions bellow using this array:
const array = [
  {
    username: "john",
    team: "red",
    score: 5,
    items: ["ball", "book", "pen"]
  },
  {
    username: "becky",
    team: "blue",
    score: 10,
    items: ["tape", "backpack", "pen"]
  },
  {
    username: "susy",
    team: "red",
    score: 55,
    items: ["ball", "eraser", "pen"]
  },
  {
    username: "tyson",
    team: "green",
    score: 1,
    items: ["book", "pen"]
  }
];

// Create an array that has all the usernames with a "!" added to each of the usernames using 'forEach'
const username_array_foreach = [];
array.forEach(element => {
  username_array_foreach.push(`Test ${element.username}!`);
});
console.log(`Using forEach: ${username_array_foreach}`);

// Create an array that has all the usernames with a "!" added to each of the usernames using '.map'
const username_array_map = array.map(element => {
  return element.username + "?";
});
console.log(`Using .map: ${username_array_map}`);

// Filter the array to only include users who are on team red
const team_red_array_filter = array.filter(element => element.team === "red");
console.log(`Using .filter: ${team_red_array_filter}`);

// Find out the total score of all users using reduce
const total_score = array.reduce((acc, element) => {
  return acc + element.score;
}, 0);
console.log(`Using .reduce: ${total_score}`);

// (1). What is the value of i? i represents the index of the array
// (2). Make this map function pure.

// const array_num = [1, 2, 4, 5, 8, 9];
// const new_array = array_num.map((num, i) => {
//     console.log(num, i);
//     alert(num);
//     return num * 2;
// })

const array_num = [1, 2, 4, 5, 8, 9];

const display = array => {
  console.log(array);
  alert(array);
};

const new_array = array_num.map((num, i) => {
  return num * 2;
});

display(new_array);
