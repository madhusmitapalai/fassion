import React from "react";
import { Col, Container, Row, Card } from "react-bootstrap";

const Products = () => {
  return (
    <div>
      <Container fluid className="products">
        <Container>
          <Row>
            <Col md={4} sm={10}>
              <Card className="Cards">
                <Card.Body className="card-img1" >
                <div className='product-content'>
                    <h1>sale 70% off</h1>
                    <p>don't miss this chance</p>
                    <button className="buttons">shop now</button>
                </div>
                </Card.Body>
               
              </Card>
            </Col>
            <Col md={4} sm={10}>
              <Row md={12} className='p-2'>
                <Card className="Cards">
                  <Card.Body className="card-img2">
                    <div>
                      <h1>sale 70% off</h1>
                      <p>don't miss this chance</p>
                      <button className="buttons">shop now</button>
                    </div>
                  </Card.Body>
                </Card>
              </Row>
              <Row md={12} className='p-2'>
                <Card className="Cards">
                  <Card.Body className="card-img3" >
                  <div>
                    <h1>sale 70% off</h1>
                    <p>don't miss this chance</p>
                    <button className="buttons">shop now</button>
                  </div>
                  </Card.Body>
                </Card>
              </Row>
            </Col>
            <Col md={4} sm={10}>
              <Card className="Cards">
                <Card.Body className="card-img4" >
                <div className='product-content'>
                    <h1>sale 50% off</h1>
                    <p>don't miss this chance</p>
                    <button className="buttons">shop now</button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  );
};

export default Products;
