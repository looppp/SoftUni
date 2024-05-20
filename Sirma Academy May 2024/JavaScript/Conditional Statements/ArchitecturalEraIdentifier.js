function eraIdentifier(year, material) {
  let output = "";
  material = material.toLowerCase();

  if (year < 500 && material == "stone") {
    output = "Ancient";
  } else if (year >= 500 && year <= 1500 && material == "stone") {
    output = "Medieval";
  } else if (year >= 1500 && year <= 1800 && material == "wood") {
    output = "Colonial";
  } else if (year >= 1800 && year <= 1900 && material == "steel") {
    output = "Industrial";
  } else if (year > 1900 && material == "steel") {
    output = "Modern";
  } else {
    output = "Uncertain";
  }

  console.log(output);
}

eraIdentifier(300, "stone");
