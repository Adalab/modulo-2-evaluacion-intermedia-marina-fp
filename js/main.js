"use strict";

const numberInput = document.querySelector(".js-attempt");
const tryButtonElement = document.querySelector(".js-button");
const clueElement = document.querySelector(".js-clue");
const counterInput = document.querySelector(".js-counter");

//Se genera un número aleatorio,se muestra en consola y lo guardo en una constante (líneas 52 y 53)
function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}

//Función que pinta la pista después de que la usuaria envíe su intento
function renderClue(message) {
  clueElement.innerHTML = message;
}

//Función que comprueba el valor introducido por la usuaria
function checkNumber() {
  const userNumberValue = numberInput.value;
  const numberValue = parseInt(userNumberValue);

  //Condición por si la usuaria no introduce nada
  if (isNaN(numberValue)) {
    renderClue("Debes introducir un número");
  }
  //Comprobación de que el intento está dentro del rango marcado
  else if (numberValue < 1 || userNumberValue > 100) {
    renderClue("El número debe estar entre 1 y 100");
  } else if (numberValue > randomNumber) {
    renderClue("Pista: Demasiado alto");
  } else if (numberValue < randomNumber) {
    renderClue("Pista: Demasiado bajo");
  } else {
    renderClue("¡Acertaste, campeona!");
  }
}

//Función para incrementar el número de intentos
function increaseCounter() {
  attemptsCounter = attemptsCounter + 1;
  counterInput.innerHTML = `Número de intentos: ${attemptsCounter}`;
}

//Función que escucha el click en el botón "Prueba" y desencadena las dos acciones (funciones)
function handleClickTryButton(event) {
  checkNumber();
  event.preventDefault();
  increaseCounter();
}

const randomNumber = getRandomNumber(100);
console.log(randomNumber);
let attemptsCounter = 0;

//Listener del evento (hacer click en el botón "Prueba")
tryButtonElement.addEventListener("click", handleClickTryButton);
