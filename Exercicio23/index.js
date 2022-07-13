const input = document.querySelector("input");
const label = document.querySelector("label");

input.addEventListener("input", () => {
  label.innerText = input.value.replaceAll(/[.-]/g, "");
});
