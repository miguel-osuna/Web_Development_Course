// --- padStart() ---
"Miguel".padStart(5);

// --- padEnd() ---
"Miguel".padEnd(5);

// --- Object.keys ---
let obj = { 
  username0: "Santa",
  username1: "Rudolf",
  username2: "Mr. Grinch"
};

console.log(" ");
Object.keys(obj).forEach((key, index) => {
  console.log(key, obj[key]);
});

// --- Object.values ---
console.log(" ");
Object.values(obj).forEach(value => {
  console.log(value);
});

// --- Object.entries ---
console.log(" ");
Object.entries(obj).forEach(value => {
  console.log(value);
});

// Ejemplo de la vida real, cuando reciben un objeto con un numero de usuarios
console.log(" ");
const array = Object.entries(obj).map((value, index) => {
  return value[1] + value[0].replace("username", " ");
});
console.log(array);
