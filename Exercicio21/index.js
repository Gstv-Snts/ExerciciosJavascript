const nome = document.getElementById("nome");
const sobrenome = document.getElementById("sobrenome");
const button = document.querySelector("button");

button.addEventListener("click", () => {
  alert(`Olá ${nome.value} ${sobrenome.value}`);
});
