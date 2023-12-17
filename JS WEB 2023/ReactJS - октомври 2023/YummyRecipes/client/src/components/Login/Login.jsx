import { useContext } from "react";
import appWallpaper from "../../appWallpaper.jpg";
import AuthContext from "../../contexts/authContext";
import useForm from "../../hooks/useForm";

const loginFormKeys = {
  Email: "email",
  Password: "password",
};

export default function Login() {
  const { loginSubmitHandler } = useContext(AuthContext);
  const { values, onChange, onSubmit } = useForm(loginSubmitHandler, {
    [loginFormKeys.Email]: "",
    [loginFormKeys.Password]: "",
  });

  return (
    <div
      style={{
        backgroundImage: `url(${appWallpaper})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
      className="login template d-flex justify-content-center align-items-center w-100 vh-100 bg-primary"
    >
      <div className=" p-5 rounded bg-white">
        <form id="login" onSubmit={onSubmit}>
          <h1 className="text-center mb-5">Login</h1>
          <div className="mb-2">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name={loginFormKeys.Email}
              placeholder="Enter Email"
              className="form-control"
              onChange={onChange}
              value={values[loginFormKeys.Email]}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="Password">Password</label>
            <input
              type="Password"
              id="login-password"
              placeholder="Enter Password"
              className="form-control"
              name={loginFormKeys.Password}
              onChange={onChange}
              value={values[loginFormKeys.Password]}
            />
          </div>
          <div className="d-grid">
            <button className="btn btn-primary mt-4 mx-5">Login</button>
          </div>
        </form>
      </div>
    </div>
  );
}
