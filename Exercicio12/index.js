const numero = document.querySelector("input");

const button = document.querySelector("button");

button.addEventListener("click", () => {
  if (numero.valueAsNumber < 0) {
    alert("Digite um numero positivo!");
  } else if (numero.valueAsNumber >= 0 && numero.valueAsNumber < 10) {
    alert("Insuficiente");
  } else if (numero.valueAsNumber >= 10 && numero.valueAsNumber < 14) {
    alert("Bom!");
  } else {
    alert("Ótimo!");
  }
});
