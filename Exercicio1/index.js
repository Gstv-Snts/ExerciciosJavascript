const input = document.querySelector("input");
const button = document.querySelector("button");
const h1 = document.querySelector("h1");
let vezesClicadas = 0;
h1.innerText = 0;
let soma = 0;
button.addEventListener("click", () => {
  vezesClicadas++;
  sum += parseInt(numero.value);
  h1.innerText = (sum / vezesClicadas).toFixed(1);
});
