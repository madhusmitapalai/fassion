import React from "react";
import { Container,Row,Col } from "react-bootstrap";
import imgs from '../images/p8.jpg'
import Girl from './Girl'
const Summer = () => {
  return (
    <div>
    
      <Container className="summer ">
      <h2 className='p-1 text-center'>summer sale</h2>
        <Row>
          <Col md={6} sm={12} className='summer-content'>
            <h1>sexy women floral embroidery</h1>
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English. Many desktop
              publishing packages and web page editors now use Lorem Ipsum as
              their default model text, and a search for 'lorem ipsum' will
              uncover many web sites still in their infancy.
            </p>
            <button className='buttons'>read mote</button>
          </Col>
          <Col md={6} sm={12}>
              <img src={imgs} alt='colss' className='imges'/>
          </Col>
        </Row>
      </Container>
      <Girl/>
    </div>
  );
};

export default Summer;
