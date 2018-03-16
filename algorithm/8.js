/**
 * Si un vendedor realiza 3 ventas 
 * y por cada una de ellas se le da una comision del 10% 
 * y su sueldo base es de 2.500 USD.
 * Cuanto recibira de pago
 */

const SALARY = 2500
const COMMISSION = 0.10

const sale1 = prompt('Valor de la venta 1:')
const sale2 = prompt('Valor de la venta 2:')
const sale3 = prompt('Valor de la venta 3:')

const commissionSales = (sale1 * COMMISSION) + (sale2 * COMMISSION) + (sale2 * COMMISSION)

const total = SALARY + Number(commissionSales)

console.log('Salario Total', total)