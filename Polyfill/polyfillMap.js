const array = [1, 2, 3, 4, 5];

Array.prototype.myMap = function(callbackFn) {
    console.log('this=========',this)
    let arr = [];              
    for (let i = 0; i < this.length; i++) { 
      arr.push(callbackFn(this[i], i, this));
    }
    return arr;
  }

const polyfillMap = (arr, cb) => {
  const newArr = [];
  for (i = 0; i < arr.length; i++) {
    newArr.push(cb(arr[i], i,arr));
  }
  return newArr;
};

const mapResult = array.map((item, i) => item * 2);
const prototypeMapResult = array.myMap((item) => item * 2);
const polyfillMapResult = polyfillMap(array, (item) => item * 2);

console.log("mapResult==============",mapResult);
console.log("prototypeMapResult==============",prototypeMapResult);
console.log("polyfillMapResult==============",polyfillMapResult);
