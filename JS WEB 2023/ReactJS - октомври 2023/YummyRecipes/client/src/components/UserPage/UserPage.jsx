import { useContext, useEffect, useState } from "react";
import "../UserPage/UserPage.css";
import * as recipeService from "../../services/recipeService";
import * as authService from "../../services/authService";

import AuthContext from "../../contexts/authContext";

export default function UserPage() {
  const { userId, username } = useContext(AuthContext);
  const [recipes, setRecipes] = useState({});
  const [user, setUser] = useState({});
  const [isInEdit, setIsInEdit] = useState(false);

  useEffect(() => {
    authService.getUser().then(setUser);
    recipeService.getAllByUser(userId).then(setRecipes);
  }, []);

  const changeAboutHandler = (e) => {
    e.preventDefault();
    setIsInEdit(!isInEdit);
  };

  const saveEditHandler = (e) => {
    e.preventDefault();
    console.log("saved the neww input");
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
                    src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
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
                  className="p-4 rounded shadow-sm bg-light"
                  onDoubleClick={changeAboutHandler}
                >
                  <p className="font-italic mb-0">About</p>
                </div>
              )}
              {isInEdit && (
                <div className=" form-group p-4 rounded shadow-sm bg-light">
                  <textarea
                    type="text"
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
                      className="form-control mt-2"
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
                <h5 className="mb-0">Recent photos</h5>
                <a href="#" className="btn btn-link text-muted">
                  Show all
                </a>
              </div>
              <div className="row">
                <div className="col-lg-6 mb-2 pr-lg-1">
                  <img
                    src="https://images.unsplash.com/photo-1469594292607-7bd90f8d3ba4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
                    alt=""
                    className="img-fluid rounded shadow-sm"
                  />
                </div>
                <div className="col-lg-6 mb-2 pl-lg-1">
                  <img
                    src="https://images.unsplash.com/photo-1493571716545-b559a19edd14?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
                    alt=""
                    className="img-fluid rounded shadow-sm"
                  />
                </div>
                <div className="col-lg-6 pr-lg-1 mb-2">
                  <img
                    src="https://images.unsplash.com/photo-1453791052107-5c843da62d97?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
                    alt=""
                    className="img-fluid rounded shadow-sm"
                  />
                </div>
                <div className="col-lg-6 pl-lg-1">
                  <img
                    src="https://images.unsplash.com/photo-1475724017904-b712052c192a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
                    alt=""
                    className="img-fluid rounded shadow-sm"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
