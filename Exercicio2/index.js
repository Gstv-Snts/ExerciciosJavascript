const numeros = [];
const input = document.querySelector("input");
const button = document.querySelector("button");

button.addEventListener("click", () => {
  if (numeros.length === 4 && document.querySelectorAll("li").length === 0) {
    numeros.push(input.value);
    numeros.forEach((e) => {
      console.log(e);
      const li = document.createElement("li");
      const text = document.createTextNode(e * e);
      li.appendChild(text);
      document.querySelector("body").appendChild(li);
    });
  } else if (!document.querySelectorAll("li").length) {
    numeros.push(input.value);
  }
});
