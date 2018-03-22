/**
 * Mostrar el primer valor 
 * que cumpla con la siguientes condiciones:
 *  Multiplo de 3, 5 y 10
 *  Primo
 * 
 * [66, 69, 72, 30, 3, 6, 40, 75, 78, 18, 21, 9, 12, 15, 24, 27, 30, 33]
 */

const numbers = [
  66, 69, 72, 30, 
  3, 6, 40, 75, 78, 
  18, 21, 9, 12, 15, 
  24, 27, 30, 33
]

numbers
  .filter(num => num % 3 === 0)
  .filter(num => num % 5 === 0)
  .filter(num => num % 10 === 0)
  .find(num => num % 2 === 0)