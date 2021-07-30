// import { NavLink,} from "react-router-dom";
import { Container, Navbar } from "react-bootstrap";


const Footer = () => {
  return (
    <>
    <footer fixed-bottom>    
    <Container>
  <Navbar  expand="lg md sm" variant="light">
    <Container>
      <Navbar.Brand href="#">Navbar</Navbar.Brand>
    </Container>
  </Navbar>
</Container> 
  </footer>
    
</>
  );
};

export default Footer;
