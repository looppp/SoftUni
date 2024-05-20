function vegetableMarket(vegetable, dayOfWeek, quantity) {
  let tomato = 2.5;
  let onion = 1.2;
  let lettuce = 0.85;
  let cucumber = 1.45;
  let pepper = 5.5;
  let totalPrice = 0.0;
  let error = "";

  switch (dayOfWeek.toLowerCase()) {
    case "monday":
      break;
    case "tuesday":
      break;
    case "wednesday":
      break;
    case "thursday":
      break;
    case "friday":
      break;
    case "saturday":
      tomato = 2.8;
      onion = 1.3;
      cucumber = 1.75;
      pepper = 3.5;
      break;
    case "sunday":
      tomato = 2.8;
      onion = 1.3;
      cucumber = 1.75;
      pepper = 3.5;
      break;
    default:
      error = "error";
      break;
  }
  switch (vegetable.toLowerCase()) {
    case "tomato":
      totalPrice = quantity * tomato;
      break;
    case "onion":
      totalPrice = quantity * onion;
      break;
    case "lettuce":
      totalPrice = quantity * lettuce;
      break;
    case "cucumber":
      totalPrice = quantity * cucumber;
      break;
    case "pepper":
      totalPrice = quantity * pepper;
      break;
    default:
      error = "error";
      break;
  }
  if (error == "error") {
    console.log(error);
  } else {
    console.log(totalPrice.toFixed(2));
  }
}

vegetableMarket("tomato", "tuesday", 2);
