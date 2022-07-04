import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { NavLink } from 'react-router-dom';


const NavBar = () => {
  return (
   <Navbar bg="primary" variant="dark" className="mt-4 mb-4 rounded" expand="lg">
    <Container>
      <Navbar.Brand href="/">Blog.app</Navbar.Brand>
      <Nav className="me-right">
        <Nav.Link as={NavLink} to="/">Home</Nav.Link>
        <Nav.Link as={NavLink} to="/categories">Categories</Nav.Link>
        <Nav.Link as={NavLink} to="/about">About</Nav.Link>
      </Nav>
    </Container>
   </Navbar>
  );
}

export default NavBar;
