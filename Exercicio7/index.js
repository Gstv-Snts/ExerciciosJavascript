const data = document.querySelector("input");
const button = document.querySelector("button");

button.addEventListener("click", () => {
  if (document.querySelector("li")) {
    document.querySelector("li").remove();
  }
  console.log(data.value);
  const dia = data.value.slice(8, 10);
  const mes = data.value.slice(5, 7);
  const ano = data.value.slice(0, 4);
  console.log(dia);
  console.log(mes);
  console.log(ano);
  const li = document.createElement("li");
  const text = document.createTextNode(
    "dia: " + dia + " mês: " + mes + " ano: " + ano
  );
  li.appendChild(text);
  document.querySelector("body").appendChild(li);
});
