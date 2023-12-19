export default function Validation(values, subValues) {
  const errors = {};
  let allIngredients = true;

  for (let i = 0; i < subValues.length; i++) {
    if (Object.values(subValues[i]) == "") {
      allIngredients = false;
    }
  }

  if (allIngredients === false) {
    errors.ingredients = "Ingredients are required";
  }
  if (values.recipeName === "") {
    errors.recipeName = "Recipe name is required";
  }
  if (values.description === "") {
    errors.description = "Description  is required";
  }
  if (values.cookingTime === "") {
    errors.cookingTime = "CookingTime  is required";
  }
  if (values.servings === "") {
    errors.servings = "Servings  is required";
  }
  if (values.directions === "") {
    errors.directions = "Directions  is required";
  }
  if (values.imgUrl === "") {
    errors.imgUrl = "Image Url  is required";
  }

  if (values.videoUrl === "") {
    errors.videoUrl = "Recipe video is required";
  }

  return errors;
}
