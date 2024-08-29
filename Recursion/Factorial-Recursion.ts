function factorial(num: number): number {
  if (num === (0 || 1)) {
    return 1;
  }
  return num * factorial(num - 1);
}

const fact = factorial(1);
console.log(fact);
