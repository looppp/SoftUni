function calculateArea(figure, ...dimensions) {
  dimensions = dimensions.map(Number);

  if (figure === "square") {
    if (dimensions.length !== 1 || isNaN(dimensions[0])) {
      return "Invalid squire dimensions.";
    }
    return (dimensions[0] ** 2).toFixed(2);
  } else if (figure === "rectangle") {
    if (dimensions.length !== 2 || dimensions.some(isNaN)) {
      return "Invalid rectangle dimensions.";
    }
    return (dimensions[0] * dimensions[1]).toFixed(2);
  } else if (figure === "circle") {
    if (dimensions.length !== 1 || isNaN(dimensions[0])) {
      return "Invalid circle dimensions.";
    }
    return (dimensions[0] ** 2 * Math.PI).toFixed(2);
  } else if (figure === "triangle") {
    if (dimensions.length !== 2 || dimensions.some(isNaN)) {
      return "Invalid triangle dimensions.";
    }
    return ((dimensions[0] * dimensions[1]) / 2).toFixed(2);
  }
}

console.log(calculateArea("circle", 10));
