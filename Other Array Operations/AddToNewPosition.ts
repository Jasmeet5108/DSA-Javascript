// Add a new item to a specific position in Array
const arr6 = [22, 45, 32, 12, 34, 55, 42];

function addNewVal(arr: number[], newVal: number, pos: number): number[] {
  for (let i = arr.length - 1; i > 0; i--) {
    if (i >= pos) {
      arr[i + 1] = arr[i];
      if (i === pos) {
        arr[pos] = newVal;
      }
    }
  }
  return arr;
}
const newArr = addNewVal(arr6, 1000, 3);
console.log(newArr);
