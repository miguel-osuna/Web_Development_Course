/* Santa Challenge
 - Floor starts in #0
 - "(" --> go 1 floor up
 - ")" --> go 1 floor down
 - top and bottom floor have no limits
*/

// Global Variables
const file_path = "./santa.txt";
const encoding = "utf-8";
const fs = require("fs");

// Get the floor's data
let floor_data = fs
  .readFileSync(file_path, encoding)
  .split(" ")
  .join("");

// Returns santa's floor
const find_floor = floor_data => {
  // Starts in Floor 0
  let floor = 0;
  for (let char of floor_data) {
    if (char === "(") {
      floor++;
    } else if (char === ")") {
      floor--;
    }
  }
  return floor;
};

// Returns -1 if it doesn't find anything
const find_position = floor_data => {
  // Starts in Floor 0
  let floor = 0;
  let position = -1;
  let found_position = false;

  for (let i = 0; i < floor_data.length; i++) {
    if (floor_data[i] === "(") {
      floor++;
    } else if (floor_data[i] === ")") {
      floor--;
    }

    // Stores positions when Santa enters the basement
    if (floor === -1 && !found_position) {
      position = i;
      found_position = true;
      break;
    }
  }
  return position;
};

const display_floor = floor_data => {
  console.time("test");
  console.log(`Santa, your floor is: #${find_floor(floor_data)}`);
  console.log(`Arrived basement in floor_data[${find_position(floor_data)}]`);
  console.timeEnd("test");
};

display_floor(floor_data);
