const button = document.querySelector("button");
const input = document.querySelector("input");

button.addEventListener("click", () => {
  const random = Math.floor(Math.random() * 10);
  if (parseInt(input.value) === random) {
    alert("Acertou!");
  } else {
    alert("Errou!");
  }
});
