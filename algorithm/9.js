/**
 * Una persona compra 3 articulos de diferentes precios, 
 * a cada uno de ellos se le agrega un 15% de IVA 
 * y al final le dan un 4% de descuento total, 
 * cuanto pagara finalmente?
 */

const IVA = 0.15
const DESC = 0.04

// Pedir el valor de los articulos
const article1 = prompt('Valor del articulo 1:')
const article2 = prompt('Valor del articulo 2:')
const article3 = prompt('Valor del articulo 3:')

debugger
// Calcular el valor del IVA
const article1IVA = article1 * IVA
const article2IVA = article2 * IVA
const article3IVA = article3 * IVA

// Total del articulo incluyendo el IVA
const totalArticle1 = Number(article1) + Number(article1IVA)
const totalArticle2 = Number(article2) + Number(article2IVA)
const totalArticle3 = Number(article3) + Number(article3IVA)

// Total de los arcticulos con IVA
const totalArticles = totalArticle1 + totalArticle2 + totalArticle3

// Caluclar el total del DESCUENTO
const totalDesc = totalArticles * DESC

// Calcular el NETO a pagar
const totalPay = totalArticles - totalDesc

console.log('Total a pagar es:', totalPay)