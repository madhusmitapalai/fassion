import React from "react";
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  FloatingLabel,
} from "react-bootstrap";

export const Contact = () => {
  return (
    <div>
      <Container fluid className="contact">
        <h2 className="p-2 text-center">summer sale</h2>
        <Container>
          <Row>
            <Col md={5} sm={12} className="contact-info">
              <span>
                <i class="fas fa-map-marker-alt"></i> lorem ipsum dolor site
                amet concectetor .
              </span>
              <span>
                {" "}
                <i class="fas fa-phone"></i>+91 999 999 9999
              </span>
              <span>
                <i class="far fa-envelope-open"></i> info@eshop.in
              </span>
            </Col>
            <Col md={7} sm={12}>
              <p>let's start a conversation !</p>
              <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                  <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <FloatingLabel controlId="floatingTextarea2" label="Comments">
                  <Form.Control
                    as="textarea"
                    placeholder="Leave a comment here"
                    style={{ height: "100px" }}
                  />
                </FloatingLabel>
                <Button variant="primary" type="submit" className="buttons">
                  Submit
                </Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  );
};
export default Contact;