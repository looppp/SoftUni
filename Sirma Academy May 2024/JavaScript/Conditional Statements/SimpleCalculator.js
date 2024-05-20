function simpleCalc(numberX, numberY, operation) {
  switch (operation.toLowerCase()) {
    case "add":
      console.log(numberX + numberY);
      break;
    case "subtract":
      console.log(numberX - numberY);
      break;
    case "divide":
      console.log(numberX / numberY);
      break;
    case "multiply":
      console.log(numberX * numberY);
      break;
  }
}

simpleCalc(2, 4, add);
