'use strict';

const $inputName = document.getElementById('name')
const $inputEmail = document.getElementById('email')
const $inputAge = document.getElementById('age')
const $userList = document.getElementById('usersList')

// Nuevo
const $inputDrink = document.getElementById('drink')

function saveUser(evt) {
  // Evitar que se recargue
  evt.preventDefault();

  const name = $inputName.value
  const email = $inputEmail.value
  const age = $inputAge.value
  // Nuevo
  const drink = $inputDrink.value


  const $node = document.createElement('tr');

  const row = `
  <tr>
    <td>${drink}</td>
    <td>${name}</td>
    <td>${email}</td>
    <td>${age}</td>
  </tr>
  `
  // Nuevo
  const validate = validateAge()

  if (validate) {
    $node.innerHTML = row;
    $userList.appendChild($node)
  }

}

// Nuevo
function validateAge() {
  // const drink = $inputDrink.value
  const optionIndexSelected = $inputDrink.selectedIndex
  const drink = $inputDrink.options[optionIndexSelected].value
  const age = $inputAge.value
  
  if (age < 18 && drink !== 'Agua') {
    alert('Muy bello, pero no')
    return false
  }

  return true
}