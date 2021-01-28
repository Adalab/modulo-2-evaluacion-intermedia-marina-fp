'use strict'

//Se genera un número aleatorio y se muestra en consola
function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
  }
  console.log(getRandomNumber(100));

//Me traigo el intento de la usuaria
const attemptNumber = document.querySelector('.js-attempt')

//Elemento HTML botón
const tryButtonElement = document.querySelector('.js-button');

//Handler del evento (condicional en este caso)
function showClue() {
  const clueElement = document.querySelector('.js-clue');
  if (attemptNumber > getRandomNumber()) {
  clueElement.innerHTML = 'Demasiado alto';
} else if (attemptNumber < getRandomNumber()) {
  clueElement.innerHTML = 'Demasiado bajo';
} else if (attemptNumber === getRandomNumber()) {
  clueElement.innerHTML = '¡Acertaste, campeona!';
} else {
  clueElement.innerHTML = 'El número debe estar entre 1 y 100';}
}

//Listener del evento (hacer click en el botón)
tryButtonElement.addEventListener('click', showClue)
