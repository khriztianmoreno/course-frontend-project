/**
 * Dado un año, decir si es bisiesto o no. 
 * 
 * Un año es bisiesto bajo las siguientes condiciones:
 * Si es divisible entre 4, 
 * excepto aquellos divisibles entre 100 
 * pero no entre 400. 
 */

const year = prompt('AÑO')

if (year % 400 === 0) {
  console.log('Bisiesto')
} else {
  if ((year % 4 === 0) && (year % 100 !== 0)) {
    console.log('Bisiesto')
  } else {
    console.log('NO Bisiesto')
  }
}