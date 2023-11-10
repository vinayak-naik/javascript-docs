let array1 = [3, 7, 12];
let array2 = [20, 30, 40];

// ==================== SOLUTION-1 ====================

function mergeTwoArraysForloop(arr1, arr2) {
  let arr3 = [];
  for (i = 0; i < arr1.length; i++) {
    arr3[i] = arr1[i];
  }
  for (i = 0; i < arr2.length; i++) {
    arr3[arr1.length + i] = arr2[i];
  }
  return arr3;
}
console.log(
  "mergeTwoArraysForloop==========",
  mergeTwoArraysForloop(array1, array2)
);

// ==================== SOLUTION-2 ====================

function mergeTwoArraysSpread(arr1, arr2) {
  return [...arr1, ...arr2];
}
console.log(
  "mergeTwoArraysSpread===========",
  mergeTwoArraysSpread(array1, array2)
);
// ==================== SOLUTION-3 ====================

function mergeTwoArraysForEach(arr1, arr2) {
  arr2.forEach((item) => {
    arr1.push(item);
  });
  return arr1;
}
console.log(
  "mergeTwoArraysForEach==========",
  mergeTwoArraysForEach([...array1], [...array2])
);
// ==================== SOLUTION-4 ====================

function mergeTwoArraysConcat(arr1, arr2) {
  return arr1.concat(arr2);
}
console.log(
  "mergeTwoArraysConcat===========",
  mergeTwoArraysConcat(array1, array2)
);
