const array = [1, 2, 3, 4, 5];

Array.prototype.myReduce = function(cb, initialValue){
    console.log('this=========',this)
    let acc = initialValue;
    for (i = 0; i < this.length; i++) {
      acc = cb(acc, this[i]);
    }
    return acc
  };

const polyfillReduce = (arr, cb, initialValue) => {
  let acc = initialValue;
  for (i = 0; i < arr.length; i++) {
    acc = cb(acc, arr[i]);
  }
  return acc
};

const reduceResult = array.reduce((acc, cur) => acc + cur, 5);
const prototypeReduceResult = array.myReduce((acc, cur) => acc + cur, 5);
const polyfillReduceResult = polyfillReduce(array, (acc, cur) => acc + cur, 5);

console.log("reduceResult==============", reduceResult);
console.log("prototypeReduceResult==============", prototypeReduceResult);
console.log("polyfillReduceResult==============",polyfillReduceResult);
