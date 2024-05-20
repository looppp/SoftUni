function survivalGame(day, environment, item) {
  let output = "";
  day = day.toLowerCase();
  environment = environment.toLowerCase();
  item = item.toLowerCase();

  switch (day) {
    case "day":
      if (environment == "forest") {
        if (item == "knive") {
          output = "Hunt for food.";
        } else if (item == "container") {
          output = "Collect berries";
        } else {
          output = "Explore.";
        }
      }
      if (environment == "desert") {
        if (item == "hat") {
          output = "Search for water.";
        } else {
          output = "Find shade";
        }
      }
      break;
    case "night":
      if (environment == "forest") {
        if (item == "firestarter") {
          output = "Make a campfire.";
        } else {
          output = "Climb a tree for safety.";
        }
      }
      if (environment == "desert") {
        if (item == "blanket") {
          output = "Sleep";
        } else {
          output = "Keep mooving to stay warm.";
        }
      }
  }

  if (!output) {
    output = "Invalid input!";
  }

  console.log(output);
}

survivalGame("day", "forest", "knive");
