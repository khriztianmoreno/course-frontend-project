/**
 * En un trabajo se paga a $10 USD la hora, 
 * la hora extra tiene un incremento del 4.5% del valor, 
 * pedir las Horas trabajas de un empleado al mes 
 * y decir cuanto se le pagará 
 * (Horas minimas laborales 160)
 */

const INCRE = 0.045 // 4.5 %

const hours = prompt('Cantidad de horas al mes:') // 161
const price = prompt('Valor de la hora laboral:') // 100

// Calcular el valor real de la hora extra
const valHourExt = (price * INCRE) + Number(price) // 104.5

if (hours > 160) {
  // Saber cuantas horas extras hizo el empleado
  const cantHourExt = hours - 160  // 161 - 160 = 1
  const totalExt = cantHourExt * valHourExt // 1 * 104.5 = 104.5
  console.log(`Valor de horas extras: ${totalExt}`)
  
  const total = (160 * price) + Number(totalExt) // 16000 + 104.5
  console.log('El pago total es: ', total)
} else {
  console.log('El pago es sin horas extras es: ', hours * price)
}