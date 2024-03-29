import { useContext, useEffect, useState } from "react";
import "../UserPage/UserPage.css";
import * as recipeService from "../../services/recipeService";
import * as profileService from "../../services/profileService";
import Alert from "react-bootstrap/Alert";

import AuthContext from "../../contexts/authContext";
import Recipe from "../AllRecipes/Recipe/Recipe";

export default function UserPage() {
  const { userId, username } = useContext(AuthContext);
  const [recipes, setRecipes] = useState([]);
  const [profile, setProfile] = useState({});
  const [isInEdit, setIsInEdit] = useState(false);

  useEffect(() => {
    profileService.getProfile(userId).then((x) => setProfile(x[0]));
    recipeService
      .getAllByUser(userId)
      .then(setRecipes)
      .catch((err) => console.log(err));
  }, []);

  const changeAboutHandler = (e) => {
    e.preventDefault();
    setIsInEdit(!isInEdit);
  };

  const saveEditHandler = async (e) => {
    e.preventDefault();
    await profileService.editProfile(profile._id, profile);
    setIsInEdit(!isInEdit);
  };

  const changeHandler = (e) => {
    e.preventDefault();
    setProfile((state) => ({
      ...state,
      [e.target.name]: e.target.value,
    }));
  };
  return (
    <>
      <div className="row py-5 px-4">
        <div className="col-md-5 mx-auto">
          <div className="bg-white shadow rounded overflow-hidden">
            <div className="px-4 pt-0 pb-4 cover">
              <div className="media align-items-end profile-head">
                <div className="profile mr-3">
                  <img
                    src={profile.profileUrl}
                    alt="..."
                    width="130"
                    className="rounded mb-2 img-thumbnail"
                  />
                </div>
              </div>
            </div>
            <h4 className="justify-content-left mt-5 ms-4 mb-0 overlay">
              {username}
            </h4>
            <div className="bg-light p-4 d-flex justify-content-end text-center ">
              <ul className="list-inline mb-0">
                <li className="list-inline-item">
                  <h5 className="font-weight-bold mb-0 d-block">
                    {Object.keys(recipes).length}
                  </h5>
                  <small className="text-muted">
                    <i className="fa-solid fa-bowl-food"></i>Recipes
                  </small>
                </li>
              </ul>
            </div>
            <div className="px-4 py-3">
              <h5 className="mb-0">About</h5>
              {!isInEdit && (
                <div
                  className="p-4 mt-3 rounded shadow-sm bg-light"
                  onDoubleClick={changeAboutHandler}
                >
                  <p className="font-italic mb-0">{profile.aboutYou}</p>
                </div>
              )}
              {isInEdit && (
                <div className=" form-group p-4 rounded shadow-sm bg-light">
                  <textarea
                    type="text"
                    name="aboutYou"
                    onChange={changeHandler}
                    className=" form-control font-italic mb-0"
                  />
                  <div className="form-group">
                    <button
                      type="button"
                      className="form-control  mt-2"
                      onClick={saveEditHandler}
                    >
                      Save Changes
                    </button>
                    <button
                      type="button"
                      className="form-control  mt-2"
                      onClick={changeAboutHandler}
                    >
                      Discard Changes
                    </button>
                  </div>
                </div>
              )}
            </div>
            <div className="py-4 px-4">
              <div className="d-flex align-items-center justify-content-between mb-3">
                <h5 className="mb-0">Recent recipes</h5>
              </div>
              <div className=" d-flex overflow-auto">
                {recipes.map((recipe) => (
                  <Recipe key={recipe._id} {...recipe} />
                ))}
                {recipes.length === 0 && (
                  <Alert variant="info" className="text-align-right p-0 mt-3">
                    <h1>There are no recipies yet!</h1>
                  </Alert>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
