import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <Navbar
      expand="lg"
      bg="dark"
      data-bs-theme="dark"
      className="bg-body-tertiary"
    >
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
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
            <Nav.Link as={Link} to={"/login"}>
              Login
            </Nav.Link>
            <Nav.Link as={Link} to={"/register"}>
              Register
            </Nav.Link>
            {/* IfUser */}
            <Nav.Link as={Link} to={"/create"}>
              CreateRecipe
            </Nav.Link>
            <Nav.Link as={Link} to={"/userPage"}>
              Hello:Miroslav
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
