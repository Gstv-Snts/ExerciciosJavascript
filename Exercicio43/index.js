const input = document.querySelector("input");
const button = document.querySelector("button");
const ul = document.querySelector("ul");
const conteudo = [];
button.addEventListener("click", () => {
  conteudo.push(input.value);
  ul.innerHTML = conteudo
    .map((e, i) => {
      if ((i + 1) % 2 === 0) {
        return `<li style="background-color: green;">${e}</li>`;
      } else {
        return `<li>${e}</li>`;
      }
    })
    .join("");
});
