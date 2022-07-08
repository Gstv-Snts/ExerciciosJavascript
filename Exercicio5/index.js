const altura = document.getElementById("altura");
const button = document.querySelector("button");
const alturas = [];
button.addEventListener("click", () => {
  let sexo = document.getElementsByName("sexo");
  sexo.forEach((e) => {
    if (e.checked) {
      sexo = e.value;
    }
  });
  if (document.querySelectorAll("div").length < 5) {
    alturas.push(altura.value);
    const liAltura = document.createElement("li");
    const textAltura = document.createTextNode(altura.value);
    liAltura.appendChild(textAltura);
    const liSexo = document.createElement("li");
    const textSexo = document.createTextNode(sexo);
    liSexo.appendChild(textSexo);
    const div = document.createElement("div");
    div.appendChild(liAltura);
    div.appendChild(liSexo);
    document.querySelector("body").appendChild(div);
    console.log(altura.value);
    console.log(sexo);
  } else {
    function calcularMasculino() {
      let quantidade = 0;
      document.querySelectorAll("li").forEach((e) => {
        if (e.innerText === "M") {
          quantidade++;
        }
      });
      return quantidade;
    }
    function calcularFeminino() {
      let quantidade = 0;
      document.querySelectorAll("li").forEach((e) => {
        if (e.innerText === "F") {
          quantidade++;
        }
      });
      return quantidade;
    }
    function acharMaisAlto() {
      let maiorAltura = 0;
      let maiorAlturaSexo;
      document.querySelectorAll("li").forEach((e) => {
        if (parseInt(e.innerText) > maiorAltura) {
          maiorAltura = e.innerText;
          maiorAlturaSexo = e.nextElementSibling.innerText;
        }
      });
      return maiorAltura + " " + maiorAlturaSexo;
    }
    const masculino = document.createElement("h1");
    const masculinoText = document.createTextNode("M: " + calcularMasculino());
    masculino.appendChild(masculinoText);
    const feminino = document.createElement("h1");
    const femininoText = document.createTextNode("F: " + calcularFeminino());
    feminino.appendChild(femininoText);
    const maiorAlturaLi = document.createElement("h1");
    const maiorAlturaText = document.createTextNode(acharMaisAlto());
    maiorAlturaLi.appendChild(maiorAlturaText);
    document.querySelector("body").appendChild(masculino);
    document.querySelector("body").appendChild(feminino);
    document.querySelector("body").appendChild(maiorAlturaLi);
  }
});
