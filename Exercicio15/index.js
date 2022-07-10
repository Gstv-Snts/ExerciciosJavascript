function getSexo() {
  let sexo;
  document.getElementsByName("sexo").forEach((e) => {
    if (e.checked) {
      sexo = e.value;
    }
  });
  return sexo;
}
function calcularMediaFeminina() {
  let media = 0;
  let quantidade = 0;
  sexos.forEach((e, i) => {
    if (e === "F") {
      media += parseInt(alturas[i]);
      quantidade++;
    }
  });
  if (media === 0 && quantidade === 0) {
    return 0;
  } else {
    return media / quantidade;
  }
}
function calcularQuantidadeHomens() {
  let quantidade = 0;
  sexos.forEach((e) => {
    if (e === "M") {
      quantidade++;
    }
  });
  return quantidade;
}
const getAltura = document.querySelector("#altura");
const button = document.querySelector("button");
const body = document.querySelector("body");
const alturas = [];
const sexos = [];
button.addEventListener("click", () => {
  if (alturas.length === 15 && !document.querySelectorAll("li").length) {
    const conteudo = document.createElement("div");
    console.log(alturas);
    console.log(sexos);
    conteudo.innerHTML = `
    <li>Maior altura: ${Math.max.apply(
      null,
      alturas
    )} Menor altura: ${Math.min.apply(null, alturas)}</li>
    <li>
      Média de altura feminina: ${calcularMediaFeminina()}
    </li>
    <li>
    Quantidade de homens: ${calcularQuantidadeHomens()}
    </li>
    `;
    document.querySelector("body").appendChild(conteudo);
  } else if (alturas.length < 15) {
    alturas.push(getAltura.value);
    sexos.push(getSexo());
    document.querySelector("div").innerText = alturas.length;
  }
});
