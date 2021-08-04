import { Carousel } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Container } from "react-bootstrap"


const Landing = () => {
   return (
   <>
   {/* Manage Goals */}
   <section className = "color-section" id = "manage">
      <div className = "container">
         <h1>
            MANAGE YOUR GOALS
         </h1>
      </div>

   </section>


{/* Facts and Statisitcs  */}
   <section className = "white-section" id = "stats">
   <Container>
   <Row>
   <Col>
      <h2 className = "factquote">
       A staggering 64% of millenials and 53% of Gen Z say they don't have many goals in life.
      </h2>
      </Col>
   </Row>
</Container> 

   </section>


{/* Testimonial Section */}
   <section className = "colored-section" id = "testimonials">
      {/* <h2 className = "testimonial-text">
         Hello, How are you doing today.
      </h2> */}
<Container fluid className = "wrap-carousel">
   <Row>
   <Col>
   <Carousel fade>
  <Carousel.Item className = "carousel-item">
     <div>
     <img
      className="d-block w-100"
      src="holder.js/400x200?text=First slide&bg=282c34"
      alt="First slide"
    />
     </div>
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item className = "carousel-item">
    <img
      className="d-block w-100"
      src="holder.js/400x200?text=Second slide&bg=282c34"
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item carousel-item>
    <img
      className="d-block w-100"
      src="holder.js/400x200?text=Third slide&bg=20232a"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
   </Col>
   </Row>
</Container>   
      </section>




   <section className = "color-section" id = "companys">
    <img className="co-logo" src="https://i.ibb.co/5M9QJtZ/tnw.png" alt="tnw-logo" />
    <img className="co-logo" src="https://i.ibb.co/pw1HV3T/bizinsider.png" alt="biz-logo" />
    <img className="co-logo" src="https://i.ibb.co/Xbvyrkz/mashable.png" alt="mash-logo" />
    <br />
    <img className="co-logo" src="https://i.ibb.co/gzNpjsL/Tech-Crunch.png" alt="crunch-logo" />
    <img className="co-logo" src="https://i.ibb.co/0D7dbkM/forbes.png" alt="forbes-logo" />

   </section>
   </>
   )
};

export default Landing;