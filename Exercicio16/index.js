const getIdade = document.getElementById("idade");
const getOpiniao = () => {
  let op;
  document.getElementsByName("opiniao").forEach((e) => {
    if (e.checked) {
      op = e.value;
    }
  });
  return parseInt(op);
};
function calcularMédiaDasIdadeOtimo() {
  let somaIdades = 0;
  let quantidade = 0;
  opinioes.forEach((e, i) => {
    if (e === 1) {
      quantidade++;
      somaIdades += idades[i];
    }
  });
  if (!somaIdades) {
    return 0;
  } else {
    return (somaIdades / quantidade).toFixed(1);
  }
}
function calcularQuantiadeRegular() {
  let quantidade = 0;
  opinioes.forEach((e) => {
    if (e === 3) {
      quantidade++;
    }
  });
  return quantidade;
}
function calcularPorcentagemBom() {
  quantidade = 0;
  opinioes.forEach((e) => {
    if (e === 2) {
      quantidade++;
    }
  });
  return ((quantidade / opinioes.length) * 100).toFixed(1);
}
const button = document.querySelector("button");
const idades = [];
const opinioes = [];

button.addEventListener("click", () => {
  if (idades.length >= 15) {
    idades.push(parseInt(getIdade.value));
    opinioes.push(getOpiniao());
    document.querySelectorAll("li").forEach((e) => {
      e.remove();
    });
    const estatisticas = document.createElement("div");
    estatisticas.innerHTML = `
      <li>${calcularMédiaDasIdadeOtimo()}</li>
      <li>${calcularQuantiadeRegular()}</li>
      <li>${calcularPorcentagemBom()}%</li>
    `;
    document.querySelector("body").appendChild(estatisticas);
  } else {
    idades.push(parseInt(getIdade.value));
    opinioes.push(getOpiniao());
    document.querySelector("h1").innerHTML = idades.length;
  }
});
