/**
 * Mostrar las paises en orden alfabetico 
 * que tengan mas de 4 letras en su nombre
 * ['Colombia', 'Argentina', 'Usa', 'Nigeria', 'Cuba', 'Francia']
 */

const countries = [
  'Colombia',
  'Argentina',
  'Usa',
  'Nigeria',
  'Cuba',
  'Francia'
]

countries
  .filter(country => country.length > 4)
  .sort((a, b) => a > b)
