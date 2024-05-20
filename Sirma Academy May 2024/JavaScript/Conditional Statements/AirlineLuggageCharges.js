function airLineLuggage(weight, dimensions) {
  let luggageFee = 0;
  let message = "";

  if (weight > 50) {
    luggageFee += 100;
    message = "Overweight";
  }
  if (dimensions > 158) {
    if (dimensions - 158 >= 1 && dimensions - 158 <= 20) {
      luggageFee += 50;
      message += (message ? "" : " + ") + "Slightly Oversize";
    } else if (dimensions - 158 >= 21 && dimensions - 158 <= 50) {
      luggageFee += 100;
      message += (message ? "" : " + ") + "Oversize";
    } else if (dimensions - 158 > 50) {
      luggageFee += 200;
      message += (message ? "" : " + ") + "Oversize";
    }
  }
  if (weight > 50 && dimensions > 158) {
    luggageFee += 50;
    message += " + Handling";
  }

  console.log(`${luggageFee} (${message})`);
}

airLineLuggage(55, 190);
