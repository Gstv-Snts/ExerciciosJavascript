const input = document.querySelector("input");
const button = document.querySelector("button");
const ul = document.querySelector("ul");
const conteudo = [];
button.addEventListener("click", () => {
  conteudo.push(input.value);
  ul.innerHTML = conteudo
    .map((e, i, arr) => {
      return "<li>" + e + "</li>";
    })
    .join("");
});
