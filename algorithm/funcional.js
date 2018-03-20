/**
 * Una empresa de seguros quiere automatizar 
 * la venta de sus seguros. 
 * Un seguro vale 3000k USD 
 * mas el 12% del sueldo del cotizante
 * Si cotizante es independiente sube 5%
 * Si gana más de 5000 USD tiene un descuento de 2%
 * Si es menor a 28 años tiene un valor extra de 8%
 */

const SEGURO_BASE = 3000
const PORCETAJE_SUELDO = 0.12
const PORCENTAJE_EDAD = 0.08
const PORCENTAJE_DESC_SALARIO = 0.02
const PORCENTAJE_TIPO_CONTRATO = 0.05

const sueldo = prompt('Su sueldo')
const tipoContrato = prompt('Tipo contrato: Inde=I, Depe:D')
const edad = prompt('Cual es su edad')
const valorSueldoSeguro = sueldo * PORCETAJE_SUELDO

/**
 * Calcular el valor del porcentaje del sueldo
 * @param {number} sueldo  
 */
function valorDescunetoSueldo(sueldo) {
  let valDescSueldoMayor5k = 0

  if (sueldo > 5000) {
    valDescSueldoMayor5k = sueldo * PORCENTAJE_DESC_SALARIO
  }

  return valDescSueldoMayor5k
}

function valorIncrementoTipoContrato (sueldo, tipoContrato) {
  let valIncrTipoContrato = 0
  if (tipoContrato === 'I') {
    valIncrTipoContrato = sueldo * PORCENTAJE_TIPO_CONTRATO
  }

  return valIncrTipoContrato
}

function valorIncrementoEdad (sueldo, edad) {
  let valIncrEdad = 0
  if (edad < 28) {
    valIncrEdad = sueldo * PORCENTAJE_EDAD
  }

  return valIncrEdad
}

function calculaTotal () {
  const valIncEdad = valorIncrementoEdad(sueldo, edad)
  const valIncTipoContrato = valorIncrementoTipoContrato(sueldo, tipoContrato)
  const valDesSueldo = valorDescunetoSueldo(sueldo)
  const valorSeguroBasico = SEGURO_BASE + Number(valorSueldoSeguro)

  const total = valorSeguroBasico 
    + Number(valIncEdad) 
    + Number(valIncTipoContrato)
    + Number(valDesSueldo)
    - Number(valDesSueldo)

  return total
}


console.log(calculaTotal)


