function makeupShop(
  renovationCost,
  powders,
  lipsticks,
  spirals,
  shadows,
  correctors
) {
  let powder = 2.6;
  let lipstick = 3.0;
  let spiral = 4.1;
  let shadow = 8.2;
  let concealer = 2.0;
  let totalSum = 0.0;
  let countOfMakeup = 0;
  let profit = 0.0;

  countOfMakeup = powders + lipsticks + spirals + shadows + correctors;
  totalSum =
    powders * powder +
    lipsticks * lipstick +
    spiral * spirals +
    shadows * shadow +
    concealer * correctors;

  if (countOfMakeup >= 50) {
    totalSum *= 0.75;
  }
  totalSum *= 0.9;

  if (totalSum > renovationCost) {
    profit = totalSum - renovationCost;
    console.log(`Yes! ${profit.toFixed(2)} BGN left.`);
  } else {
    profit = Math.abs(totalSum - renovationCost);
    console.log(`Not enough money! ${profit.toFixed(2)} BGN needed.`);
  }
}

makeupShop(320, 8, 2, 5, 5, 1);
