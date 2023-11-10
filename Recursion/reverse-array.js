let array = [3, 7, 12, 18, 20];

// ==================== SOLUTION-1 ====================

function reverseArrayRecursion(arr) {
  let data = arr;
  let temp;
  const customReverse = (data, start, end) => {
    console.warn(data);
    if (start <= end) {
      temp = data[start];
      data[start] = data[end];
      data[end] = temp;
      customReverse(data, start + 1, end - 1);
    }
  };
  customReverse(data, 0, data.length - 1);
  return data;
}

console.log("reverseArrayRecursion=============", reverseArrayRecursion(array));
