/**
 * A los empleados de una aseguradora se les 
 * paga un sueldo base 3500 usd, 
 * ademas se les da un 15% de comision del total vendido,
 * ellos pagan un 25% de RTF, CUANTO gana?
 */

const SALARY = 3500
const RTF = 0.25
const COMMISSION = 0.15

const sale = prompt('Valor de sus ventas:')

// Calcular los valores de cada porcentaje
const valCommission = sale * COMMISSION
const valRTF = SALARY * RTF
debugger
const salaryNeto = Number(SALARY) + Number(valCommission) - valRTF

console.log(`El salario Final del empleado ${salaryNeto} USD`)