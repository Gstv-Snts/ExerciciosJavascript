const input = document.querySelector("input");
const button = document.querySelector("button");

button.addEventListener("click", () => {
  const numeros = [];
  for (let i = 1; i <= input.value; i++) {
    numeros.push(i);
  }
  alert(numeros);
});
