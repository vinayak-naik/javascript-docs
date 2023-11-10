const array = [60, 30, 10, 67, 40];
const position = 2;
// // const output=[60,30,70,10,67,40];

// ==================== SOLUTION-1 ====================

function removeElementForloop(arr, position) {

for (let i = position; i < arr.length - 1; i++) {
    arr[i] = arr[i + 1];
  }
  arr.length = arr.length - 1;
  return arr;
}
console.log(
  "removeElementForloop==========",
  removeElementForloop(array, position)
);

// ==================== SOLUTION-2 ====================

function removeElementFilter(arr, position) {
    const beforePosition = array.filter((item, i) => i < position);

    const afterPosition = array.filter((item, i) => i > position);
  
    return [...beforePosition, ...afterPosition];
  }
console.log(
  "removeElementFilter===========",
  removeElementFilter([...array], position)
);

// ==================== SOLUTION-3 ====================

function removeElementForEach(arr, position) {
  const store = [];

  arr.forEach((item, i) => {
    if (i == position) return;
    store.push(item);
  });

  return store;
}
console.log(
  "removeElementForEach==========",
  removeElementForEach(array, position)
);
// ==================== SOLUTION-4 ====================

function removeElementReduce(arr, position) {
  const store = arr.reduce((acc, cur, i) => {
    if (i == position) return acc;
    acc.push(cur);
    return acc;
  }, []);

  return store;
}
console.log(
  "removeElementReduce===========",
  removeElementReduce(array, position)
);
// ==================== SOLUTION-5 ====================

const removeElementSpread = (arr, position) => [
  ...arr.slice(0, position),
  ...arr.slice(position + 1, arr.length),
];
console.log(
  "removeElementSpread===========",
  removeElementSpread(array, position)
);

// ==================== SOLUTION-6 ====================

const removeElementSplice = (arr, position) => {
  arr.splice(position, 1);
  return arr;
};
console.log(
  "removeElementSplice===========",
  removeElementSplice(array, position)
);


