// Normalmente hariamos lo siguiente para modificar un arreglo:
const array = [1, 2, 3, 4, 5];

const new_array = [];
for (let i = 0; i < array.length; i++) {
  new_array.push(array[i] * 2);
}

// Pero ahora con forEach y Arrow Functions, podemos sacarle mas provecho, ya que forEach llama una fucion para cada elemento del arreglo

// Como se observa, forEach no regresa nada, asi que no modificara el arreglo 'array'
const array_1 = [1, 2, 3, 4, 5];
array_1.forEach(element => {
  element * 2;
});

// Si queremos modificar el arreglo inicial, se tiene que crear un segundo arreglo con los valores modificados
const new_array_1 = [];
array_1.forEach(element => {
  new_array_1.push(element * 2);
});

// --- Map Array ---
// Regresa un valor para almacanerlo

const map_array = array.map(element => {
  return element * 3;
});

// --- Filter Array ---
// Regresa un arreglo con los elementos que cumplan una condicion

const filter_array = array.filter(element => element > 2);
// filter_array = [3, 4, 5];

// --- Reduce Array ---
// Regresa un acumulador despues de iterar sobre todos los elementos

const reduce_array = array.reduce((accumulator, element) => {
  return accumulator + element;
}, 0);
