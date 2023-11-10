let array = [3, 7, 12, 18, 20];

// ==================== SOLUTION-1 ====================

function reverseArrayForloop(arr) {
  let store = [];
  for (i = arr.length - 1; i >= 0; i--) {
    store.push(arr[i]);
  }
  return store;
}
console.log("reverseArrayForloop=============", reverseArrayForloop(array));

// ==================== SOLUTION-2 ====================

function reverseArrayByReverse(arr) {
  return arr.reverse();
}
console.log(
  "reverseArrayByReverse===========",
  reverseArrayByReverse([...array])
);

// ==================== SOLUTION-3 ====================

function reverseArraySplice(arr) {
  const store = [];
  arr.forEach((item) => {
    store.splice(0, 0, item);
  });
  return store;
}
console.log("reverseArraySplice==============", reverseArraySplice(array));
