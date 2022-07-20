const div = document.querySelector("div");
setInterval(() => {
  const horarioAtual = new Date();
  const getHoras = () => {
    if (horarioAtual.getHours() < 10) {
      return "0" + horarioAtual.getHours();
    } else {
      return horarioAtual.getHours();
    }
  };
  const getMinutos = () => {
    if (horarioAtual.getMinutes() < 10) {
      return "0" + horarioAtual.getMinutes();
    } else {
      return horarioAtual.getMinutes();
    }
  };
  const getSegundos = () => {
    if (horarioAtual.getSeconds() < 10) {
      return "0" + horarioAtual.getSeconds();
    } else {
      return horarioAtual.getSeconds();
    }
  };
  div.innerText = `${getHoras()}:${getMinutos()}:${getSegundos()}`;
}, 1000);
