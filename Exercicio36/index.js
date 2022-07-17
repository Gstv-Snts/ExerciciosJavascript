const deuses = ["Aegir", "Aud", "Balder"];

for (let i = 0; i < deuses.length; i++) {
  alert(deuses[i]);
}
deuses.forEach((e) => {
  alert(e);
});
let i = 0;
while (i < deuses.length) {
  alert(deuses[i]);
  i++;
}
i = 0;
do {
  alert(deuses[i]);
} while (i < deuses.length);
