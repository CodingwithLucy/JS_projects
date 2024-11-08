let score = document.getElementById("score");
let mark = document.getElementById("mark");
let notification = document.getElementById("notification");
let firstNumber = document.getElementById("firstNumber");
let secondNumber = document.getElementById("secondNumber");

function getNumbers() {
  return {
    first: parseInt(firstNumber.value),
    second: parseInt(secondNumber.value),
  };
}

/*
firstNumber.addEventListener("change", firstCheck);
secondNumber.addEventListener("change", secondCheck);

document.getElementById("addition").addEventListener("click", addition);
document.getElementById("subtraction").addEventListener("click", subtraction);
document
  .getElementById("multiplication")
  .addEventListener("click", multiplication);
document.getElementById("division").addEventListener("click", division);
document
  .getElementById("exponentiation")
  .addEventListener("click", exponentiation);
*/

function checkNumber(input, name) {
  if (isNaN(parseInt(input.value))) {
    notification.textContent = "Only numbers please !!";
    input.value = "";
  } else {
    notification.textContent = "";
  }
}

function firstCheck() {
  checkNumber(firstNumber, "firstNumber");
}

function secondCheck() {
  checkNumber(firstNumber, "secondNumber");
}

function addition() {
  let { first, second } = getNumbers();

  if (!isNaN(first) && !isNaN(second)) {
    score.textContent = first + second;
    mark.textContent = "+";
  } else {
    notification.textContent = "Put some numbers, please!";
  }
}

function subtraction() {
  let { first, second } = getNumbers();

  if (!isNaN(first) && !isNaN(second)) {
    score.textContent = first - second;
    mark.textContent = "-";
  } else {
    notification.textContent = "Put some numbers, please!";
  }
}

function multiplication() {
  let { first, second } = getNumbers();

  if (!isNaN(first) && !isNaN(second)) {
    score.textContent = first * second;
    mark.textContent = "*";
  } else {
    notification.textContent = "Put some numbers, please!";
  }
}

function division() {
  let { first, second } = getNumbers();

  if (!isNaN(first) && !isNaN(second)) {
    if (second !== 0) {
      score.textContent = first / second;
      mark.textContent = "/";
    } else {
      notification.textContent = "Cannot divide by zero!";
    }
  } else {
    notification.textContent = "Put some numbers, please!";
  }
}

function exponentiation() {
  let { first, second } = getNumbers();

  if (!isNaN(first) && !isNaN(second)) {
    let result = first;

    if (second === 0) {
      result = 1;
    }

    for (let i = 1; i < second; i++) {
      result = result * first;
    }

    score.textContent = result;
    mark.textContent = "^";
  } else {
    notification.textContent = "Put some numbers, please!";
  }
}
