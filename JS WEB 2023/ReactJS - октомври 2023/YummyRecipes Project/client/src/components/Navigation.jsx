export default function Navigation() {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <a href="index.html" className="nav-logo">
            <img src="./assets/logo.svg" alt="simply recipes" />
          </a>
          <button className="nav-btn btn">
            <i className="fas fa-align-justify"></i>
          </button>
        </div>
        <div className="nav-links">
          <a href="index.html" className="nav-link">
            {" "}
            home{" "}
          </a>
          <a href="about.html" className="nav-link">
            {" "}
            about{" "}
          </a>
          <a href="tags.html" className="nav-link">
            {" "}
            tags{" "}
          </a>
          <a href="recipes.html" className="nav-link">
            {" "}
            recipes{" "}
          </a>

          <div className="nav-link contact-link">
            <a href="contact.html" className="btn">
              {" "}
              contact{" "}
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
