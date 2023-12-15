import { useEffect, useState } from "react";
import * as recipeService from "../../services/recipeService";
import Recipe from "./Recipe/Recipe";
import Alert from "react-bootstrap/Alert";

import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

export default function AllRecipes() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    recipeService
      .getAll()
      .then((recipes) => setRecipes(recipes))
      .catch((err) => console.log(err));

    console.log(recipes);
  }, []);

  return (
    <section id="recipies" className=" block recipies-block">
      {recipes.length > 0 && (
        <>
          <Container>
            <Row>
              <h1
                style={{
                  textAlign: "center",
                  marginTop: "50px",
                  marginBottom: "100px",
                }}
              >
                All of our Recipes
              </h1>
              {recipes.map((recipe) => (
                <Recipe key={recipe._id} {...recipe} />
              ))}
            </Row>
          </Container>
        </>
      )}

      {recipes.length === 0 && (
        <Alert variant="info" className="text-center mt-5">
          <h1>There are no recipies yet!</h1>
        </Alert>
      )}
    </section>
  );
}
