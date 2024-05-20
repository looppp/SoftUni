function atSea(daysToStay, typeOfRoom, assessment) {
  let totalPrice = 0.0;

  switch (typeOfRoom.toLowerCase()) {
    case "single room":
      totalPrice = 25.0 * (daysToStay - 1);
      break;
    case "apartment":
      totalPrice = 50.0 * (daysToStay - 1);
      if (daysToStay < 10) {
        totalPrice *= 0.7;
      } else if (daysToStay >= 10 && daysToStay <= 15) {
        totalPrice *= 0.65;
      } else {
        totalPrice *= 0.5;
      }
      break;
    case "presidential":
      totalPrice = 100.0 * (daysToStay - 1);
      if (daysToStay < 10) {
        totalPrice *= 0.9;
      } else if (daysToStay >= 10 && daysToStay <= 15) {
        totalPrice *= 0.85;
      } else {
        totalPrice *= 0.8;
      }
      break;
  }

  if (assessment.toLowerCase() === "positive") {
    totalPrice *= 1.25;
  } else {
    totalPrice *= 0.9;
  }

  console.log(totalPrice.toFixed(2));
}

atSea(11, "apartment", "positive");
