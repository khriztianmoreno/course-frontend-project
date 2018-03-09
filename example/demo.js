/* 1. Escribe un programa que genera 3 números aleatorio 
 * y escriba en la pantalla el mayor de los tres.
 */

// Retorna un número aleatorio entre min (incluido) y max (excluido)
function getRandomArbitrary(max) {
  return Math.floor(Math.random() * max)
}
/*
const num1 = getRandomArbitrary(1, 10)
const num2 = getRandomArbitrary(20, 50)
const num3 = getRandomArbitrary(1, 50)
console.log(num1, num2, num3)
debugger

console.log(Math.max(num1, num2, num3))
*/

/**
 * 2. Escribe un programa que genere un número y 
 * diga si es divisible por 2
 * Tips: %
 */

/*const num = getRandomArbitrary(100)
const result = num % 2 === 0 ? 'Divisible' : 'No Divisible'
console.log(num, result)*/


/**
 * Encontrar el área de un triángulo donde las 
 * longitudes de los tres lados son 5, 6, 7.
 */

/*const base = 5
const heigth = 6

console.log((base*heigth/2))*/


/**
 * DETERMINAR CUANTOS NUMEROS PARES HAY ENTRE 234 Y 865.
 */

/*let cont = 0
for (let num = 234; num <= 865; num++) {
  if (num % 2 === 0){
    cont = cont + 1 
  }
}
console.log('Total pares es:', cont)*/



/**
 * Verificar una palabra palindrome 
 * anita lava la tina
 */

/*const word = 'anitalavalatona'

let palindrome = ''
for (let index = word.length; index === 0; index--) {
  palindrome = palindrome + word[index]
}

 word === palindrome

 function palindromo(s){
  const word = s.replace(/\s/g,'').toLowerCase();
  const reverse = 
    word.split('').reverse().join('');
  
  return word === reverse;
 } */

/**
 * Escriba en la función de JavaScript 
 * para verificar si una 'parametro' es un array o no
 */

/*function is_Array(par) {
  return Array.isArray(par)
}

console.log('a', is_Array('a'))
console.log('true', is_Array(true))
console.log(343, is_Array(343))
console.log('{}', is_Array({}))
console.log('[1,3,4]', is_Array([1,3,4]))*/

/**
 * Escriba en el programa JavaScript 
 * para mostrar las propiedades de un objeto JavaScript
 */
const student = { 
  name : "David Rayy", 
  sclass : "VI", 
  rollno : 12,
  hobbies: ['Run', 'Dance', 'Eat', 'Pizza']
}

function is_Array(par) {
  return Array.isArray(par)
}

/*for (let llave in persona) {
  if (persona.hasOwnProperty(llave)) {
    if (is_Array(persona[llave])) {
      const hobbies = persona[llave]
      for (let index = 0; index < hobbies.length; index++) {
        console.log(hobbies[index])
      }
    } else {
      console.log(persona[llave])
    }
    
  }
}*/

/**
 * Escribe una función de 
 * JavaScript para clonar una array
 */

const array = [1, 'Como estas', true, { name: 'Pepe', age: 18 }]
const array2 = array

/*const arrayClone = array.slice(0)

console.log(array)
console.log(array2)
console.log(arrayClone)

arrayClone.push('Oop')

console.log('-----------------------')

console.log(array)
console.log(arrayClone)

array.push('HAHAHAH!!')

console.log('-----------------------')
console.log(array)
console.log(array2)
console.log(arrayClone)

let miii = []
for (let index = 0; index < array.length; index++) {
  miii.push(array[index]);
}

console.log(array)
console.log(miii)

array.push('HAHAHAH!!')

console.log('-----------------------')
console.log(array)
console.log(miii)

const a = array.forEach(element => {
  console.log(element)
  return element
});
console.log('-----------------------')
console.log(a)


const b = array.map(element => {
  console.log(element)
  return element
})

b.push('aaaaaaa')

console.log('-----------------------')
console.log(b)
console.log(array)
*/

const library = [ 
  {
      title:  'The Road Ahead',
  },
  {
      title: 'Walter Isaacson',
  },
  {
      title: 'Mockingjay: The Final Book of The Hunger Games',
  }
];

library.forEach(element => {
  console.log(element)
});

function compare(a,b) {
  if (b.title < a.title)
    return -1;
  if (b.title > a.title)
    return 1;
  return 0;
}

console.log(library.sort(compare));


document.write('a')





