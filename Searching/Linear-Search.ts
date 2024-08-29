const arr = [13, 24, 37, 48, 55, 69, 71, 86, 90];
let findNum = 86;
let index: number;

function linearSearch(arr: number[], findNum: number): number | string {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === findNum) {
      index = i;
    }
  }
  return index ? index : "Number not found";
}

const result = linearSearch(arr, findNum);
console.log(
  typeof result === "number"
    ? `${findNum} is at index number ${result}`
    : result
);
