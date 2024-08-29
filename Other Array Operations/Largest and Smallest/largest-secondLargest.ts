// Second largest Number using a function. Handling in case all numbers are same
const arr1 = [12, 35, 1, 10, 35, 1];
function getSecondLargestNum(arr: number[]): string | number[] {
  let largestNum: number = -Infinity;
  let secondLar: number = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largestNum) {
      secondLar = largestNum;
      largestNum = arr[i];
    } else if (arr[i] > secondLar && arr[i] < largestNum) {
      secondLar = arr[i];
    }
  }
  return secondLar === -Infinity
    ? "No Second largest number"
    : [largestNum, secondLar];
}
const [largest, secondLar] = getSecondLargestNum(arr1);
console.log(secondLar);
