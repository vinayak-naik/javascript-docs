let array = [40, 30, 12, 25];
// const output = [12, 25, 30, 40];

// ==================== SOLUTION-1 ====================

function sortElementsForloop(arr) {
  for (i = 0; i < arr.length; i++) {
    for (j = 0; j < arr.length; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}
console.log("sortElementsForloop==========", sortElementsForloop([...array]));

// ==================== SOLUTION-2 ====================

function sortElementsForEach(arr) {
    arr.forEach(()=>{
        arr.forEach((val, j)=>{
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
              }
        })
  })
  return arr;
}
console.log("sortElementsForEach==========", sortElementsForEach([...array]));

// ==================== SOLUTION-3 ====================

function sortElementsBySort(arr) {
    arr.sort((a, b) => a - b);
  return arr;
}
console.log("sortElementsBySort===========", sortElementsBySort([...array]));
