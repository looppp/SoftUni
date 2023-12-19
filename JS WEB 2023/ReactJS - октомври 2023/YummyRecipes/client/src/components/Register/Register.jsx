import { useContext } from "react";
import AuthContext from "../../contexts/authContext";
import useForm from "../../hooks/useForm";
import appWallpaper from "../../appWallpaper.jpg";

const registerFormKeys = {
  Email: "email",
  Password: "password",
  Repassword: "repassword",
};

export default function Register() {
  const { registerSubmitHandler } = useContext(AuthContext);

  const { values, onChange, onSubmit } = useForm(registerSubmitHandler, {
    [registerFormKeys.Email]: "",
    [registerFormKeys.Password]: "",
    [registerFormKeys.Repassword]: "",
  });
  return (
    <div
      style={{
        backgroundImage: `url(${appWallpaper})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
      className="register template d-flex justify-content-center align-items-center w-100 vh-100 bg-primary"
    >
      <div className=" p-5 rounded bg-white">
        <form id="register" onSubmit={onSubmit}>
          <h1 className="text-center mb-5">Register</h1>
          <div className="mb-2">
            <label htmlFor="email">Email</label>
            <input
              required
              name="email"
              type="email"
              placeholder="Enter Email"
              className="form-control"
              onChange={onChange}
              value={values[registerFormKeys.Email]}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="Password">Password</label>
            <input
              required
              name="password"
              type="Password"
              placeholder="Enter Password"
              className="form-control"
              onChange={onChange}
              value={values[registerFormKeys.Password]}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="repassword">Repeat Password</label>
            <input
              required
              name="repassword"
              type="Password"
              placeholder="Enter Password"
              className="form-control"
              onChange={onChange}
              value={values[registerFormKeys.Repassword]}
            />
          </div>
          <div className="d-grid">
            <button className="btn btn-primary mt-4 mx-5">Register</button>
          </div>
        </form>
      </div>
    </div>
  );
}
