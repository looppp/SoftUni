function address(age, gender) {
  if (gender.equals("f")) {
    if (age < 16) {
      return "Miss";
    } else {
      return "Ms.";
    }
  }
  if (gender.equals("m")) {
    if (age < 16) {
      return "Master";
    } else {
      return "Mr.";
    }
  }
}

console.log(address(14, f));
