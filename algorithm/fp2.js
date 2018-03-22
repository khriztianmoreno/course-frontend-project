/**
 * Mostrar la raiz cuadrada de 
 * solo los numeros pares de los siguiente numeros
 * [1, 4, 9, 16]
 */

const values = [1, 4, 9, 16]

// Numero par  num % 2 === 0
values
  .filter(num => num % 2 === 0)
  .map(num => Math.sqrt(num))

// values.filter(num => num % 2 === 0 ? Math.sqrt(num) : false )