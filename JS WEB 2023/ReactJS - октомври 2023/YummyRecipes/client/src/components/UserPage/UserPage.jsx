import { useContext, useEffect, useState } from "react";
import "../UserPage/UserPage.css";
import * as recipeService from "../../services/recipeService";
import * as profileService from "../../services/profileService";

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
    const result = await profileService.editProfile(profile._id, profile);
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
                <li className="list-inline-item">
                  <h5 className="font-weight-bold mb-0 d-block">745</h5>
                  <small className="text-muted">
                    <i className="fas fa-user mr-1"></i>Followers
                  </small>
                </li>
                <li className="list-inline-item">
                  <h5 className="font-weight-bold mb-0 d-block">340</h5>
                  <small className="text-muted">
                    <i className="fas fa-user mr-1"></i>Following
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
                  </div>
                </div>
              )}
            </div>
            <div className="py-4 px-4">
              <div className="d-flex align-items-center justify-content-between mb-3">
                <h5 className="mb-0">Recent recipes</h5>
              </div>
              {recipes.map((recipe) => (
                <Recipe key={recipe._id} {...recipe} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
