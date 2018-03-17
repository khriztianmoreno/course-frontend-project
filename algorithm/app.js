/**
 * WEB App que permita a una empresa registrar 
 * las ventas de cada uno de sus empleados y al 
 * final del dia, liquidar a cada uno de ellos.
 *   Condiciones
 *  -	Existen 3 empleados (Marc, Steve, Bill)
 *  -	Por cada venta el empleado tiene una comisión del 3%
 *  -	Cada venta superior a 100.00 tiene una comisión extra de 2%
 *  -	El sueldo diario de cada empleado es de 9300
 *  -	Al momento del cierre del dia, si un empleado 
 * obtuvo ventas superiores a 350.000 se da una bonificación extra de 7%
 *  -	Los empleados deben pagar RTF 12.5% (SUELDO)
 */

const SALARY = 9300
const COMMISSSION_BASE = 0.03
const COMMISSSION_PLUS = 0.02
const COMMISSSION_GOLD = 0.07
const RTF = 0.125

const productVal = prompt('El valor del product:')

let valComPlus
let valComGold
debugger
// Calcular el valor de la comision general
const valComBase = productVal * COMMISSSION_BASE
if (productVal > 100000) {
  // Calcular el valor de la comision PLUS
  valComPlus = productVal * COMMISSSION_PLUS
}

// TODO: Se cerro el dia
if (productVal >= 350000) {
  // Calcular el valor de la comision PLUS
  valComGold = productVal * COMMISSSION_GOLD
}

const valRTF = SALARY * RTF
// Mostrar el valor de ganacia del empleado

const total = (SALARY + valComBase + valComPlus + valComGold) - valRTF