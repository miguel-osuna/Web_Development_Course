// 1. Evaluate these:
console.log([2] === [2]); // false
console.log({} === {}); // false

// 2. What is the value of property 'a' for each object
const object1 = { a: 5 };
const object2 = object1;
const object3 = object2;
const object4 = { a: 5 };

object1.a = 4;

console.log(object1.a); // 4
console.log(object2.a); // 4
console.log(object3.a); // 4
console.log(object4.a); // 5

// 3. Create two classes: an Animal class and a Mamal class,
//    then create a cow that accepts a name, type and color, and a
//    sound method that moo's her name, type and color

class Animal {
  // Constructor
  constructor(name, type, color) {
    this.name = name;
    this.type = type;
    this.color = color;
  }
}

class Mammal extends Animal {
  // Constructor
  constructor(name, type, color) {
    super(name, type, color);
  }

  // Methods
  sound() {
    console.log(`Name: ${this.name}, Type: ${this.type}, Color: ${this.color}`);
  }
}

const cow_1 = new Animal("Cow", "Mammal", "Black");
const cow_2 = new Mammal("Cow", "Mammal", "White");

cow_2.sound();
