function clickNaCaixa(e) {
  alert("Caixa " + this.id + " clickada!");
}

document.querySelectorAll("div").forEach((e) => {
  e.addEventListener("click", clickNaCaixa);
});
