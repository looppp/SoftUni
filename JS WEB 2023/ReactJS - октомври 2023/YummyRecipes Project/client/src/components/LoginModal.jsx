export default function LoginModal(props) {
  return (
    <div className="wraper">
      <span className="icon-close">
        <ion-icon name="close"></ion-icon>
      </span>
      <div className="form-box login">
        <h2>Login</h2>
        <form action="#">
          <div className="input-box">
            <span className="icon">
              <ion-icon name="mail-open"></ion-icon>
            </span>
            <input type="email" required />
            <label>Email</label>
          </div>
          <div className="input-box">
            <span className="icon">
              <ion-icon name="lock-closed"></ion-icon>
            </span>
            <input type="password" required />
            <label>Password</label>
          </div>
          <div className="remember-forgot">
            <label>
              {" "}
              <input type="checkbox" />
              Remember me
            </label>
            <a href="#">Forgot Password?</a>
          </div>
          <button type="submit" className="btn">
            Login
          </button>
          <div className="login-register">
            <p>
              Don't have an account?
              <a href="#" className="register-link">
                Register
              </a>
            </p>
          </div>
        </form>
      </div>
      {/* Register form for modal */}
      <div className="form-box register">
        <h2>Register</h2>
        <form action="#">
          <div className="input-box">
            <span className="icon">
              <ion-icon name="person"></ion-icon>
            </span>
            <input type="email" required />
            <label>Username</label>
          </div>
          <div className="input-box">
            <span className="icon">
              <ion-icon name="mail-open"></ion-icon>
            </span>
            <input type="email" required />
            <label>Email</label>
          </div>
          <div className="input-box">
            <span className="icon">
              <ion-icon name="lock-closed"></ion-icon>
            </span>
            <input type="password" required />
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
