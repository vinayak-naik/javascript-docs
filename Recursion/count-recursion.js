function incCount(x) {
  console.log(x);
  if (x < 10) {
    incCount(x + 1);
  }
}
let data = 0;
incCount(data);
