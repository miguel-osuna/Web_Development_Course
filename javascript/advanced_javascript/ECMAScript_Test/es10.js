// array.flat() method
const array = [1, [2, 3, 4], [5, [6, 7]]];
const flat_array = array.flat(2);
console.log(flat_array);

// flat() method to flat empty elements
const entries = ["bob", "cindy", "marcus", , , , , , "wendy"];
console.log(entries);

const flat_entries = entries.flat();
console.log(flat_entries);

// flatMap() method to flat and map an array at the same time
const colors = ["blue", "red", "green", "yellow", "purple"];
const flatMapColors = colors.flatMap(color => "light-" + color);
console.log(flatMapColors);

// .trimStart() and .trimEnd() for arrays
let email1 = "abc123@gmail.com      ";
let email2 = "     abc123@gmail.com";

email1 = email1.trimEnd();
email2 = email2.trimStart();

console.log(email1);
console.log(email2);

// fromEntries to convert a key:value pair to an object. This is the opposite of Object.entries
const players = [["Miguel", 22], ["Omar", 21], ["Regina", 15]];
const players_obj = Object.fromEntries(players);
console.log(players_obj);

// try / catch error handling
try {
  hi + "hello";
} catch {
  console.log("There was an error");
}
