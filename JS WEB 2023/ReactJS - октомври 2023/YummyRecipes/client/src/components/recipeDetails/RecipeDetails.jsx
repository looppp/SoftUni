import React, { useContext, useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import * as recipeService from "../../services/recipeService";
import { Link, useNavigate, useParams } from "react-router-dom";
import "../recipeDetails/recipe.css";
import * as commentService from "../../services/commentService";
import AuthContext from "../../contexts/authContext";

const dateFormatter = new Intl.DateTimeFormat(undefined, {
  dateStyle: "long",
  timeStyle: "short",
});

export default function RecipeDetails() {
  const { recipeId } = useParams();
  const { email, userId } = useContext(AuthContext);
  const navigate = useNavigate();
  const [recipe, setRecipe] = useState([]);
  const [allIng, setAllIng] = useState([]);
  const [comments, setComments] = useState([]);
  const [videoID, setVideoID] = useState([]);

  useEffect(() => {
    recipeService
      .getOne(recipeId)
      .then((result) => {
        setVideoID(result.videoUrl.split("v=")[1]);
        setAllIng(Object.values(result.ingredients));
        setRecipe(result);
      })
      .catch((err) => console.log(err));

    commentService.getAll(recipeId).then(setComments);
  }, [recipeId]);

  let result = allIng.map((item) => item["ingredient"]);

  const [message, setMessage] = useState("");

  const addCommentHandler = async (e) => {
    e.preventDefault();
    const newComment = await commentService.create(recipeId, message);

    setComments((state) => [...state, { ...newComment, owner: { email } }]);

    setMessage("");
  };

  const recipeDeleteHandler = async () => {
    const hasConfirmed = confirm(
      `Are you sure you want to delete ${recipe.recipeName}`
    );
    if (hasConfirmed) {
      await recipeService.removeOne(recipeId);
      navigate("/recipes");
      //TODO: Delete all the comments for the current recipe
    }
  };

  return (
    <Container>
      <Row>
        <Col sm={8} className="mt-5 ">
          <h1 style={{ textAlign: "center" }}>{recipe.recipeName}</h1>
          <h5 className="mt-5 mb-5 " id="description">
            {recipe.description}
          </h5>
          <div className="text-center d-flex ">
            <p className=" fw-bold"> </p>{" "}
            <p className="ms-1 fw-bold">
              Published By {email} on {dateFormatter.format(recipe._createdOn)}
            </p>
          </div>
          <Image
            style={{ height: "500px", width: "1000px" }}
            src={recipe.imgUrl}
            fluid
          ></Image>
          {userId === recipe._ownerId && (
            <div className="creator-buttons d-flex text-center mt-4">
              <Link
                to={`/recipes/${recipeId}/edit`}
                className="btn btn-primary me-3 p-3"
              >
                Edit
              </Link>
              <button
                type="button"
                onClick={recipeDeleteHandler}
                className="btn btn-danger"
              >
                Delete
              </button>
              <p className=" ms-5 fw-bold fs-4 text">
                Cooking time: {recipe.cookingTime}
              </p>
              <p className=" ms-5 fw-bold fs-4 text">
                Servings: {recipe.servings}
              </p>
            </div>
          )}
          <h1 className="mt-5 mb-5">Ingredients</h1>
          <ul style={{ fontSize: "22px" }}></ul>
          {result.map((ingredient) => (
            <h4 key={ingredient}>
              <li>{ingredient}</li>
            </h4>
          ))}
          <h1 className="mt-5 mb-5">Directions</h1>
          <h4>{recipe.directions}</h4>

          <article className="create-comment mt-5 ">
            <div className="d-flex flex-column comment-section border border-info rounded-2">
              {comments.map(({ text, _createdOn, owner: { email } }) => (
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
                          {email}
                        </span>
                        <span className="date text-black-50">
                          Shared publicly - {dateFormatter.format(_createdOn)}
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
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  ></textarea>
                </div>
                <div className="mt-2  text-right">
                  <button className="btn btn-primary btn-sm shadow-none">
                    Post comment
                  </button>
                </div>
              </form>
            </div>
          </article>
        </Col>

        <Col sm={4} className="mt-5">
          <h1 style={{ textAlign: "right", marginBottom: "72px" }}>
            Recipe Video{" "}
          </h1>
          <iframe
            className="position-fixed mt-5 end-10 "
            width="666"
            height="315"
            src={`https://www.youtube.com/embed/${videoID}`}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </Col>
      </Row>
    </Container>
  );
}
