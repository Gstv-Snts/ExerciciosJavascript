const input = document.querySelector("input");
const button = document.querySelector("button");
let pares = 0;
button.addEventListener("click", () => {
  if (parseInt(input.value) % 2 === 0) {
    pares += parseInt(input.value);
  }
  document.querySelector("div").innerText = pares;
});
