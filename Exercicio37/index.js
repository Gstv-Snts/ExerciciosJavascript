const deuses = ["Aegir", "Aud", "Balder"];

deuses.map((e) => {
  return alert(e + " Map");
});
deuses.reduce((p, e, i, arr) => {
  return alert(e + " Reduce");
}, "");
deuses.filter((e, i, arr) => {
  return alert(e + " Filter");
});
