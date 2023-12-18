import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../../contexts/authContext";

export default function Header() {
  const { isAuthenticated, username } = useContext(AuthContext);

  return (
    <Navbar
      expand="lg"
      bg="dark"
      data-bs-theme="dark"
      className="bg-body-tertiary"
    >
      <Container>
        <Navbar.Brand href="/">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to={"/"}>
              Home
            </Nav.Link>
            <Nav.Link as={Link} to={"/recipes"}>
              All Recipes
            </Nav.Link>
          </Nav>
          <Nav className="justify-content-end">
            {isAuthenticated && (
              <>
                <Nav.Link as={Link} to={"/recipes/create"}>
                  CreateRecipe
                </Nav.Link>
                <Nav.Link as={Link} to={"/logout"}>
                  Logout
                </Nav.Link>
                <p> </p>
                <Nav.Link as={Link} to={"/profile"}>
                  Hello:{username}
                </Nav.Link>
              </>
            )}
            {!isAuthenticated && (
              <>
                <Nav.Link as={Link} to={"/login"}>
                  Login
                </Nav.Link>
                <Nav.Link as={Link} to={"/register"}>
                  Register
                </Nav.Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
