function discountCalc(age, hasMemberCard) {
  let discount = "";
  if (age < 18) {
    discount = "10% discount";
  } else if (age >= 18 && age <= 64) {
    if (hasMemberCard === "Yes") {
      discount = "20% discount";
    } else {
      discount = "10% discount";
    }
  } else if (age > 65) {
    discount = "30% discount";
  }

  console.log(discount);
}

discountCalc(20, "Yes");
