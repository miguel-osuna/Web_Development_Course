// --- Returning Functions ---
const first = () => {
  const greet = "Hi";
  const second = () => {
    alert(greet);
  };
  return second;
};
const fun = first();
fun();

// --- Closures ---
/* 
Children have access to their parents scope variables, while parents don't have access to their children scope variables. 
*/

// --- Currying ---

// Normalmente seria de la siguiente forma:
const multiply = (a, b) => a * b;

// Pero con currying, se separan los argumentos, creando multiples funciones
const multiply = a => b => a * b;

// Ahora tenemos que indicar los argumentos uno por uno
console.log(multiply(3)(4));

// --- Compose ---
// Consiste en crear una funcion nueva, a partir de dos funciones y un parametro como argumento

// Como se explica esto?
/* Entregamos como argumento, dos funciones 'f' y 'g',
 * Despues, dentro de esta funcion hay otra que recibe como
 * argumento 'a', y regresa 'f(g(a))', que despues es regresada por la
 * primera funcion
 */

const increment = a => a + 1;
const compose = (f, g) => a => f(g(a));

console.log(
  compose(
    increment,
    increment
  )(1)
); // 3
