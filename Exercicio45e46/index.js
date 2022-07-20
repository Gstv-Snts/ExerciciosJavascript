const conteudo = [
  { name: "Aegir", power: 10 },
  { name: "Aud", power: 5 },
  { name: "Balder", power: 7 },
  { name: "Bragi", power: 4 },
  { name: "Búri", power: 9 },
  { name: "Dag", power: 10 },
  { name: "Dellingr", power: 3 },
];
const nome = document.getElementById("nome");
const poder = document.getElementById("poder");
const button = document.querySelector("button");
const div = document.querySelector("div");
const getDirecao = () => {
  let direcao;
  document.getElementsByName("direcao").forEach((e) => {
    if (e.checked) {
      direcao = true;
    } else {
      direcao = false;
    }
  });
  return direcao;
};
const reload = () => {
  if (!getDirecao()) {
    conteudo.sort((a, b) => {
      return a.power - b.power;
    });
  } else {
    conteudo.sort((a, b) => {
      return b.power - a.power;
    });
  }
  div.innerHTML = conteudo
    .map((e, i) => {
      return `
      <div>
      <h1 style="display: inline-block;">${i + 1}</h1>
      <li style="display: inline-block;">Nome: ${e.name}</li> |
      <li style="display: inline-block;">Poder: ${e.power}</li>
      <button id="delete" style="background-color:red">Deletar</button>
      <button type="radio" id="update" style="background-color:green">Editar</button>
      <div style="display:none">
      <input type="text">
      <input type="number">
      <button id="confirmar" style="background-color:green">Confirmar</button>
      <button id="cancelar" style="background-color:gray">Cancelar</button>
      </div>
      </div>
      `;
    })
    .join("");
  document.querySelectorAll("#delete").forEach((e) => {
    e.addEventListener("click", (e) => {
      conteudo.splice(e.path[1].childNodes[1].innerText - 1, 1);
      reload();
    });
  });
  document.querySelectorAll("#update").forEach((e) => {
    e.addEventListener("click", (e) => {
      console.log((e.path[1].childNodes[11].style.display = "block"));
      e.path[1].childNodes[11].style.display = "block";
    });
  });
  document.querySelectorAll("#cancelar").forEach((e) => {
    e.addEventListener("click", (e) => {
      e.path[1].style.display = "none";
    });
  });
  document.querySelectorAll("#confirmar").forEach((e) => {
    e.addEventListener("click", (e) => {
      conteudo[e.path[2].childNodes[1].innerText - 1].name =
        e.path[1].childNodes[1].value;
      conteudo[e.path[2].childNodes[1].innerText - 1].power =
        e.path[1].childNodes[3].value;
      e.path[1].style.display = "none";
      reload();
    });
  });
};
reload();
button.addEventListener("click", () => {
  conteudo.push({ name: nome.value, power: poder.value });
  console.log(conteudo);
  console.log(getDirecao());
  reload();
});
document.getElementsByName("direcao").forEach((e) => {
  e.addEventListener("click", () => {
    reload();
  });
});
