function potionBrewing(ingredientOne, ingredientTwo) {
  let potion = "";
  ingredientOne = ingredientOne.toLowerCase();
  ingredientTwo = ingredientTwo.toLowerCase();

  if (ingredientOne == "herbs" || ingredientTwo == "herbs") {
    if (ingredientOne == "water" || ingredientTwo == "water") {
      potion = "Health potion";
    } else if (ingredientOne == "oil" || ingredientTwo == "oil") {
      potion = "Strealth potion";
    } else {
      potion = "Minor stamina potion";
    }
  }
  if (ingredientOne == "berries" || ingredientTwo == "berries") {
    if (ingredientOne == "sugar" || ingredientTwo == "sugar") {
      potion = "Speed potion";
    } else {
      potion = "Minor energy potion";
    }
  }
  if (!potion) {
    potion = "No potion";
  }

  console.log(potion);
}

potionBrewing("Herbs", "water");
