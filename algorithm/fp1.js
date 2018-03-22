/**
 * Mostrar la raiz cuadrada de los siguiente numeros
 * [1, 4, 9]
 */

const values = [1, 4, 9]

// Programacion Imperativa
for (let index = 0; index < values.length; index++) {
  const num = values[index]
  console.log(Math.sqrt(num))
}

// Programacion Funcional
values.map(num => Math.sqrt(num))

// Azucar sixtasis 
// Imperativa 
function raizCuadrad(num) {
  return Math.sqrt(num)
}
values.map(raizCuadrad)

// Azucar sixtasis 
// Imperativa
// Callback // Function anonima
values.map(function (num) {
  return Math.sqrt(num)
})