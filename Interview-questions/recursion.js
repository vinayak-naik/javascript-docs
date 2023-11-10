// 1) What is head and tail recursion?

// ---------------------------------------------------------------

// 2) What will be the expected output?
function test(x) {
  if (x > 0) {
    test(x - 1);
  }

  console.warn( x);
}
// output: 0 1 2 3 4 5

// ---------------------------------------------------------------