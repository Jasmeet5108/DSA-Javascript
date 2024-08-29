const arr = [13, 24, 37, 48, 55, 69, 71, 86, 90];
let findNum = 71;
let start = 0;
let end = arr.length - 1;
let indexAt = 0;

function binarySearch(arr: number[], findNum: number): number {
  while (start <= end) {
    let midPoint = Math.floor((start + end) / 2);
    if (arr[midPoint] === findNum) {
      indexAt = midPoint;
      break;
    } else if (findNum > arr[midPoint]) {
      start = midPoint + 1;
    } else if (findNum < arr[midPoint]) {
      end = midPoint - 1;
    }
  }
  return indexAt;
}

const indexOfFindNum = binarySearch(arr, findNum);
console.log(indexOfFindNum);
