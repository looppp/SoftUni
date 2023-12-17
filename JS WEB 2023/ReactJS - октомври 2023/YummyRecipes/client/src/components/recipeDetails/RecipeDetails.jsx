import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import * as recipeService from "../../services/recipeService";
import { useParams } from "react-router-dom";
import "../recipeDetails/recipe.css";
import * as commentService from "../../services/commentService";

export default function RecipeDetails() {
  const [recipe, setRecipe] = useState({});
  const [allIng, setAllIng] = useState([]);
  const [comments, setComments] = useState([]);
  const { recipeId } = useParams();

  useEffect(() => {
    recipeService
      .getOne(recipeId)
      .then((result) => {
        setAllIng(Object.values(result.ingredients));
        setRecipe(result);
      })
      .catch((err) => console.log(err));

    commentService.getAll(recipeId).then(setComments);
  }, [recipeId]);

  let result = allIng.map((item) => item["ingredient"]);

  const addCommentHandler = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const newComment = await commentService.create(
      recipeId,
      formData.get("comment")
    );

    setComments((state) => [...state, newComment]);
  };

  return (
    <Container>
      <Row>
        <Col sm={8} className="mt-5 ">
          <h1 style={{ textAlign: "center" }}>{recipe.recipeName}</h1>
          <h5 className="mt-5 " id="description">
            {recipe.description}
          </h5>
          <Image
            style={{ height: "600px", width: "1000px" }}
            src={recipe.imgUrl}
            fluid
          ></Image>
          <h1 className="mt-5 mb-5">Ingredients</h1>
          <ul style={{ fontSize: "22px" }}></ul>
          {result.map((ingredient) => (
            <h4>
              <li>{ingredient}</li>
            </h4>
          ))}
          <h1 className="mt-5 mb-5">Directions</h1>
          <h4>{recipe.directions}</h4>

          <article className="create-comment mt-5 ">
            <div className="d-flex flex-column comment-section border border-info rounded-2">
              {comments.map(({ _id, text }) => (
                <>
                  <div className="bg-white p-2 ">
                    <div className="d-flex flex-row user-info ">
                      <img
                        className="rounded-circle"
                        src="https://i.imgur.com/RpzrMR2.jpg"
                        width="40"
                      />
                      <div className="d-flex flex-column justify-content-start ml-2">
                        <span className="d-block font-weight-bold name">
                          Marry Andrews
                        </span>
                        <span className="date text-black-50">
                          Shared publicly - Jan 2020
                        </span>
                      </div>
                    </div>
                    <div className="mt-2 badge bg-primary text-wrap ">
                      <p
                        style={{ whiteSpace: "pre-line" }}
                        className="comment-text text-wrap overflow-hidden"
                      >
                        {text}
                      </p>
                    </div>
                  </div>
                  <div className="bg-white">
                    <div className="d-flex flex-row fs-12">
                      <div className="like p-2 cursor">
                        <i className="fa fa-thumbs-o-up"></i>
                        <span className="ml-1">Like</span>
                      </div>
                      <div className="like p-2 cursor">
                        <i className="fa fa-commenting-o"></i>
                        <span className="ml-1">Comment</span>
                      </div>
                    </div>
                  </div>
                </>
              ))}

              <form className="bg-light p-2" onSubmit={addCommentHandler}>
                <div className="d-flex flex-row align-items-start">
                  <img
                    className="rounded-circle"
                    src="https://i.imgur.com/RpzrMR2.jpg"
                    width="40"
                  />
                  <textarea
                    style={{ whiteSpace: "pre-line" }}
                    name="comment"
                    className="form-control ml-1 shadow-none textarea"
                  ></textarea>
                </div>
                <div className="mt-2 text-right">
                  <button className="btn btn-primary btn-sm shadow-none">
                    Post comment
                  </button>
                </div>
              </form>
            </div>
          </article>
        </Col>

        <Col sm={4} className="mt-5">
          <h1 style={{ textAlign: "center" }}>Profile </h1>
        </Col>
      </Row>
    </Container>
  );
}
