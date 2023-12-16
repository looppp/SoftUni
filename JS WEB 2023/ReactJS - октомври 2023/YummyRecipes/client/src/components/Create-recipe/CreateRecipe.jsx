import { useState } from "react";
import appWallpaper from "../../../public/appWallpaper.jpg";
import * as recipeService from "../../services/recipeService";
import { useNavigate } from "react-router-dom";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

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
  const [allIngredients, setAllIngredients] = useState([{ ingredient: "" }]);
  const [allRecipes, setAllRecipes] = useState({
    [recipeFormKeys.RecipeName]: "",
    [recipeFormKeys.Description]: "",
    [recipeFormKeys.CookingTime]: "",
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
    const result = await recipeService.create(allRecipes);
    navigate("/recipes");
    return result;
  };

  const onChange = (e) => {
    setAllRecipes((state) => ({
      ...state,
      [e.target.name]: e.target.value,
    }));
  };

  const deleteIngredient = (index) => {
    let data = [...allIngredients];
    data.splice(index, 1);
    setAllIngredients(data);
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
                    type="name"
                    id="name"
                    placeholder="Enter Recipe Name"
                    className="form-control"
                    onChange={onChange}
                    name={recipeFormKeys.RecipeName}
                    value={allRecipes[recipeFormKeys.RecipeName]}
                  />
                </div>
                <div className="mb-2">
                  <label htmlFor="Description">Description</label>

                  <textarea
                    type="text"
                    id="Description"
                    placeholder="Enter Description"
                    className="form-control"
                    onChange={onChange}
                    name={recipeFormKeys.Description}
                    value={allRecipes[recipeFormKeys.Description]}
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
                    value={allRecipes[recipeFormKeys.CookingTime]}
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
                    value={allRecipes[recipeFormKeys.Servings]}
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
                    value={allRecipes[recipeFormKeys.Directions]}
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
                    value={allRecipes[recipeFormKeys.ImageUrl]}
                  />
                </div>
              </Col>

              <Col sm={6}>
                {allIngredients.map((form, index) => {
                  return (
                    <div className="mb-2" key={index}>
                      <label htmlFor="ingredients">Ingredients</label>
                      <div className="d-flex align-items-center">
                        <input
                          type="text"
                          id="ingredients"
                          placeholder="Enter Ingredients"
                          className="form-control"
                          onChange={(event) => handleFormChange(event, index)}
                          name="ingredient"
                          value={form.ingredient}
                        />
                        <button
                          type="button"
                          className="ms-3"
                          onClick={() => deleteIngredient(index)}
                        >
                          <ion-icon name="close-outline"></ion-icon>
                        </button>
                      </div>
                    </div>
                  );
                })}
              </Col>

              <div className="d-grid">
                <button className="btn btn-primary mt-4 mx-5">
                  Create Recipe
                </button>
                <button
                  className="btn btn-primary mt-4 mx-5"
                  onClick={addIngredient}
                >
                  Add Ingredient
                </button>
              </div>
            </Row>
          </Container>
        </form>
      </div>
    </div>
  );
}
