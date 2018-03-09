'use strict';

const $inputName = document.getElementById('name')
const $inputEmail = document.getElementById('email')
const $inputAge = document.getElementById('age')
const $userList = document.getElementById('usersList')

function saveUser(evt) {
  // Evitar que se recargue
  evt.preventDefault();

  const name = $inputName.value
  const email = $inputEmail.value
  const age = $inputAge.value

  const row = `
  <tr>
    <td>1</td>
    <td>${name}</td>
    <td>${email}</td>
    <td>${age}</td>
  </tr>
  `
  $userList.innerHTML = row
}
