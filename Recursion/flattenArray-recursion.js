const array = [5, [6, 8, [7, 2], [3, 9], [4, [5, 0]], [1, 4], 7, [2, 8]]];

const output = [5, 6, 8, 7, 2, 3, 9, 4, 5, 0, 1, 4, 7, 2, 8];

// ==================== SOLUTION-1 ====================

// function flattenArrayByFlat(arr) {
//   return arr.flat(Infinity);
// }
// console.log("flattenArrayByFlat==========", flattenArrayByFlat(array));

// ==================== SOLUTION-2 ====================

function flattenArrayByRecursion(items) {
    const flat = [];
  
    items.forEach(item => {
      if (typeof item==='object') {
        flat.push(...flattenArrayByRecursion(item));
      } else {
        flat.push(item);
      }
    });
  
    return flat;
  }
console.log("flattenArrayByRecursion==========", flattenArrayByRecursion(array));
