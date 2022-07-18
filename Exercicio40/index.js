const numbers = [5, 7, 1, 8, 9];

numbers.sort((a, b) => {
  if (a < b) {
    return 1;
  } else {
    return -1;
  }
});

numbers.forEach((e) => {
  alert(e);
});
