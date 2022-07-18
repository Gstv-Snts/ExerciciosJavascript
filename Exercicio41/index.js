const ul = document.getElementById("nomes");
const deuses = ["Aegir", "Aud", "Balder", "Bragi", "Búri", "Dag", "Dellingr"];

deuses.forEach((e) => {
  const li = document.createElement("li");
  li.innerText = e;
  ul.appendChild(li);
});
