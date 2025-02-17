import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "bootstrap/dist/css/bootstrap.min.css"; // Ensure Bootstrap CSS is imported

function NavBar() {
  return (
    <Navbar
      expand="lg"
      bg="light"
      variant="light"
      className="shadow-sm w-100 fixed-top"
    >
      {/* Branding / Logo */}
      <Navbar.Brand href="#home">
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
          {/* Push items to the right */}
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#about">Topics</Nav.Link>
          <Nav.Link href="#contact">Articles</Nav.Link>
          {/* Dropdown Menu */}
          <NavDropdown title="More" id="basic-nav-dropdown">
            <NavDropdown.Item href="#services">
              Favourite Articles
            </NavDropdown.Item>
            <NavDropdown.Item href="#portfolio">User Profile</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#careers">Login</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;
