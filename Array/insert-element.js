const array = [60, 30, 10, 67, 40];
const position = 2;
const newElement = 70;
// const output=[60,30,70,10,67,40];

// ==================== SOLUTION-1 ====================

function insertElementForloop(arr, position, newElement) {

    for (let i = arr.length - 1; i >= 0; i--) {
        if (i >= position) {
          arr[i + 1] = arr[i];
          if (i == position) {
            arr[i] = newElement;
          }
        }
      }
  return arr;
}
console.log(
  "insertElementForloop==========",
  insertElementForloop([...array], position, newElement)
);

// ==================== SOLUTION-2 ====================

function insertElementFilter(arr, position, newElement) {
    const beforePosition = arr.filter((item, i) => i < position);

    const afterPosition = arr.filter((item, i) => i >= position);
  
    return [...beforePosition,newElement, ...afterPosition];
  }
console.log(
  "insertElementFilter===========",
  insertElementFilter([...array], position, newElement)
);

// ==================== SOLUTION-3 ====================

function insertElementForEach(arr, position, newElement) {
  const store = [];

  arr.forEach((item, i) => {
    if (i == position) store.push(newElement);
    store.push(item);
  });

  return store;
}
console.log(
  "insertElementForEach==========",
  insertElementForEach(array, position, newElement)
);

// ==================== SOLUTION-4 ====================

function insertElementReduce(arr, position, newElement) {
  const store = arr.reduce((acc, cur, i) => {
    if (i == position) acc.push(newElement);
    acc.push(cur);
    return acc;
  }, []);

  return store;
}
console.log(
  "insertElementReduce===========",
  insertElementReduce(array, position, newElement)
);
// ==================== SOLUTION-5 ====================

const insertElementSpread = (arr, position, newElement) => [
  ...arr.slice(0, position),
  newElement,
  ...arr.slice(position, arr.length),
];
console.log(
  "insertElementSpread===========",
  insertElementSpread(array, position, newElement)
);

// ==================== SOLUTION-6 ====================

const insertElementSplice = (arr, position, newElement) => {
  arr.splice(position, 0, newElement);
  return arr;
};
console.log(
  "insertElementSplice===========",
  insertElementSplice(array, position, newElement)
);
