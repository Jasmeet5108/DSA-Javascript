// Greet Using Loop => Less lines
function testing<T>(arr: T[], func: (a: T, b: T) => T) {
  for (let i = 0; i < arr.length - 1; i++) {
    const result = func(arr[i], arr[i + 1]);
    return result;
  }
}

const greet = (a: string, b: string) => {
  return `Hello ${a} ${b}`;
};

const srtArr = ["Jasmeet", "Aman"];

const something = testing(srtArr, greet);
console.log(something);

// Concat Names
function concatString<T>(arr: T[], func: (a: T, b: T) => T) {
  return () => func(arr[0], arr[1]);
}

const greetFunc = (name1: string, name2: string): string => {
  return `Hello ${name1} ${name2}`;
};

const names = ["Jasmeet", "Singh"];

const valueOfFunc = concatString(names, greetFunc);
const answer = valueOfFunc();
console.log(answer);

// Greet with name
const someFunction = <T extends (...args: Parameters<T>) => ReturnType<T>>(
  callback: T
) => {
  return (...args: Parameters<T>): ReturnType<T> => callback(...args);
};

const greetByName = (name: string) => {
  return `Hey ${name}`;
};

const value = someFunction(greetByName);
const newVal = value("Jasmeet");
console.log(newVal);
