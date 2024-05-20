function holyday(budget, season) {
  season = season.toLowerCase();
  let stayIn = "Camp";

  if (budget <= 100) {
    destination = "Somewhere in Bulgaria";
    if (season === "summer") {
      budget *= 0.3;
    } else {
      stayIn = "Hotel";
      budget *= 0.7;
    }
  } else if (budget <= 1000) {
    destination = "Somewhere in Europe";
    if (season === "summer") {
      budget *= 0.4;
    } else {
      stayIn = "Hotel";
      budget *= 0.8;
    }
  } else {
    stayIn = "Hotel";
    destination = "Somewhere in Asia";
    budget *= 0.9;
  }

  console.log(destination);
  console.log(`${stayIn} - ${budget}`);
}

holyday(1500, "summer");
