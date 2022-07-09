const primeiraCaixa = document.querySelectorAll("div")[0];
const tudo = document.querySelectorAll("*");

console.log(tudo);
tudo.forEach((e) => {
  e.addEventListener("click", (e) => {
    if (e.target.innerText != "Caixa 1") {
      alert("perdeu o foco");
      e.stopPropagation();
    }
  });
});
