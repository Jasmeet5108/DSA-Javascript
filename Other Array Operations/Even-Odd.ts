// Finding Even and Odd numbers
const arr4 = [34, 22, 625, 183, 1, 34, 67, 77, 24, 21, 121, 101];
function separateEvenAndOddNums(arr: number[]): number[][] {
  let evenNumbers: number[] = [];
  let oddNumbers: number[] = [];
  arr.forEach((num) =>
    num % 2 == 0 ? evenNumbers.push(num) : oddNumbers.push(num)
  );
  return [evenNumbers, oddNumbers];
}

const [evenNumbers, oddNumbers] = separateEvenAndOddNums(arr4);

console.log(evenNumbers);
console.log(oddNumbers);
