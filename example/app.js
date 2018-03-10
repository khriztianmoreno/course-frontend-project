'use strict';

// NUEVO
// Initialize Firebase
const config = {
  apiKey: "AIzaSyDIjG86wPeDpDm7EwtxvOa6kHplTlwDaW0",
  authDomain: "fir-front.firebaseapp.com",
  databaseURL: "https://fir-front.firebaseio.com",
  projectId: "fir-front",
  storageBucket: "fir-front.appspot.com",
  messagingSenderId: "1092284647709"
};
firebase.initializeApp(config);

const $inputName = document.getElementById('name')
const $inputEmail = document.getElementById('email')
const $inputAge = document.getElementById('age')
const $userList = document.getElementById('usersList')
const $inputDrink = document.getElementById('drink')
// NUEVO
const database = firebase.database()

function saveUser(evt) {
  // Evitar que se recargue
  evt.preventDefault();

  const name = $inputName.value
  const email = $inputEmail.value
  const age = $inputAge.value
  const drink = $inputDrink.value

  // NUEVO
  const id = Math.floor(Math.random() * 3333333)
  // ES6
  const user = {
    name,
    email,
    age,
    drink
  }
  debugger
  database.ref(`users/${id}`).set(user)

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