import useForm from "../../hooks/useForm";

const loginFormKeys = {
  Email: "email",
  Password: "password",
};

export default function Login({ loginSubmitHandler }) {
  const { values, onChange, onSubmit } = useForm(
    {
      [loginFormKeys.Email]: "",
      [loginFormKeys.Password]: "",
    },
    loginSubmitHandler
  );

  return (
    <section id="login-page" className="auth">
      <form id="login" onSubmit={onSubmit}>
        <div className="container">
          <div className="brand-logo"></div>
          <h1>Login</h1>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name={loginFormKeys.Email}
            placeholder="Sokka@gmail.com"
            onChange={onChange}
            value={values[loginFormKeys.Email]}
          />

          <label htmlFor="login-pass">Password:</label>
          <input
            type="password"
            id="login-password"
            name={loginFormKeys.Password}
            onChange={onChange}
            value={values[loginFormKeys.Password]}
          />
          <input type="submit" className="btn submit" value="Login" />
          <p className="field">
            <span>
              If you don't have profile click <a href="#">here</a>
            </span>
          </p>
        </div>
      </form>
    </section>
  );
}
