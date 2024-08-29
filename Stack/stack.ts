let arr: number[] = [];
let currentSize = arr.length;
let maxVal = 5;

function pushIntoStack(newVal: number) {
  if (currentSize === maxVal) {
    console.log(`Stack is full you can't add ${newVal}`);
  } else {
    arr[currentSize] = newVal;
    currentSize += 1;
  }
}

function popFromStack() {
  if (currentSize === 0) {
    return;
  } else {
    currentSize -= 1;
    arr.length = currentSize;
  }
}

function displayStack() {
  if (currentSize === 0) {
    console.log("Stack is empty");
  }
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

pushIntoStack(20);
pushIntoStack(30);
pushIntoStack(53);
pushIntoStack(81);
pushIntoStack(76);
popFromStack();
popFromStack();
popFromStack();
popFromStack();
popFromStack();
pushIntoStack(14);
// console.log(arr); // [20, 30, 14]
displayStack();
