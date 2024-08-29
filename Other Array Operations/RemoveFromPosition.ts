// Remove a specific positioned element from Array
const arr7 = [22, 45, 32, 12, 34, 55, 42];
function removeElem(arr: number[], pos: number): number[] {
  for (let i = 0; i < arr.length - 1; i++) {
    if (i >= pos) {
      arr[i] = arr[i + 1];
    }
  }
  arr.pop();
  return arr;
}
const newArr2 = removeElem(arr7, 5);
console.log(newArr2);
