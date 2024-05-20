function adventureGame(itemOne, itemTwo) {
  let pathToTake = "";

  if (itemOne == "sword" || itemTwo == "sword") {
    if (itemOne == "shield" || itemTwo == "shield") {
      pathToTake = "Path to the castle";
    } else {
      pathToTake = "Path to the forest";
    }
  }
  if (itemOne == "map" || itemTwo == "map") {
    if (itemOne == "coins" || itemTwo == "coins") {
      pathToTake = "Go to the town";
    } else {
      pathToTake = "Camp at the current spot and prepare for the next day.";
    }
  }
  if (!pathToTake) {
    pathToTake = "Wander aimlessly";
  }

  console.log(pathToTake);
}

adventureGame("map", "coins");
