import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "bootstrap/dist/css/bootstrap.min.css";

function NavBar() {
  return (
    <Navbar
      expand="lg"
      bg="light"
      variant="light"
      className="shadow-sm w-100 fixed-top"
    >
      {/*Logo */}
      <Navbar.Brand href="/">
        <img
          src="https://senecavct.co.uk/wp-content/uploads/2023/11/Northcoders.jpeg"
          alt="northcoders logo"
          className="northcoders-logo"
        />
      </Navbar.Brand>

      {/* Hamburger Menu Toggle for Small Screens */}
      <Navbar.Toggle aria-controls="basic-navbar-nav" />

      {/* Collapsible Navigation Links */}
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-center">
          {" "}
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/topics">Topics</Nav.Link>
          {/* Dropdown Menu */}
          <NavDropdown title="More" id="basic-nav-dropdown">
            <NavDropdown.Item href="/favouriteArticles">
              Favourite Articles
            </NavDropdown.Item>
            <NavDropdown.Item href="/myProfile">User Profile</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="/login">Login</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;
