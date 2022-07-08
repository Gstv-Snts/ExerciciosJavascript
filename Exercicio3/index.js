const numeros = [];
const input = document.querySelector("input");
const button = document.querySelector("button");
button.addEventListener("click", () => {
  let maiorNumero;
  if (numeros.length === 4 && !document.querySelector("li")) {
    const li = document.createElement("li");
    const text = document.createTextNode(Math.max(...numeros));
    li.appendChild(text);
    document.querySelector("body").appendChild(li);
  } else if (numeros.length < 5) {
    numeros.push(input.value);
  }
});
