// Finding Smallest and Second Smallest number in an array
const arr2 = [34, 22, 625, 183, 1, 35, 14, 67, 77, 24, 21, 121, 100];
function getSecondSmallestNum(arr: number[]): string | number[] {
  let smallest = Infinity;
  let second_smallest = Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < smallest) {
      second_smallest = smallest;
      smallest = arr[i];
    } else if (arr[i] > smallest && arr[i] < second_smallest) {
      second_smallest = arr[i];
    }
  }
  return second_smallest === Infinity
    ? "No Second smallest number"
    : [smallest, second_smallest];
}

const [smallest, second_smallest] = getSecondSmallestNum(arr2);
console.log(second_smallest);
