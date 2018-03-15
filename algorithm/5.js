/**
 * Elaborar la planilla de un empleado.
 * Para ello dispone de sus horas laboradas al mes 
 * asi como de la tarifa por hora.
 */

 const hours = prompt('Cantidad de horas al mes:')
 const price = prompt('Valor de la hora laboral:')

 console.log('El pago es: ', hours * price)