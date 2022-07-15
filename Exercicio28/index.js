const div = document.getElementById("resultado");
div.innerHTML = "<li>Repetição</li>";
div.innerHTML = "<li>Repetição</li><li>Repetição</li>";
for (let i = 0; i < 20; i++) {
  const li = document.createElement("li");
  const text = document.createTextNode("Repetição");
  li.appendChild(text);
  div.appendChild(li);
}
const rep = ["Repetição", "Repetição", "Repetição", "Repetição", "Repetição"];
rep.forEach((e) => {
  const li = document.createElement("li");
  const text = document.createTextNode(e);
  li.appendChild(text);
  div.appendChild(li);
});
let i = 0;
while (i < 5) {
  const li = document.createElement("li");
  const text = document.createTextNode("Repetição");
  li.appendChild(text);
  div.appendChild(li);
  i++;
}
i = 0;
do {
  const li = document.createElement("li");
  const text = document.createTextNode("Repetição");
  li.appendChild(text);
  div.appendChild(li);
  i++;
} while (i < 5);
console.log(document.querySelectorAll("li"));
