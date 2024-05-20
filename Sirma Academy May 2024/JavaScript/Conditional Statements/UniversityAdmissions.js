function universityAdmissions(score, extracurriculars) {
  if (score >= 90 || (score >= 80 && score <= 89 && extracurriculars >= 2)) {
    console.log("Admitted");
  } else {
    console.log("Not admitted");
  }
}
universityAdmissions();
