// import { NavLink } from "react-router-dom";
import { Nav, Navbar, Container } from "react-bootstrap";

const Header = () => {
  return (
    <header>
      <Navbar fluid>
       <Container fluid>
       <Navbar.Brand className = "brand" href="/"> checkpoint </Navbar.Brand>
       <Nav className="me-auto">
         <Nav.Link href="/about">About</Nav.Link>
         <Nav.Link href="/getstarted">Get Started</Nav.Link>
         <Nav.Link href="why">Our Why</Nav.Link>
       </Nav>
       </Container>
     </Navbar>
    </header>
    );
  }
export default Header;
      // <Greeting /> 
