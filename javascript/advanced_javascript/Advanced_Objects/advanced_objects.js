// --- Reference Type ---
obj1 = { value: 100 };
obj2 = obj1;
obj3 = { value: 100 };

console.log(obj1 === obj3); // false
console.log(obj1 === obj2); // true
console.log(obj2 === obj3); // false
console.log([] === []); // false

// --- Context vs Scope ---

// Parent Scope Trying to Access Child Scope
function fun() {
  let a = 4;
  console.log(a);
}
// console.log(a) // ERROR

// Child Scope Trying to Access Parent Scope
let b = 8;
function fun2() {
  console.log(b); // OK
}
console.log(b); // OK

// 'this'
// Window Object by Default
console.log(this);
// this.console.log("Using this");
// this.alert("Using this");

// New Object
const new_object = {
  a: function() {
    console.log(this);
  }
};

// --- Instantiation ----
class Player {
  // Constructor
  constructor(name, health, xp) {
    this.name = name;
    this.health = health;
    this.xp = xp;
    console.log("Player", this);
  }

  // Methods
  display_player() {
    console.log(
      `Player's name: ${this.name}, health: ${this.health}, XP: ${this.xp}`
    );
  }
}

class Warrior extends Player {
  // Constructor
  constructor(name, health, xp, type) {
    super(name, health, xp);
    this.type = type;
    console.log("Warrior", this);
  }

  // Methods
  display_player() {
    console.log(
      `Player's name: ${this.name}, health: ${this.health}, XP: ${this.xp}, type: ${this.type}`
    );
  }
}

const my_player = new Warrior("Miguel", 100, 200, "Warrior");
my_player.display_player();
