import loginImg from "../Login/loginImg.jpg";

export default function Login() {
  return (
    <div
      style={{
        backgroundImage: `url(${loginImg})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
      className="login template d-flex justify-content-center align-items-center 100-w vh-100 bg-primary"
    >
      <div className="50-w p-5 rounded bg-white">
        <form>
          <h3 className="text-center">Login</h3>
          <div className="mb-2">
            <label htmlFor="user">Username</label>
            <input
              type="text"
              placeholder="Enter Email"
              className="form-control"
            />
          </div>
          <div className="mb-2">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              placeholder="Enter Email"
              className="form-control"
            />
          </div>
          <div className="mb-2">
            <label htmlFor="Password">Password</label>
            <input
              type="Password"
              placeholder="Enter Password"
              className="form-control"
            />
          </div>
          <div className="d-grid">
            <button className="btn btn-primary ">Login</button>
          </div>
        </form>
      </div>
    </div>
  );
}
