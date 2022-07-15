const resultado = document.getElementById("resultado");
for (let i = 0; i <= 10; i++) {
  const li = document.createElement("li");
  const text = document.createTextNode(i);
  li.appendChild(text);
  resultado.appendChild(li);
}

for (let i = 2; i <= 20; i += 2) {
  const text = document.createTextNode(i);
  resultado.appendChild(text);
}
