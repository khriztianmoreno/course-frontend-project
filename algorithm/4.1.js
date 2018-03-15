/**
 * Calcular el promedio simple de un estudiante 
 * a partir de sus N notas parciales
 */

let scape = 0
let sumaNotas = 0
let cant = 0
while (scape >= 0) {
  const nota = prompt('Ingrese la nota \nPara salir ingre un valor negativo') 
  sumaNotas = Number(sumaNotas) + Number(nota)
  // cant = cant + 1
  cant++
  scape = nota
}

console.log('Promedio: ', sumaNotas/cant)