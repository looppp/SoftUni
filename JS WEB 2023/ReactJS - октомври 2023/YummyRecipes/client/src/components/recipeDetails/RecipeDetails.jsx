import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

export default function RecipeDetails() {
  return (
    <Container>
      <Row>
        <Col sm={8} className="mt-5 ">
          <h1 style={{ textAlign: "center" }}>
            Lasagna Boloniese authentic recipe
          </h1>
          <h5 className="mt-5 " id="description">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur
            modi aut, praesentium, ab quasi alias minus nisi fugiat libero
            doloribus, quod quae.
          </h5>
          <Image src="https://picsum.photos/700/500" fluid></Image>

          <h1 className="mt-5 mb-5">Inredients</h1>

          <ul style={{ fontSize: "22px" }}>
            <li>1 cup unsalted butter, softened to room temperature</li>
            <li>2/3 cup white sugar</li>
            <li>2 1/4 cups all-purpose flour</li>
            <li>1 cup unsalted butter, softened to room temperature</li>
            <li>1 cup unsalted butter, softened to room temperature</li>
            <li>1 cup unsalted butter, softened to room temperature</li>
          </ul>

          <h1 className="mt-5 mb-5">Directions</h1>

          <ul style={{ listStyleType: "none", fontSize: "22px" }}>
            <li id="steps">
              <strong>Step 1</strong>
              <li className="mt-2 mb-4">
                Stir potato chips and chocolate chips in with a spatula until
                just combined. Add flour mixture; continue mixing in with a
                spatula until flour disappears and dough comes together.
              </li>
              <strong>Step 2</strong>
              <li className="mt-2 mb-4">
                Stir potato chips and chocolate chips in with a spatula until
                just combined. Add flour mixture; continue mixing in with a
                spatula until flour disappears and dough comes together.
              </li>
              <strong>Step 3</strong>
              <li className="mt-2 mb-4">
                Stir potato chips and chocolate chips in with a spatula until
                just combined. Add flour mixture; continue mixing in with a
                spatula until flour disappears and dough comes together.
              </li>
              <strong>Step 4</strong>
              <li className="mt-2 mb-4">
                Stir potato chips and chocolate chips in with a spatula until
                just combined. Add flour mixture; continue mixing in with a
                spatula until flour disappears and dough comes together.
              </li>
            </li>
          </ul>
        </Col>

        <Col sm={4} className="mt-5">
          <h1 style={{ textAlign: "center" }}>Profile </h1>
        </Col>
      </Row>
    </Container>
  );
}
