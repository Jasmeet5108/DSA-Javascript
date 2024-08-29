let arr: string[] = [];
let currentSize = arr.length;
const maxVal = 5;
let reverseArr: string[] = [];
const str = "Hello";

function pushToStack(newVal: string) {
  if (currentSize < maxVal) {
    arr[currentSize] = newVal;
    currentSize++;
  } else {
    console.log("Stack is full");
  }
}

function popFromStack() {
  let lastElem = arr[currentSize - 1];
  currentSize -= 1;
  arr.length = currentSize;
  return lastElem;
}

function commonFunc(str: string) {
  if (arr.length <= 5) {
    for (let i = 0; i < str.length; i++) {
      pushToStack(str[i]);
    }
  } else {
    console.log("Condition untrue");
  }
}

function reverse(str: string) {
  while (currentSize > 0) {
    for (let i = 0; i < str.length; i++) {
      reverseArr[i] = popFromStack();
    }
  }
}

commonFunc(str);
console.log(arr);
reverse(str);
console.log(reverseArr);
