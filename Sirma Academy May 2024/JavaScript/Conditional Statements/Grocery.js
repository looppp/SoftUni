function grocery(product, city, quantity) {
  let totalCost = 0.0;
  let teaSofia = 0.5;
  let teaPlovdiv = 0.4;
  let teaVarna = 0.45;
  let waterSofia = 0.8;
  let waterPlovdiv = 0.7;
  let waterVarna = 0.7;
  let juiceSofia = 1.2;
  let juicePlovdiv = 1.15;
  let juiceVarna = 1.1;
  let sweetsSofia = 1.45;
  let sweetsPlovdiv = 1.3;
  let sweetsVarna = 1.35;
  let chipsSofia = 1.6;
  let chipsPlovdiv = 1.5;
  let chipsVarna = 1.55;

  switch (city.toLowerCase()) {
    case "sofia":
      switch (product) {
        case "tea":
          totalCost = teaSofia * quantity;
          break;
        case "water":
          totalCost = waterSofia * quantity;
          break;
        case "juice":
          totalCost = juiceSofia * quantity;
          break;
        case "sweets":
          totalCost = sweetsSofia * quantity;
          break;
        case "chips":
          totalCost = chipsSofia * quantity;
          break;
      }
      break;
    case "plovdiv":
      switch (product) {
        case "tea":
          totalCost = teaPlovdiv * quantity;
          break;
        case "water":
          totalCost = waterPlovdiv * quantity;
          break;
        case "juice":
          totalCost = juicePlovdiv * quantity;
          break;
        case "sweets":
          totalCost = sweetsPlovdiv * quantity;
          break;
        case "chips":
          totalCost = chipsPlovdiv * quantity;
          break;
      }
      break;
    case "varna":
      switch (product) {
        case "tea":
          totalCost = teaVarna * quantity;
          break;
        case "water":
          totalCost = waterVarna * quantity;
          break;
        case "juice":
          totalCost = juiceVarna * quantity;
          break;
        case "sweets":
          totalCost = sweetsVarna * quantity;
          break;
        case "chips":
          totalCost = chipsVarna * quantity;
          break;
      }
      break;
    default:
      console.log("Invalid city.");
      return;
  }

  console.log(totalCost.toFixed(2));
}

grocery("chips", "PlOVDiv", 1);
