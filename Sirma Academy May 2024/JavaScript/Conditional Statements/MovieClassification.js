function movieClassification(personAge) {
  if (personAge < 13) {
    console.log("U-rated movies");
  } else if (personAge >= 13 && personAge <= 17) {
    console.log("U and PG-13 rated movies");
  } else {
    console.log("All movies");
  }
}
movieClassification(10);
