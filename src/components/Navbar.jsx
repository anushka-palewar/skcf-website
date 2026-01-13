import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function CustomNavbar() {
  return (
    <Navbar 
      expand="lg" 
      bg="primary" 
      variant="dark" 
      sticky="top" 
      className="shadow-sm"
    >
      <Container>
        <Navbar.Brand as={Link} to="/" className="fw-bold fs-4">
          <i className="bi bi-heart-fill me-2"></i>
          SK Children Foundation
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/activities">Activities</Nav.Link>

            <NavDropdown title="Get Involved" id="get-involved-dropdown">
              <NavDropdown.Item href="https://rzp.io/l/skcfdonate" target="_blank">
                Donate
              </NavDropdown.Item>
              <NavDropdown.Item href="https://forms.gle/your-volunteer-form" target="_blank">
                Volunteer
              </NavDropdown.Item>
              <NavDropdown.Item href="mailto:skchildrenfoundation@gmail.com">
                Contact Us
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}