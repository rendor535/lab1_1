(function() {
  document.getElementById("ex2_text").addEventListener("input", number);
  function number() {
    const correct = "Numer telefonu nie jest poprawny"
    var number = document.getElementById("ex2_text");
    const log = document.getElementById('ex2_content');
    const log3 = document.getElementById('ex3_content');
    const log4 = document.getElementById('ex4_content');
    const log5 = document.getElementById('ex5_content');

    if (number.value.match(/[\W]/)) {
      log5.textContent = "Numer nie może zawierać znaków specjalnych 🤓👆";
    }
    else {
      log5.textContent = " ";
    }

    if (number.value.match(/[a-zA-Z]/)) {
      log4.textContent = "Numer nie może zawierać liter >:(";
    }
    else {
      log4.textContent = " ";
    }

    if (number.value.length != 9) {
      log3.textContent = "Długość numeru musi być równa 9 😡😡😡";
    }
    else {
      log3.textContent = " ";
    }

    if (number.value.match(/^[0-9]+$/) && number.value.length == 9) {
      log.textContent = "Numer telefonu jest poprawny ";
    }
    else {
      log.textContent = " ";
    }
  }
})();