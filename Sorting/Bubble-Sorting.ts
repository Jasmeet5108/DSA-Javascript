function bubbleSort<T extends number[]>(arr: T): T {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }
    }
  }
  return arr;
}

const arr = [23, 43, 22, 20, 33, 14, 19, 65, 62, 34, 35, 9, 54];
const sortedArr = bubbleSort(arr);
console.log(sortedArr);

// function bubbleSort<T>(arr: T[], compare: (a: T, b: T) => number): T[] {
//   for (let i = 0; i < arr.length - 1; i++) {
//     for (let j = 0; j < arr.length - i - 1; j++) {
//       if (compare(arr[j], arr[j + 1]) > 0) {
//         [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
//       }
//     }
//   }
//   return arr;
// }

// // Example usage with numbers
// const numberArr = [23, 43, 22, 20, 33, 14, 19, 65, 62, 34, 35, 9, 54];
// const sortedNumberArr = bubbleSort(numberArr, (a, b) => a - b);
// console.log(sortedNumberArr);

// // Example usage with strings
// const stringArr = ["banana", "apple", "orange", "kiwi"];
// const sortedStringArr = bubbleSort(stringArr, (a, b) => a.localeCompare(b));
// console.log(sortedStringArr);
