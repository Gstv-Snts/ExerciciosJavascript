const img = document.querySelector("img");
let ligadoDesligado = true;
img.addEventListener("click", () => {
  if (ligadoDesligado) {
    img.src =
      "https://raw.githubusercontent.com/gabrieldarezzo/helpjs-ravi/master/images/lampada-on.jpg";
    ligadoDesligado = false;
  } else {
    img.src =
      "https://raw.githubusercontent.com/gabrieldarezzo/helpjs-ravi/master/images/lampada.jpg";
    ligadoDesligado = true;
  }
});
