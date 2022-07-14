const maiorOuMenor = (dia, mes, ano) => {
  const aniversario = new Date(ano, mes, dia) / 1000 / 60 / 60 / 24 / 365.25;
  const dataAtual = Date.now() / 1000 / 60 / 60 / 24 / 365.25;
  if (dataAtual - aniversario >= 18) {
    return `Você tem ${(dataAtual - aniversario).toFixed(
      1
    )}, então você é maior de idade.`;
  } else {
    return `Você tem ${(dataAtual - aniversario).toFixed(
      1
    )}, então você é menor de idade.`;
  }
};
