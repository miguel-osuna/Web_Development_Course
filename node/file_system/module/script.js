const fs = require("fs");

// readFile
fs.readFile("./test.txt", (err, data) => {
  console.time("test");
  if (err) {
    console.log(err);
  }

  console.log("Async: ", data.toString());
  console.timeEnd("test");
});

// console.log("After readFile, before readFileSync");

// // readFileSync
// const file = fs.readFileSync("./test.txt");
// console.log("Sync: ", file.toString());

// // appendFile
// fs.appendFile("./test.txt", " I'm good, thanks for asking", err => {
//   if (err) {
//     console.log(err);
//   }
// });

// // writeFile
// fs.writeFile("./another_test.txt", "Overwritten test", err => {
//   if (err) {
//     console.log(err);
//   }
// });

// // unlink (delete)
// fs.unlink("./another_test.txt", err => {
//   if (err) {
//     console.log(err);
//   }
//   console.log("It is gone...");
// });
