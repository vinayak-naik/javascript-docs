let array = [20, 40, 60, 5, 10, 70, 80, 99];
let element = 60;


// ==================== SOLUTION-1 ====================

function searchElementForloop(arr, element) {
  let index = undefined;
  for (i = 0; i <= arr.length - 1; i++) {
    // console.warn(arr[i])
    if (arr[i] === element) {
      index = i;
      break;
    }
  }
  return index
}
console.log(searchElementForloop(array,element))


// ==================== SOLUTION-2 ====================

function searchElemenByIndexOf(arr, element) {

  return arr.indexOf(element)
}
console.log(searchElemenByIndexOf(array,element))
