let array = [];
let currentSize = array.length;

const push = (val) => {
  array[currentSize] = val;
  currentSize++;
};

function pop() {
  if (currentSize > 0) {
    currentSize -= 1;
    array.length = currentSize;
  } else {
    alert("stack is already empty");
  }
}

push(10);
push(11);
push(13);
pop();
console.log("array===============", array);
