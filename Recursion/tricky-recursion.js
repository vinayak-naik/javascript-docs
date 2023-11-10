function test(x) {

  console.warn("before====", x);

  if (x > 0) {
    test(x - 1);
  }
  
  console.warn("after====", x);

}

let data = 5;
test(data);
