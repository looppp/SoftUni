function solveFruits(fruit, weightToBuy, pricePerKg) {
    let moneyNeedet = (weightToBuy * pricePerKg) / 1000;
    console.log(`I need $${moneyNeedet.toFixed(2)} to buy ${(weightToBuy / 1000).toFixed(2)} kilograms ${fruit}.`)
}

solveFruits('orange', 2500, 1.80);