import { useState } from "react";
import { createUser } from "../services/userService";

export default function RegisterModal({ hideModal }) {
  const [users, setUsers] = useState([]);

  const userCreateHandler = async (e) => {
    e.preventDefault();

    //Get data from the form data
    const data = Object.fromEntries(new FormData(e.currentTarget));

    //Create new user at the server
    const newUser = await createUser(data);

    //Add newly created user at the llocal state
    setUsers((state) => [...state, newUser]);

    console.log(users);
  };

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
            <input type="username" required name="username" />
            <label>Username</label>
          </div>
          <div className="input-box">
            <span className="icon">
              <ion-icon name="mail-open"></ion-icon>
            </span>
            <input type="email" required name="email" />
            <label>Email</label>
          </div>
          <div className="input-box">
            <span className="icon">
              <ion-icon name="lock-closed"></ion-icon>
            </span>
            <input type="password" required name="password" />
            <label>Password</label>
          </div>
          <div className="remember-forgot">
            <label>
              {" "}
              <input type="checkbox" />
              Agree to the terms and conditions
            </label>
          </div>
          <button type="submit" className="btn" onClick={hideModal}>
            Register
          </button>
          <div className="login-register">
            <p>
              Allready have an account?
              <a href="#" className="login-link">
                Login
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
