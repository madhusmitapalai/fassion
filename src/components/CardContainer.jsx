import React from "react";
import { Row, Container, Col, Card, Button } from "react-bootstrap";
import img9 from "../images/p9.jpg";
import img4 from "../images/p4.jpg";
import img5 from "../images/p5.jpg";
import img1 from "../images/p6.jpg";
import img2 from "../images/p7.jpg";
import img3 from "../images/p1.jpg";
export const CardContainer = () => {
  return (
    <div>
      <Container className="card-container">
        <Row>
          <Col md={4} sm={12}>
            <Card className="card-1">
              <Card.Img variant="top" src={img1} />
              <Card.Body>
                <Card.Text className="card-content">
                  <span className="h3">winter long sleeve black and white</span>
                  <span className="para">$400.00</span>
                  <span>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="far fa-star"></i>
                    <i className="far fa-star"></i>
                    <i className="far fa-star"></i>
                  </span>
                  <span className="h2">add to card</span>
                </Card.Text>
                <Button className="buttons">order now</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} sm={12}>
            <Card className="card-1">
              <Card.Img variant="top" src={img9} />
              <Card.Body>
                <Card.Text className="card-content">
                  <span className="h3">winter long sleeve black and white</span>
                  <span className="para">$400.00</span>
                  <span>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="far fa-star"></i>
                    <i className="far fa-star"></i>
                    <i className="far fa-star"></i>
                  </span>
                  <span className="h2">add to card</span>
                </Card.Text>
                <Button className="buttons">order now</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} sm={12}>
            <Card className="card-1">
              <Card.Img variant="top" src={img5} />
              <Card.Body>
                <Card.Text className="card-content">
                  <span className="h3">winter long sleeve black and white</span>
                  <span className="para">$400.00</span>
                  <span>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="far fa-star"></i>
                    <i className="far fa-star"></i>
                    <i className="far fa-star"></i>
                  </span>
                  <span className="h2">add to card</span>
                </Card.Text>
                <Button className="buttons">order now</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} sm={12}>
            <Card className="card-1">
              <Card.Img variant="top" src={img4} />
              <Card.Body>
                <Card.Text className="card-content">
                  <span className="h3">winter long sleeve black and white</span>
                  <span className="para">$400.00</span>
                  <span>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="far fa-star"></i>
                    <i className="far fa-star"></i>
                    <i className="far fa-star"></i>
                  </span>
                  <span className="h2">add to card</span>
                </Card.Text>
                <Button className="buttons">order now</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} sm={12}>
            <Card className="card-1">
              <Card.Img variant="top" src={img2} />
              <Card.Body>
                <Card.Text className="card-content">
                  <span className="h3">winter long sleeve white</span>
                  <span className="para">$400.00</span>
                  <span>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="far fa-star"></i>
                    <i className="far fa-star"></i>
                    <i className="far fa-star"></i>
                  </span>
                  <span className="h2">add to card</span>
                </Card.Text>
                <Button className="buttons">order now</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} sm={12}>
            <Card className="card-1">
              <Card.Img variant="top" src={img3} />
              <Card.Body>
                <Card.Text className="card-content">
                  <span className="h3">winter long printed sleeve</span>
                  <span className="para">$400.00</span>
                  <span>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="far fa-star"></i>
                    <i className="far fa-star"></i>
                    <i className="far fa-star"></i>
                  </span>
                  <span className="h2">add to card</span>
                </Card.Text>
                <Button className="buttons">order now</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default CardContainer;
