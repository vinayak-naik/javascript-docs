let queue = [];
let currentSize = queue.length;
let maxSize = 5;

// function enqueue(newVal) {
//   if (currentSize >= maxSize) {
//     alert("Queue is already full");
//   } else {
//     queue[currentSize] = newVal;
//     currentSize++;
//   }
// }

function enqueueWithBtn() {
  let newVal = document.getElementById("qEl").value;
  if (currentSize >= maxSize) {
    alert("Queue is already full");
  } else {
    queue[currentSize] = newVal;
    currentSize++;
  }
}

function display() {
  console.warn(queue);
}
function dequeue() {
  if (!isEmpty()) {
    for (let i = 0; i < queue.length; i++) {
      queue[i] = queue[i + 1];
    }
    currentSize--;
    queue.length = currentSize;
  } else {
    alert("queue is already empty");
  }
}
function front() {
  if (!isEmpty()) {
    console.warn(queue[0]);
  } else {
    alert("queue is already empty");
  }
}

function rear() {
  if (!isEmpty()) {
    console.warn(queue[currentSize - 1]);
  } else {
    alert("queue is already empty");
  }
}
function isEmpty() {
  if (currentSize <= 0) {
    return true;
  } else {
    return false;
  }
}

// enqueue(10);
// enqueue(20);
// enqueue(30);

// front();
// rear();

// display();