const array = [1, 2, 3, 4, 5, 4, 3];

Array.prototype.myFilter = function(cb) {
    console.log('this=========',this)
    const newArr = [];
  for (i = 0; i < this.length; i++) {
    if (cb(this[i])) {
      newArr.push(this[i]);
    }
  }
  return newArr;
  }

const polyfillFilter = (arr, cb) => {
  const newArr = [];
  for (i = 0; i < arr.length; i++) {
    if (cb(arr[i])) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
};

const filterResult = array.filter((item) => item == 4);
const prototypefilterResult = array.myFilter((item) => item == 4);
const polyfillFilterResult = polyfillFilter(array, (item) => item == 4);

console.log("filterResult==============", filterResult);
console.log("prototypefilterResult==============", prototypefilterResult);
console.log("polyfillFilterResult==============", polyfillFilterResult);
