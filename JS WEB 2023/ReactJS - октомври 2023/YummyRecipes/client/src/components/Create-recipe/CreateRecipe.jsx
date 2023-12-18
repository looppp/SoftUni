import { useState } from "react";
import appWallpaper from "../../appWallpaper.jpg";
import * as recipeService from "../../services/recipeService";
import { useNavigate } from "react-router-dom";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Validation from "../../util/Validation";

const recipeFormKeys = {
  RecipeName: "recipeName",
  Description: "description",
  CookingTime: "cookingTime",
  Servings: "servings",
  Ingredients: "ingredients",
  Directions: "directions",
  ImageUrl: "imgUrl",
};

export default function CreateRecipe() {
  const navigate = useNavigate();
  const [errors, setErrors] = useState({});
  const [allIngredients, setAllIngredients] = useState([{ ingredient: "" }]);
  const [allRecipes, setAllRecipes] = useState({
    [recipeFormKeys.RecipeName]: "",
    [recipeFormKeys.Description]: "",
    [recipeFormKeys.CookingTime]: "",
    [recipeFormKeys.Servings]: "",
    [recipeFormKeys.Ingredients]: "",
    [recipeFormKeys.Directions]: "",
    [recipeFormKeys.ImageUrl]: "",
  });

  const handleFormChange = (event, index) => {
    event.preventDefault();
    let data = [...allIngredients];
    data[index][event.target.name] = event.target.value;
    setAllIngredients(data);
    allRecipes.ingredients = allIngredients;
  };

  const addIngredient = (e) => {
    e.preventDefault();
    setAllIngredients([...allIngredients, { ingredient: "" }]);
  };

  const createRecipeSubmitHandler = async (e) => {
    e.preventDefault();
    setErrors(Validation(allRecipes, allIngredients));
    if (!errors) {
      const result = await recipeService.create(allRecipes);
      navigate("/recipes");
      return result;
    }
  };

  const onChange = (e) => {
    setAllRecipes((state) => ({
      ...state,
      [e.target.name]: e.target.value,
    }));
    setErrors(Validation(allRecipes, allIngredients));
  };

  const deleteIngredient = (index) => {
    let data = [...allIngredients];
    data.splice(index, 1);
    setAllIngredients(data);
  };

  const correctInputChecker = (e) => {
    e.preventDefault();
    setErrors(Validation(allRecipes, allIngredients));
  };

  return (
    <div
      style={{
        backgroundImage: `url(${appWallpaper})`,
        backgroundPosition: "absolute",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
      className="create template d-flex justify-content-center align-items-center w-100 h-100 bg-primary"
    >
      <div className=" p-4 rounded bg-white mt-5 mb-5">
        <form id="create" onSubmit={createRecipeSubmitHandler}>
          <h1 className="text-center mb-3">Create Recipe</h1>
          <Container>
            <Row>
              <Col sm={6}>
                <div className="mb-2">
                  <label htmlFor="recipe-name">Recipe name</label>
                  <input
                    onBlur={correctInputChecker}
                    type="name"
                    id="name"
                    placeholder="Enter Recipe Name"
                    className="form-control"
                    onChange={onChange}
                    name={recipeFormKeys.RecipeName}
                    value={allRecipes[recipeFormKeys.RecipeName]}
                  />
                  {errors.recipeName && (
                    <p style={{ color: "red" }}>{errors.recipeName}</p>
                  )}
                </div>
                <div className="mb-2">
                  <label htmlFor="Description">Description</label>

                  <textarea
                    onBlur={correctInputChecker}
                    type="text"
                    id="Description"
                    placeholder="Enter Description"
                    className="form-control"
                    onChange={onChange}
                    name={recipeFormKeys.Description}
                    value={allRecipes[recipeFormKeys.Description]}
                  />
                  {errors.description && (
                    <p style={{ color: "red" }}>{errors.description}</p>
                  )}
                </div>

                <div className="mb-2">
                  <label htmlFor="cook-time">Cooking Time</label>
                  <input
                    onBlur={correctInputChecker}
                    type="number"
                    id="cooking-time"
                    placeholder="Enter Cooking Time"
                    className="form-control"
                    onChange={onChange}
                    name={recipeFormKeys.CookingTime}
                    value={allRecipes[recipeFormKeys.CookingTime]}
                  />
                  {errors.cookingTime && (
                    <p style={{ color: "red" }}>{errors.cookingTime}</p>
                  )}
                </div>
                <div className="mb-2">
                  <label htmlFor="servings">Servings</label>
                  <input
                    onBlur={correctInputChecker}
                    type="number"
                    id="servings"
                    placeholder="Enter Servings"
                    className="form-control"
                    onChange={onChange}
                    name={recipeFormKeys.Servings}
                    value={allRecipes[recipeFormKeys.Servings]}
                  />
                  {errors.servings && (
                    <p style={{ color: "red" }}>{errors.servings}</p>
                  )}
                </div>

                <div className="mb-2">
                  <label htmlFor="directions">Directions</label>
                  <textarea
                    onBlur={correctInputChecker}
                    style={{ height: "70px" }}
                    type="text"
                    id="directions"
                    placeholder="Enter Directions"
                    className="form-control"
                    onChange={onChange}
                    name={recipeFormKeys.Directions}
                    value={allRecipes[recipeFormKeys.Directions]}
                  />
                  {errors.directions && (
                    <p style={{ color: "red" }}>{errors.directions}</p>
                  )}
                </div>
                <div className="mb-2">
                  <label htmlFor="imgUrl">Image Url</label>
                  <input
                    onBlur={correctInputChecker}
                    type="text"
                    id="imgUrl"
                    placeholder="Enter Image Url"
                    className="form-control"
                    onChange={onChange}
                    name={recipeFormKeys.ImageUrl}
                    value={allRecipes[recipeFormKeys.ImageUrl]}
                  />
                  {errors.imgUrl && (
                    <p style={{ color: "red" }}>{errors.imgUrl}</p>
                  )}
                </div>
              </Col>

              <Col sm={6}>
                {allIngredients.map((form, index) => {
                  return (
                    <div className="mb-1" key={index}>
                      <label htmlFor="ingredients">Ingredients</label>
                      <div className="d-flex align-items-center">
                        <input
                          onBlur={correctInputChecker}
                          type="text"
                          id="ingredients"
                          placeholder="Enter Ingredients"
                          className="form-control"
                          onChange={(event) => handleFormChange(event, index)}
                          name="ingredient"
                          value={form.ingredient}
                        />
                        {allIngredients.length > 1 && (
                          <button
                            type="button"
                            className="ms-3"
                            onClick={() => deleteIngredient(index)}
                          >
                            <i className="fa-solid fa-trash"></i>
                          </button>
                        )}
                      </div>
                      {errors.ingredients && (
                        <p style={{ color: "red" }}>{errors.ingredients}</p>
                      )}
                    </div>
                  );
                })}
              </Col>

              <div className="d-grid">
                <button className="btn btn-primary mt-4 mx-5">
                  Create Recipe
                </button>
                {allIngredients.length >= 1 && allIngredients.length < 9 && (
                  <button
                    className="btn btn-primary mt-4 mx-5"
                    onClick={addIngredient}
                  >
                    Add Ingredient
                  </button>
                )}
              </div>
            </Row>
          </Container>
        </form>
      </div>
    </div>
  );
}
