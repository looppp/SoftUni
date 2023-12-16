import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import * as recipeService from "../../services/recipeService";
import { useParams } from "react-router-dom";

export default function RecipeDetails() {
  const [recipe, setRecipe] = useState({});
  const { recipeId } = useParams();
  console.log(recipeId);

  useEffect(() => {
    recipeService.getOne(recipeId).then(setRecipe);
  }, [recipeId]);

  return (
    <Container>
      <Row>
        <Col sm={8} className="mt-5 ">
          <h1 style={{ textAlign: "center" }}>{recipe.recipeName}</h1>
          <h5 className="mt-5 " id="description">
            {recipe.description}
          </h5>
          <Image src={recipe.imgUrl} fluid></Image>

          <h1 className="mt-5 mb-5">Inredients</h1>

          <ul style={{ fontSize: "22px" }}></ul>

          <h1 className="mt-5 mb-5">Directions</h1>

          <p>{recipe.directions}</p>
        </Col>

        <Col sm={4} className="mt-5">
          <h1 style={{ textAlign: "center" }}>Profile </h1>
        </Col>
      </Row>
    </Container>
  );
}
