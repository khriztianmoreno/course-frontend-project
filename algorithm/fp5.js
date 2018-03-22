/**
 * Determinar si del siguiente array de numeros 
 * [1, 3, 5, 7, 9] luego de las siguientes reglas:
 * - El doble de cada elemento 
 * - Multiplo de 3 
 * Estos numeros  2,6,10,18 
 * se encuentran dentro :
 * 
 */

const numbers = [2, 6, 10, 18]

[1, 3, 5, 7, 9]
  .map(num => num * 2)
  .filter(num => num % 3 === 0)
  .some(num => numbers.includes(num))