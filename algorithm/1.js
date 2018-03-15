/**
 * Diseñar un algoritmo que pida por teclado tres números; 
 * si el primero es negativo, 
 * debe imprimir el producto de los tres 
 * y si no lo es, imprimirá la suma.
 */

const num1 = prompt('Ingrese el numero 1:');
const num2 = prompt('Ingrese el numero 2:');
const num3 = prompt('Ingrese el numero 3:');

if (num1 > 0) {
  console.log('Suma', Number(num1) + Number(num2) + Number(num3))
} else {
  console.log('Multiplicacion', Number(num1) * Number(num2) * Number(num3))
}