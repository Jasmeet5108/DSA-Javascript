// finding the highest occuring number and number of times it has occured
const arr3 = [34, 22, 625, 183, 1, 34, 67, 77, 24, 21, 121, 100];

function highestOccuringNumber(arr: number[]): number[] {
  let frequency = {};
  arr.forEach((num) => (frequency[num] = (frequency[num] || 0) + 1));
  let maxOccur = 0;
  let numOfTimes: number = 0;
  for (const num in frequency) {
    if (Object.prototype.hasOwnProperty.call(frequency, num)) {
      if (frequency[num] > maxOccur) {
        numOfTimes = frequency[num];
        maxOccur = Number(num);
      }
    }
  }
  return [maxOccur, numOfTimes];
}

const [maxOccur, numOfTimes] = highestOccuringNumber(arr3);

console.log(
  `Max Occuring number is ${maxOccur} and it has occured ${numOfTimes} times`
);
