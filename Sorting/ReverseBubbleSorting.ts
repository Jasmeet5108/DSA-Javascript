function reverseBubbleSort(arr: number[]) {
  for (let i = arr.length - 1; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      if (arr[j] < arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}

const newArr = [23, 43, 22, 20, 33, 14, 19, 65, 62, 34, 35, 9, 54];
const sortedArr = reverseBubbleSort(newArr);
console.log(sortedArr);
