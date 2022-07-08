const nome = document.querySelector("input");
const button = document.querySelector("button");

button.addEventListener("click", () => {
  const nomeInvertido = nome.value.split("").reverse();
  const li = document.createElement("li");
  const text = document.createTextNode(nomeInvertido.join(""));
  li.appendChild(text);
  document.querySelector("body").appendChild(li);
});
