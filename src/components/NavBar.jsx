import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "bootstrap/dist/css/bootstrap.min.css";
import { useContext } from "react";
import { LoginContext } from "../contexts/LoginContext";

function NavBar({ isLoggedIn }) {
  const { loginInfo, setLoginInfo } = useContext(LoginContext);
  return (
    <Navbar
      expand="lg"
      bg="light"
      variant="light"
      className="shadow-sm w-100 fixed-top"
    >
      <Navbar.Brand href="/">
        <img
          src="https://senecavct.co.uk/wp-content/uploads/2023/11/Northcoders.jpeg"
          alt="northcoders logo"
          className="northcoders-logo"
        />
      </Navbar.Brand>

      <Navbar.Toggle aria-controls="basic-navbar-nav" />

      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-center">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/topics">Topics</Nav.Link>
          <NavDropdown title="More" id="basic-nav-dropdown">
            <NavDropdown.Item href="/favouriteArticles">
              Favourite Articles
            </NavDropdown.Item>
            <NavDropdown.Item href="/myProfile">User Profile</NavDropdown.Item>
            <NavDropdown.Divider />
            {isLoggedIn ? (
              <NavDropdown.Item href="/myProfile">
                Welcome {loginInfo.name}
              </NavDropdown.Item>
            ) : (
              <NavDropdown.Item href="/login">Login</NavDropdown.Item>
            )}
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;
