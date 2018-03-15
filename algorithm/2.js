/**
 * Un colegio desea saber qué porcentaje de niños 
 * y qué porcentaje de niñas hay en el curso actual. 
 * Diseñar un algoritmo para este propósito 
 * (recuerda que para calcular el porcentaje puedes 
 * hacer una regla de 3)
 */

 const cantBoys = prompt('Cual es la cantidad de niños')
 const cantGirls = prompt('Cual es la cantidad de niñas')

 const total = Number(cantBoys) + Number(cantGirls)

 const porcBoys = (cantBoys * 100) / total
 const porcGirls = (cantGirls * 100) / total

 console.log(`Niños: ${porcBoys}%, Niñas: ${porcGirls}%`)