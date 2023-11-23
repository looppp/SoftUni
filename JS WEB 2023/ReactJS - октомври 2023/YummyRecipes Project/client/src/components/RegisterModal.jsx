import { useState } from "react";
import { createUser } from "../services/userService";

const initialForm = {
  username: "",
  email: "",
  password: "",
};

export default function RegisterModal({ hideModal, showModal }) {
  const [users, setUsers] = useState([]);
  const [formValues, setFormValues] = useState(initialForm);

  const changeHandler = (e) => {
    setFormValues((state) => ({
      ...state,
      [e.target.name]: e.target.value,
    }));
  };

  const userCreateHandler = async (e) => {
    e.preventDefault();

    //Create new user at the server
    const newUser = await createUser(formValues);

    //Add newly created user at the llocal state
    setUsers((state) => [...state, newUser]);

    hideModal();
  };

  //TODO
  const usernameValidator = () => {};

  return (
    <div className="wraper">
      <span className="icon-close" onClick={hideModal}>
        <ion-icon name="close"></ion-icon>
      </span>
      <div className="form-box register">
        <h2>Register</h2>
        <form action="#" onSubmit={userCreateHandler}>
          <div className="input-box">
            <span className="icon">
              <ion-icon name="person"></ion-icon>
            </span>
            <input
              required
              type="text"
              name="username"
              value={formValues.username}
              onChange={changeHandler}
            />
            <label>Username</label>
          </div>
          <div className="input-box">
            <span className="icon">
              <ion-icon name="mail-open"></ion-icon>
            </span>
            <input
              required
              type="email"
              name="email"
              value={formValues.email}
              onChange={changeHandler}
            />
            <label>Email</label>
          </div>
          <div className="input-box">
            <span className="icon">
              <ion-icon name="lock-closed"></ion-icon>
            </span>
            <input
              required
              type="password"
              name="password"
              value={formValues.password}
              onChange={changeHandler}
            />
            <label>Password</label>
          </div>
          <div className="remember-forgot">
            <label>
              {" "}
              <input type="checkbox" />
              Agree to the terms and conditions
            </label>
          </div>
          <button type="submit" className="btn">
            Register
          </button>
          <div className="login-register">
            <p>
              Allready have an account?
              <a
                onClick={() => {
                  hideModal(), showModal();
                }}
                className="login-link"
              >
                Login
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
