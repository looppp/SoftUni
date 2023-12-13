import { useContext } from "react";
import useForm from "../../hooks/useForm";
import createImg from "../Create-recipe/createImg.jpg";
import AuthContext from "../../contexts/authContext";

const recipeFormKeys = {
  RecipeName: "recipe-name",
  Description: "description",
  PreparationTime: "preparation-time",
  CookingTime: "cooking-time",
  Servings: "servings",
  Ingredients: "ingredients",
  Directions: "directions",
  ImageUrl: "imgUrl",
};

export default function CreateRecipe() {
  const { createRecipeSubmitHandler } = useContext(AuthContext);

  const { values, onChange, onSubmit } = useForm(createRecipeSubmitHandler, {
    [recipeFormKeys.RecipeName]: "",
    [recipeFormKeys.Description]: "",
    [recipeFormKeys.PreparationTime]: "",
    [recipeFormKeys.CookingTime]: "",
    [recipeFormKeys.Servings]: "",
    [recipeFormKeys.Ingredients]: "",
    [recipeFormKeys.Directions]: "",
    [recipeFormKeys.ImageUrl]: "",
  });

  return (
    <div
      style={{
        backgroundImage: `url(${createImg})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
      className="login template d-flex justify-content-center align-items-center w-100 vh-100 bg-primary"
    >
      <div className=" p-5 rounded bg-white">
        <form id="create" onSubmit={onSubmit}>
          <h1 className="text-center mb-3">Create Recipe</h1>
          <div className="mb-2">
            <label htmlFor="recipe-name">Recipe name</label>
            <input
              type="name"
              id="name"
              placeholder="Enter Recipe Name"
              className="form-control"
              onChange={onChange}
              name={recipeFormKeys.RecipeName}
              value={values[recipeFormKeys.RecipeName]}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="Description">Description</label>

            <textarea
              style={{ height: "100px" }}
              type="text"
              id="Description"
              placeholder="Enter Description"
              className="form-control"
              onChange={onChange}
              name={recipeFormKeys.Description}
              value={values[recipeFormKeys.Description]}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="text">Preparation Time</label>
            <input
              type="number"
              id="preparation-time"
              placeholder="Enter Preparation time"
              className="form-control"
              onChange={onChange}
              name={recipeFormKeys.PreparationTime}
              value={values[recipeFormKeys.PreparationTime]}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="cook-time">Cooking Time</label>
            <input
              type="number"
              id="cooking-time"
              placeholder="Enter Cooking Time"
              className="form-control"
              onChange={onChange}
              name={recipeFormKeys.CookingTime}
              value={values[recipeFormKeys.CookingTime]}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="servings">Servings</label>
            <input
              type="number"
              id="servings"
              placeholder="Enter Servings"
              className="form-control"
              onChange={onChange}
              name={recipeFormKeys.Servings}
              value={values[recipeFormKeys.Servings]}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="ingredients">Ingredients</label>
            <textarea
              style={{ height: "70px" }}
              type="text"
              id="ingredients"
              placeholder="Enter Ingredients"
              className="form-control"
              onChange={onChange}
              name={recipeFormKeys.Ingredients}
              value={values[recipeFormKeys.Ingredients]}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="directions">Directions</label>
            <textarea
              style={{ height: "70px" }}
              type="text"
              id="directions"
              placeholder="Enter Directions"
              className="form-control"
              onChange={onChange}
              name={recipeFormKeys.Directions}
              value={values[recipeFormKeys.Directions]}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="imgUrl">Image Url</label>
            <input
              type="text"
              id="imgUrl"
              placeholder="Enter Image Url"
              className="form-control"
              onChange={onChange}
              name={recipeFormKeys.ImageUrl}
              value={values[recipeFormKeys.ImageUrl]}
            />
          </div>
          <div className="d-grid">
            <button className="btn btn-primary mt-4 mx-5">Create Recipe</button>
          </div>
        </form>
      </div>
    </div>
  );
}
