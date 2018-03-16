/**
 * Teniendo en cuenta que la clave es “eureka”, 
 * escribir un algoritmo que nos pida una clave. 
 * Solo tenemos 3 intentos para acertar, 
 * si fallamos los 3 intentos nos mostrara un 
 * mensaje indicándonos que hemos agotado esos 3 
 * intentos
 */

const KEY = 'eureka'
let limit = 1

while (limit <= 3) {
  let word = prompt('Escriba la palabra:')
  if (word === KEY) {
    console.log(KEY)
    limit = 99999999
  } else {
    limit = limit +1
  }
}

if (limit === 4) {
  console.log('Game over')
}