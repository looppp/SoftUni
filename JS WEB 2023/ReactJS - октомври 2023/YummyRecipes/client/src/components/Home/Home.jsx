import Carousel from "react-bootstrap/Carousel";
import * as recipeService from "../../services/recipeService";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Home() {
  const [latestRecipes, setLatestRecipe] = useState([]);

  useEffect(() => {
    recipeService.getLatest().then(setLatestRecipe);
  }, []);

  return (
    <>
      <h1 style={{ fontFamily: "cursive" }} className=" text-center ">
        Latest Recipes
      </h1>
      <Carousel style={{ width: 1111, textAlign: "center", margin: "auto" }}>
        {latestRecipes.map((recipe) => (
          <Carousel.Item>
            <Link to={`/recipes/${recipe._id}`}>
              <img
                style={{ height: "700px", width: "1000px" }}
                src={recipe.imgUrl}
              />
            </Link>

            <Carousel.Caption>
              <h3>{recipe.recipeName}</h3>
              <p>{recipe.description}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </>
  );
}
