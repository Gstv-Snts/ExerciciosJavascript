const verde = document.getElementById("verde");
const vermelho = document.getElementById("vermelho");

verde.addEventListener("click", () => {
  document.querySelector("html").style.backgroundColor = "green";
});
vermelho.addEventListener("click", () => {
  document.querySelector("html").style.backgroundColor = "red";
});
