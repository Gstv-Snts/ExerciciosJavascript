function totalDeHomens() {
  let quantidade = 0;
  sexos.forEach((e) => {
    if (e === "M") {
      quantidade++;
    }
  });
  return quantidade;
}
function totalDeMulheres() {
  let quantidade = 0;
  sexos.forEach((e) => {
    if (e === "F") {
      quantidade++;
    }
  });
  return quantidade;
}
function mediaIdadeHomen() {
  let soma = 0;
  sexos.forEach((e, i) => {
    if (e === "M") {
      soma += idades[i];
    }
  });
  if (!totalDeHomens()) {
    return 0;
  } else {
    return (soma / totalDeHomens()).toFixed(1);
  }
}
function mediaPesoMulher() {
  let soma = 0;
  sexos.forEach((e, i) => {
    if (e === "F") {
      soma += pesos[i];
    }
  });
  if (!totalDeMulheres()) {
    return 0;
  } else {
    return (soma / totalDeMulheres()).toFixed(1);
  }
}
const getIdade = document.getElementById("idade");
const getPeso = document.getElementById("peso");
const getSexo = () => {
  let sexo;
  document.getElementsByName("sexo").forEach((e) => {
    if (e.checked) {
      sexo = e.value;
    }
  });
  return sexo;
};
const button = document.querySelector("button");
const idades = [];
const pesos = [];
const sexos = [];
button.addEventListener("click", () => {
  if (idades.length === 10) {
    const div = document.createElement("div");
    div.innerHTML = `
    <li>${totalDeHomens()}</li>
    <li>${totalDeMulheres()}</li>
    <li>${mediaIdadeHomen()}</li>
    <li>${mediaPesoMulher()}</li>
    `;
    document.querySelector("body").appendChild(div);
  } else {
    idades.push(parseInt(getIdade.value));
    pesos.push(parseInt(getPeso.value));
    sexos.push(getSexo());
    document.querySelector("div").innerText = idades.length;
  }
});
