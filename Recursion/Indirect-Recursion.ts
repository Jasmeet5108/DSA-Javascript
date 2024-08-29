let money = 100;
let apples = 0;

function buyApples(money: number): void {
  if (money > 0) {
    console.log(`I have ${money} rupees and ${apples} apples`);
    buyMore(money - 10);
  } else {
    console.log(`I have ${money} rupees and ${apples} apples`);
  }
}

function buyMore(money: number) {
  apples++;
  buyApples(money);
}

buyApples(money);
