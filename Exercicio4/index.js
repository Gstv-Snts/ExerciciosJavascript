const input = document.querySelector("input");
const button = document.querySelector("button");

button.addEventListener("click", () => {
  const lis = document.querySelectorAll("li");
  if (lis.length < 8) {
    const li = document.createElement("li");
    const text = document.createTextNode(input.value);
    li.appendChild(text);
    document.querySelector("body").appendChild(li);
  } else {
    for (let i = 0; i < lis.length; i++) {
      console.log(lis[i].textContent);
      if (lis[i].textContent >= 18) {
        lis[i].style.backgroundColor = "green";
      } else {
        lis[i].style.backgroundColor = "red";
      }
    }
  }
});
