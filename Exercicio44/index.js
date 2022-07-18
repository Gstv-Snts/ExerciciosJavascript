const div = document.querySelector("div");
let timer = 0;
setInterval(() => {
  timer++;
  div.innerText = timer;
}, 1000);
