// Highest product of 2 different numbers in an array
const arr5 = [1, 20, 3, 10, 5];
function highestProductOfTwoNums(arr: number[]): number {
  let highestProduct = 0;
  for (let i = 0; i < arr.length; i++) {
    let oneNum = arr[i];
    let product: number;
    for (let j = i + 1; j < arr.length; j++) {
      product = oneNum * arr[j];
      if (product > highestProduct) {
        highestProduct = product;
      }
    }
  }
  return highestProduct;
}

const highestProduct = highestProductOfTwoNums(arr5);

console.log(highestProduct);
