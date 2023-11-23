import LoginModal from "./LoginModal";
import { useState } from "react";
import RegisterModal from "./RegisterModal";

export default function Header() {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  //TODO: move the login and register modals to a diferent component!!!

  //Login
  const showLoginHandler = () => {
    setShowLogin(true);
    setShowRegister(false);
  };

  const hideLoginModal = () => {
    setShowLogin(false);
  };

  //Register

  const showRegisterHandler = () => {
    setShowRegister(true);
    setShowLogin(false);
  };

  const hideRegisterModal = () => {
    setShowRegister(false);
  };

  return (
    <div>
      <header>
        <h2 className="logo">Logo</h2>
        <nav className="navigation">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Recipes</a>
          <a href="#">Contact</a>
          <button className="btnLogin-popup" onClick={showLoginHandler}>
            Login
          </button>
          <button className="btnLogin-popup" onClick={showRegisterHandler}>
            Register
          </button>
        </nav>
      </header>
      {showLogin && (
        <LoginModal
          showModal={showRegisterHandler}
          hideModal={hideLoginModal}
        />
      )}
      {showRegister && (
        <RegisterModal
          showModal={showLoginHandler}
          hideModal={hideRegisterModal}
        />
      )}
    </div>
  );
}
