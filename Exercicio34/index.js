const dataAtual = new Date();

if (dataAtual.getMonth() === 12) {
  console.log(1);
  return 1;
} else {
  console.log(dataAtual.getMonth() + 1);
  return dataAtual.getMonth() + 1;
}
