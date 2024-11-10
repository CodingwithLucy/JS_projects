let score = document.getElementById("score");
let mark = document.getElementById("mark");
let result = document.getElementById("result");
let firstNumber = document.getElementById("firstNumber");
let secondNumber = document.getElementById("secondNumber");

function getNumbers() {
  return {
    first: parseInt(firstNumber.value),
    second: parseInt(secondNumber.value),
  };
}

function checkNumber(input, name) {
  if (isNaN(parseInt(input.value))) {
    result.textContent = "Only numbers please !!";
    input.value = "";
  } else {
    result.textContent = "";
  }
}

function firstCheck() {
  checkNumber(firstNumber, "firstNumber");
}

function secondCheck() {
  checkNumber(secondNumber, "secondNumber");
}

function addition() {
  let { first, second } = getNumbers();

  if (!isNaN(first) && !isNaN(second)) {
    score.textContent = first + second;
    mark.textContent = "+";
  } else {
    result.textContent = "Put some numbers, please!";
  }
}

function subtraction() {
  let { first, second } = getNumbers();

  if (!isNaN(first) && !isNaN(second)) {
    score.textContent = first - second;
    mark.textContent = "-";
  } else {
    result.textContent = "Put some numbers, please!";
  }
}

function multiplication() {
  let { first, second } = getNumbers();

  if (!isNaN(first) && !isNaN(second)) {
    score.textContent = first * second;
    mark.textContent = "*";
  } else {
    result.textContent = "Put some numbers, please!";
  }
}

function division() {
  let { first, second } = getNumbers();

  if (!isNaN(first) && !isNaN(second)) {
    if (second !== 0) {
      score.textContent = first / second;
      mark.textContent = "/";
    } else {
      result.textContent = "Cannot divide by zero!";
    }
  } else {
    result.textContent = "Put some numbers, please!";
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
    result.textContent = "Put some numbers, please!";
  }
}

function calculateDistance() {
  let lat1 = parseFloat(document.getElementById("lat1").value);
  let lon1 = parseFloat(document.getElementById("lon1").value);
  let lat2 = parseFloat(document.getElementById("lat2").value);
  let lon2 = parseFloat(document.getElementById("lon2").value);
  if (!isNaN(lat1) && !isNaN(lon1) && !isNaN(lat2) && !isNaN(lon2)) {
    const toRadians = (degree) => degree * (Math.PI / 180);
    const R = 3440.065;
    const dLat = toRadians(lat2 - lat1);
    const dLon = toRadians(lon1 - lon2);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(toRadians(lat1)) *
        Math.cos(toRadians(lat2)) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = R * c;
    document.getElementById(
      "distance"
    ).textContent = `Distance in nautical miles: ${distance.toFixed(2)}`;
  } else {
    result.textContent = "Provide the correct coordinates, please!";
  }
}
