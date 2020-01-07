// Solve the questions bellow

// 1. Turn this array into a new array: [1, 2, 3, [4], [5]]. Bonus if you can do it in one line
const new_array = [[1], [2], [3], [[[4]]], [[[5]]]].flat(2);
console.log(new_array);

// 2. Turn this array into a new array: ["Hello young grasshopper!", "you are", "learning fast!"]
const greeting = [
  ["Hello", "young", "grasshopper!"],
  ["you", "are"],
  ["learning", "fast"]
];
const new_greeting = greeting.flatMap(array => array.join(" "));
console.log(new_greeting);

// 3. Turn the greeting array above into a string: "Hello young grasshopper you are learning fast!"
const new_greeting_2 = greeting.flatMap(array => array.join(" ")).join(" ");
console.log(new_greeting_2);

// 4. Turn the trapped 3 number into: [3]
const trapped = [[[[[[[[[[[[[[[[[[[[[[[[[[3]]]]]]]]]]]]]]]]]]]]]]]]]];
const free = trapped.flat(Infinity);
console.log(free);

// 5. Clean up this email to have no whitespaces. Make the answer be in a single line (return a new string)
const userEmail3 = "     cannotfillemailformcorrectly@gmail.com   ";
console.log(userEmail3.trimEnd().trimStart());

// 6. Turn the users bellow (value is their ID number) into an object: const users = { user1: 18273, user2: 92833, user3: 90315 }
const users = { user1: 18273, user2: 92833, user3: 90315 };
let users_array = Object.entries(users);
console.log(users_array);

// 7. Change the output of the array above to have the user's IDs mutiplied by 2
users_array = users_array.map(array => [array[0], array[1] * 2]);
console.log(users_array);

// 8. Change the output of the array of question #7 back into an object with all the users IDs updated to their new version.
const new_users = Object.fromEntries(users_array);
console.log(new_users);
