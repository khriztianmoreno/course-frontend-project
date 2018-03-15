/**
 * Calcular el promedio simple de un estudiante 
 * a partir de sus 3 notas parciales
 */

 const n1 = prompt('Nota 1:')
 const n2 = prompt('Nota 2:')
 const n3 = prompt('Nota 3:')

 const notaFinal = (Number(n1) + Number(n2) + Number(n3)) / 3
 
 console.log('Nota final es: ', notaFinal)
